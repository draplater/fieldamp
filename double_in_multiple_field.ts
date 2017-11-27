import {LinkList, Point, PointList} from "./geo_utils";
import {MyMap} from "./util";
import * as fs from "fs";

export class DPStatus {
    readonly backPoint: DPStatus | null;
    readonly currentPoint: Point;
    readonly distance: number;
    readonly layerCount: number;

    constructor(backPoint: DPStatus, currentPoint: Point, distance: number,
                addonsLeft: Set<Point>, addonsRight: Set<Point>,
                layerCount: number) {
        this.backPoint = backPoint;
        this.currentPoint = currentPoint;
        this.distance = distance;
        this.layerCount = layerCount;
    }

    correctProtoType() {
        if(this.backPoint !== null) {
            Object.setPrototypeOf(this.backPoint, DPStatus.prototype);
            this.backPoint.correctProtoType();
        }
        Object.setPrototypeOf(this.currentPoint, Point.prototype);
    }

    getStackPath(): Array<DPStatus> {
        if (this.backPoint === null) {
            return [this];
        }
        return [this, ...this.backPoint.getStackPath()];
    }

    static pointsToPolyLine(points: Array<Point>, color?) {
        return {"type": "polyline", "latLngs":
                points.map(i =>
                ({
                    "lat": i.lat,
                    "lng": i.lng
                })),
            "color": color || "#a24ac3"};
    }

    getDrawToolsPath(c1: Array<Point>, c2: Array<Point>) {
        const stack = this.getStackPath();
        const middlePath = DPStatus.pointsToPolyLine(stack.map(x => x.currentPoint));
        const terminalPath = DPStatus.pointsToPolyLine([c1[0], c2[0], this.currentPoint, c1[0]]);
        const leftSidePaths = stack.slice(1).map(x =>
            DPStatus.pointsToPolyLine([x.currentPoint, c1[0]], "#d9d6c3"));
        const rightSidePaths = stack.slice(1).map(x =>
            DPStatus.pointsToPolyLine([x.currentPoint, c2[0]], "#d9d6c3"));
        return [middlePath, terminalPath, ...leftSidePaths, ...rightSidePaths];
    }

    getFullPath(): string {
        const stack = this.getStackPath();
        let ret = `(${stack[0].distance.toFixed(2)}, `+
            `${(stack[0].distance / stack.length).toFixed(2)})`;
        while(stack.length > 0) {
            const current_status = stack.pop();
            if(current_status.backPoint === null) {
                ret += `${current_status.currentPoint.name}`;
                continue;
            }
            ret += `${current_status.distance.toFixed(2)}--> ` +
                `${current_status.currentPoint.name}`;
        }
        return ret;
    }
}

function canLevelUp(s1: Array<Point>, s2: Array<Point>, c: Point, c2: Point) {
    const bottomPairs = [...s1.map(x => [x, s2[0]]), ...s2.map(x => [s1[0], x])];
    return bottomPairs.every(([i, j]) =>
        Point.theSameSide(i, j, c, c2) &&
               Point.calcCosine(c, i, j) > Point.calcCosine(c2, i, j) &&
               Point.calcCosine(c, j, i) > Point.calcCosine(c2, j, i)
    );
}

export function calc(points: Array<Point>, s1: Array<Point>, s2: Array<Point>, links: LinkList,
                     callback?: (result: Array<DPStatus>) => void):
[Array<MyMap<Point, DPStatus>>, number] {
    console.log(points);
    console.log(links);
    const dp = [new MyMap<Point, DPStatus> (x => JSON.stringify([x.lat, x.lng]))];

    const distances = new MyMap<[Point, Point], number>(
        ([i, j]) => JSON.stringify([i.lat, i.lng, j.lat, j.lng])
    );

    for(const i of points) {
        for(const j of points) {
            const distance = Point.calcRealDistance(i, j);
            distances.set([i, j], distance);
            distances.set([j, i], distance);
        }
    }

    // point_i in notCross => field (s1, s2, point_i) is valid
    const notCross = points.filter(point =>
        !s1.some(i => links.checkCrossInList(point, i)) &&
        !s2.some(i => links.checkCrossInList(point, i))
    );

    // (point_i, point_j) in superPoints => field (s1, s2, point_j) overlap (s1, s2, point_i)
    const superPoints: Array<[Point, Point]> = [];
    for(const outer of notCross) {
        for(const inner of notCross) {
            if(!links.checkCrossInList(inner, outer) && canLevelUp(s1, s2, inner, outer)) {
                superPoints.push([inner, outer]);
            }
        }
    }

    // the first field
    for(const point of points) {
        if(s1.indexOf(point) >= 0 || s2.indexOf(point) >= 0) {
            continue;
        }
        if(!s1.some( i => links.checkCrossInList(point, i)) &&
           !s2.some(i => links.checkCrossInList(point, i))) {
            const status = new DPStatus(null, point, Math.min(...[...s1, ...s2]
                .map(x => distances.get([point, x]))), new Set(), new Set(), 1);
            dp[0].set(point, status);
        }
    }
    if(callback !== undefined) {
        callback(Array.from(dp[0].values()));
    }

    let end = false;
    let level = 1;
    for(;!end; level+=1) {
        end = true;
        const dp_new = new MyMap<Point, DPStatus> (x => JSON.stringify([x.lat, x.lng]));
        const dp_old = dp.slice(-1)[0];
        dp.push(dp_new);
        for(const [point_inner, point] of superPoints) {
            if(s1.indexOf(point_inner) >= 0 || s2.indexOf(point_inner) >= 0 || point_inner == point) {
                continue;
            }
            const pointInnerStatus = dp_old.get(point_inner);
            if(pointInnerStatus === undefined) {
                continue;
            }

            const currentStatus = dp_new.get(point);
            const distance = pointInnerStatus.distance + distances.get([point_inner, point]);
            if(currentStatus === undefined || distance < currentStatus.distance) {
                const status = new DPStatus(pointInnerStatus, point,
                    distance, new Set(), new Set(), pointInnerStatus.layerCount + 1);
                dp_new.set(point, status);
                end = false;
            }
        }
        if(callback !== undefined) {
            const dp_latest = dp.slice(-1)[0];
            callback(Array.from(dp_latest.values()));
        }
    }

    return [dp, level];
}

export function main(points: PointList, links: LinkList, c1_s, c2_s) {
    const c1 = c1_s.map(x => points.get_by_name(x));
    const c2 = c2_s.map(x => points.get_by_name(x));

    const [dp, level] = calc(points.getAll(), c1, c2, links);
    dp.forEach((dp_i, idx) => {
        console.log(idx + 1);
        for (const status of Array.from(dp_i.values())) {
            console.log(status.getFullPath());
            console.log(JSON.stringify(status.getDrawToolsPath(c1, c2)));
        }
    });
}

if (typeof require != 'undefined' && require.main==module) {
    const pointList = PointList.from_string(fs.readFileSync(process.argv[2], "utf-8"));
    const linkList = LinkList.from_string(fs.readFileSync(process.argv[3], "utf-8"), pointList);
    main(pointList, linkList, [process.argv[4]], [process.argv[5]]);
}
