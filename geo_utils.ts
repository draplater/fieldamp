import {MyMap, rsplit} from './util';

export class Vector2D {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    negative() {
        return new Vector2D(-this.x, -this.y);
    }

    static cross(a: Vector2D, b: Vector2D) {
        /* cross product */
        return a.x * b.y - b.x * a.y;
    }
}

export class Point {
    readonly lat: number;
    readonly lng: number;
    readonly name: string;

    constructor(name, lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.name = name
    }

    subtract(other: Point) {
        return new Vector2D(this.lat - other.lat, this.lng - other.lng)
    }

    static theSameSide(a: Point, b: Point, c: Point, c2: Point) {
        const f = (x: number, y: number) => (y - a.lng) * (b.lat - a.lat) - (x - a.lat) * (b.lng - a.lng);
        return f(c.lat, c.lng) * f(c2.lat, c2.lng) > 0;
    }

    static calcDistance(a: Point, b: Point) {
        return Math.sqrt(Math.pow(a.lat - b.lat, 2) + Math.pow(a.lng - b.lng, 2));
    }

    static calcRealDistance(a: Point, b: Point) {
        const [a_lng, a_lat, b_lng, b_lat] = [a.lng, a.lat, b.lng, b.lat].map(angle => angle * Math.PI / 180);
        const dlon = b_lng - a_lng;
        const dlat = b_lat - a_lat;
        const t = Math.pow(Math.sin(dlat / 2), 2) +
            Math.cos(a_lat) * Math.cos(b_lat) * Math.pow(Math.sin(dlon / 2), 2);
        const c = 2 * Math.asin(Math.sqrt(t));
        return 6367 * c
    }

    static calcCosine(a: Point, b: Point, c: Point) {
        return ((a.lat - b.lat) * (c.lat - b.lat) +
            (a.lng - b.lng) * (c.lng - b.lng)) /
            Point.calcDistance(b, a) / Point.calcDistance(b, c);
    }

    static checkCross(a: Point, b: Point, c: Point, d: Point) {
        const ac = c.subtract(a);
        const ad = d.subtract(a);
        const bc = c.subtract(b);
        const bd = d.subtract(b);
        const ca = ac.negative();
        const cb = bc.negative();
        const da = ad.negative();
        const db = bd.negative();
        return (Vector2D.cross(ac, ad) * Vector2D.cross(bc, bd) < 0) &&
            (Vector2D.cross(ca, cb) * Vector2D.cross(da, db) < 0);
    }

    static isInsideTriangle(a: Point, b: Point, c: Point, p: Point) {
        const pa = a.subtract(p);
        const pb = b.subtract(p);
        const pc = c.subtract(p);
        const t1 = Vector2D.cross(pa, pb);
        const t2 = Vector2D.cross(pb, pc);
        const t3 = Vector2D.cross(pc, pa);
        return t1 > 0 && t2 > 0 && t3 > 0 || t1 < 0 && t2 < 0 && t3 < 0;
    }
}

export class PointList {
    private byName: Map<string, Point>;
    private reverseLookup: MyMap<[number, number], Point>;

    constructor(points: Array<Point>) {
        this.byName = new Map();
        this.reverseLookup = new MyMap();
        points.forEach(point => {
            this.byName.set(point.name, point);
            this.reverseLookup.set(
                [point.lat, point.lng], point);
        });
    }

    static from_string(input_string): PointList {
        const points = input_string.split("\n")
            .map(line => {
                const [name, lat_str, lng_str] = rsplit(line, ",", 2);
                return new Point(name.slice(1, -1), parseFloat(lat_str), parseFloat(lng_str));
            });
        return new PointList(points);
    }

    get_by_name(name: string) {
        return this.byName.get(name);
    }

    get_name_by_loc(lat: number, lng: number) {
        return this.reverseLookup.get([lat, lng]);
    }

    get_name_by_point(point: Point) {
        return this.reverseLookup.get([point.lat, point.lng]);
    }

    getAll(): Array<Point> {
        return Array.from(this.byName.values())
    }
}

export class LinkList {
    private list: Array<[Point, Point]>;

    constructor(linkList: Array<[Point, Point]>) {
        this.list = linkList;
    }

    static from_string(input_string, points: PointList): LinkList {
        const linkList = input_string.split("\n")
            .map(line => {
                const [start_lat, start_lng,
                    end_lat, end_lng, team] = line.trim().split(",");
                if (team !== "E") return null;
                const start = points.get_name_by_loc(parseFloat(start_lat),
                    parseFloat(start_lng)) || new Point("Unknown", parseFloat(start_lat), parseFloat(start_lng));
                const end = points.get_name_by_loc(parseFloat(end_lat),
                    parseFloat(end_lng)) || new Point("Unknown", parseFloat(end_lat), parseFloat(end_lng));
                return [start, end]
            })
            .filter(x => x !== null);
        return new LinkList(linkList);
    }

    checkCrossInList(a: Point, b: Point) {
        for(const [s, t] of this.list) {
            if(Point.checkCross(a, b, s, t)) {
                return true;
            }
        }
        return false;
    }
}