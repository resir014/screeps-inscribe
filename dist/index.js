"use strict";
/*
 * Inscribe - a series of helper classes for improving the logging experience
 * on Screeps.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Decorates a string of text with color.
 *
 * @param {string} str The string to format.
 * @param {string} fontColor Any HTML color name (`teal`) or hex code (`#33b5e5`).
 * @returns {string}
 */
function color(str, fontColor) {
    return "<span style=\"color:" + fontColor + "\">" + str + "</span>";
}
exports.color = color;
/**
 * Appends a link to log output
 *
 * @export
 * @param {string} href Any string-escaped link.
 * @param {string} title The link title.
 * @returns {string}
 */
function link(href, title) {
    return "<a href=\"" + href + "\" target=\"_blank\">" + title + "</a>";
}
exports.link = link;
/**
 * Allows tooltip to be sent to the formatter
 *
 * @export
 * @param {string} str The string to format
 * @param {string} tooltipText The tooltip text to give away
 * @returns {string}
 */
function tooltip(str, tooltipText) {
    return "<abbr title='" + tooltipText + "'>" + str + "</abbr>";
}
exports.tooltip = tooltip;
/**
 * Outputs a formatted version of `Game.time`
 *
 * @export
 * @param {string} [fontColor='gray'] Any HTML color name (`teal`) or hex code
 *   (`#33b5e5`). Defaults to `gray` if empty.
 * @returns {string}
 */
function time(fontColor) {
    if (fontColor === void 0) { fontColor = 'gray'; }
    return color(Game.time.toString(), fontColor);
}
exports.time = time;
/**
 * Initialise Inscribe functions to the global.
 *
 * @export
 * @returns {ScreepsInscribe}
 */
function init() {
    return { color: color, link: link, tooltip: tooltip, time: time };
}
exports.default = init;
