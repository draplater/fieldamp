import {calc} from "./double_in_multiple_field";
import {LinkList, Point} from "./geo_utils";

self.onmessage = function(e) {
    const [points, c1, c2, linkList] = e.data;
    points.forEach(x => {Object.setPrototypeOf(x, Point.prototype)});
    c1.forEach(x => {Object.setPrototypeOf(x, Point.prototype)});
    c2.forEach(x => {Object.setPrototypeOf(x, Point.prototype)});
    Object.setPrototypeOf(linkList, LinkList.prototype);
    linkList.list.forEach(x => {Object.setPrototypeOf(x[0], Point.prototype);
    Object.setPrototypeOf(x[1], Point.prototype)
    });
    calc(points, c1, c2, linkList, status => (postMessage as any)(status));
    self.close();
};