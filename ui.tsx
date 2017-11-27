import * as React from "react";
import {calc, DPStatus} from "./double_in_multiple_field";
import {getPointsAndLinks} from "./iits-tools";
import * as CalcWorker from "./calc.worker.ts";
import {Point} from "./geo_utils";


export namespace LinkFilter {
    export const all = (team: string) => true;
    export const teamOnly = (team: string) => team === window.PLAYER.team[0];
    export const no = (team: string) => false;
}


export class Dialog extends React.Component<Dialog.Props, Dialog.State> {
    constructor(props) {
        super(props);
        this.state = Dialog.savedState;
    }

    calculate() {
        const c1 = Array.from(this.state.points[0]);
        const c2 = Array.from(this.state.points[1]);

        const [pointList, linkList, guidToPoint] = getPointsAndLinks(this.state.linkFilter);

        this.setState({results: []});
        const worker = new CalcWorker();
        worker.onmessage = e => {
            const many_status = e.data;
            many_status.forEach(x => {
                Object.setPrototypeOf(x, DPStatus.prototype);
                x.correctProtoType();
            });
            this.setState({results: [...many_status, ...this.state.results]});
        };
        worker.postMessage([pointList.getAll(), c1, c2, linkList]);

        // calc(pointList.getAll(), c1, c2, linkList, many_status => {
        //     this.setState({results: [...many_status, ...this.state.results]});
        // });
    }

    drawItem(item: DPStatus) {
        const c1 = Array.from(this.state.points[0]);
        const c2 = Array.from(this.state.points[1]);

        window.plugin.drawTools.drawnItems.clearLayers();
        window.plugin.drawTools.import(item.getDrawToolsPath(c1, c2));

        this.setState({selectedResult: item});
    }

    render() {
        Object.assign(Dialog.savedState, this.state);
        return (
            <div>
                {
                    this.state.points.map((points, idx) => (
                        <p>
                            <button onClick={() => {
                                const [pointList, linkList, guidToPoint] = getPointsAndLinks();
                                points.add(guidToPoint.get(window.selectedPortal));
                                this.setState({});
                            }}> Set
                            </button>
                            Point {idx + 1}: {Array.from(points).map(x =>
                            <a onClick={() => {
                                points.forEach(point => {
                                    if (point.name == x.name) {
                                        points.delete(point);
                                        this.setState({});
                                    }
                                })
                            }}> {x.name} </a>
                        )}
                            <button onClick={() => {
                                points.clear();
                                this.setState({});
                            }}>Clear
                            </button>
                        </p>
                    ))
                }
                <button onClick={this.calculate.bind(this)}> Calculate</button>
                <form>
                    <input type="radio" name="linkfilter"
                           checked={this.state.linkFilter == LinkFilter.all}
                           onClick={() => {
                               this.setState({linkFilter: LinkFilter.all})
                           }}
                    /> Consider All Links
                    <input type="radio" name="linkfilter"
                           checked={this.state.linkFilter == LinkFilter.teamOnly}
                           onClick={() => {
                               this.setState({linkFilter: LinkFilter.teamOnly})
                           }}
                    /> Consider team Links
                    <input type="radio" name="linkfilter"
                           checked={this.state.linkFilter == LinkFilter.no}
                           onClick={() => {
                               this.setState({linkFilter: LinkFilter.no})
                           }}
                    /> Consider No Links
                </form>
                {this.state.results.length != 0 &&
                <div>
                    <textarea value={this.state.selectedResult ? this.state.selectedResult.getFullPath()
                        : "Select one plan to show route"}
                              readOnly
                              style={{width: "100%", height: "75px"}}
                    />
                    <table>
                        <thead>
                        <tr>
                            <th> Layers</th>
                            <th onClick={() => {
                                this.state.results.sort((a, b) =>
                                    (a.distance / a.layerCount) - (b.distance / b.layerCount));
                                this.setState({results: this.state.results});
                            }}> Avg. Dist.
                            </th>
                            <th> Dest.</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.results.map(result => (
                            <tr key={result.currentPoint.name + "##" + result.layerCount}>
                                <td>{result.layerCount}</td>
                                <td>{(result.distance / result.layerCount).toFixed(2)}</td>
                                <td><a onClick={() => {
                                    this.drawItem(result)
                                }}> {result.currentPoint.name} </a></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                }
            </div>
        );
    }
}

export namespace Dialog {
    export interface Props {

    }

    export interface State {
        points: [Set<Point>, Set<Point>],
        results: Array<DPStatus>,
        selectedResult: DPStatus | null,
        linkFilter: (team: string) => boolean
    }

    export let savedState: State = {
        points: [new Set(), new Set()],
        results: [],
        selectedResult: null,
        linkFilter: LinkFilter.teamOnly
    };
}
