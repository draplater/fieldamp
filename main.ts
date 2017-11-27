import {Dialog} from "./ui";
import * as React from "react";
import * as ReactDOM from "react-dom";

function wrapper() {
    if (typeof window.plugin !== 'function') {
        window.plugin = function () {
        };
    }

    window.plugin.multipleFieldCalculator = {};

    window.plugin.multipleFieldCalculator.showDialog = function () {
        const dialog = window.dialog({
            title: "Multiple Field Calculator",
            html: '<div id="multiple-calculator-dialog"></div>'
        }).parent();
        $(".ui-dialog-buttonpane", dialog).remove();
        // width first, then centre
        dialog.css("width", 300).css({
            "top": ($(window).height() - dialog.height()) / 2,
            "left": ($(window).width() - dialog.width()) / 2
        });

        ReactDOM.render(React.createElement(Dialog),
            document.getElementById("multiple-calculator-dialog")
        );
    }
}

function setup() {
    wrapper();
    // add controls to toolbox
    var link = $("<a onclick=\"window.plugin.multipleFieldCalculator.showDialog();\" title=\"Calculate multiple field.\">Calculate Multiple Field</a>");
    $("#toolbox").append(link);
    // delete setup to ensure init can't be run again
    // delete setup;
}

// IITC plugin setup
if (window.iitcLoaded) {
    setup();
} else if (window.bootPlugins) {
    window.bootPlugins.push(setup);
} else {
    window.bootPlugins = [setup];
}
