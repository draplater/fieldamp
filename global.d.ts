declare const $;

interface Window {
    plugin: any;
    dialog: any;
    iitcLoaded: any;
    bootPlugins: any;
    portals: any;
    links: any;
    map: any;
    selectedPortal: string;
    PLAYER: {
        team: "ENLIGHTENED" | "RESISTANCE"
    }
}

declare module "*.worker.ts" {
    const content: any;
    export = content;
}
