import {LinkList, Point, PointList} from "./geo_utils";

export function getPointsAndLinks(fictionRestriction?: (fiction: "E" | "R") => boolean):
[PointList, LinkList, Map<string, Point>] {
    const b = window.map.getBounds();
    const portalsList = [];
    const guidToPoint = new Map();

    for (const x in window.portals) {
        const p = window.portals[x];
        if (p._latlng.lat < b._southWest.lat || p._latlng.lng < b._southWest.lng
            || p._latlng.lat > b._northEast.lat || p._latlng.lng > b._northEast.lng) continue;
        const point = new Point(p.options.data.title, p._latlng.lat, p._latlng.lng);
        portalsList.push(point);
        guidToPoint.set(x, point);
    }
    const pointList = new PointList(portalsList);

    const pointPairs = [];
    for (const x in window.links) {
        const p = window.links[x];
        if(fictionRestriction && !fictionRestriction(p.options.data.team)) {
            continue;
        }
        // skip if not currently visible
/*        let visible = false;
        for (const i in p._latlngsinit) {
            if (p._latlngsinit[i].lat > b._southWest.lat && p._latlngsinit[i].lat < b._northEast.lat &&
                p._latlngsinit[i].lng > b._southWest.lng && p._latlngsinit[i].lng < b._northEast.lng)
                visible = true;
        }
        if (!visible)
            continue;*/
        let oPoint = guidToPoint.get(p.options.data.oGuid);
        if(oPoint === undefined) {
            oPoint = new Point("Unknown", p._latlngsinit[0].lat, p._latlngsinit[0].lng);
            guidToPoint.set(p.options.data.oGuid, oPoint);
        }
        let dPoint = guidToPoint.get(p.options.data.dGuid);
        if(dPoint === undefined) {
            dPoint = new Point("Unknown", p._latlngsinit[1].lat, p._latlngsinit[1].lng);
            guidToPoint.set(p.options.data.dGuid, dPoint);
        }
        pointPairs.push([oPoint, dPoint]);
    }

    const linksList = new LinkList(pointPairs);
    return [pointList, linksList, guidToPoint];
}
