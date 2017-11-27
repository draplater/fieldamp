export function rsplit(str: string, sep: string, maxsplit: number) {
    var split = str.split(sep);
    return maxsplit ? [ split.slice(0, -maxsplit).join(sep) ].concat(split.slice(-maxsplit)) : split;
}

export class MyMap<KeyType, ValueType> {
    private map = new Map<string, ValueType>();
    private serializeFunc: (key: KeyType) => string;
    constructor(serializeFunc?: (key: KeyType) => string) {
        this.serializeFunc = serializeFunc || JSON.stringify;
    }


    set(key: KeyType, value: ValueType): this {
        this.map.set(this.serializeFunc(key), value);
        return this;
    }

    get(key: KeyType): ValueType | undefined {
        return this.map.get(this.serializeFunc(key));
    }

    clear() {
        this.map.clear();
    }

    delete(key: KeyType): boolean {
        return this.map.delete(this.serializeFunc(key));
    }

    has(key: KeyType): boolean {
        return this.map.has(this.serializeFunc(key));
    }

    get size() {
        return this.map.size;
    }

    values() {
        return this.map.values();
    }

    // forEach(callbackfn: (value: ValueType, key: KeyType,
    //                      map: Map<KeyType, ValueType>) => void, thisArg?: any): void {
    //     this.map.forEach((value, key) => {
    //         callbackfn.call(thisArg, value, JSON.parse(key), this);
    //     });
    // }
}