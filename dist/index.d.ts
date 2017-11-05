/**
 * Decorates a string of text with color.
 *
 * @param {string} str The string to format.
 * @param {string} fontColor Any HTML color name (`teal`) or hex code (`#33b5e5`).
 * @returns {string}
 */
export declare function color(str: string, fontColor: string): string;
/**
 * Appends a link to log output
 *
 * @export
 * @param {string} href Any string-escaped link.
 * @param {string} title The link title.
 * @returns {string}
 */
export declare function link(href: string, title: string): string;
/**
 * Allows tooltip to be sent to the formatter
 *
 * @export
 * @param {string} str The string to format
 * @param {string} tooltipText The tooltip text to give away
 * @returns {string}
 */
export declare function tooltip(str: string, tooltipText: string): string;
/**
 * Outputs a formatted version of `Game.time`
 *
 * @export
 * @param {string} [fontColor='gray'] Any HTML color name (`teal`) or hex code
 *   (`#33b5e5`). Defaults to `gray` if empty.
 * @returns {string}
 */
export declare function time(fontColor?: string): string;
/**
 * Initialise Inscribe functions to the global.
 *
 * @export
 * @returns {ScreepsInscribe}
 */
export default function init(): {
    color: (str: string, fontColor: string) => string;
    link: (href: string, title: string) => string;
    tooltip: (str: string, tooltipText: string) => string;
    time: (fontColor?: string) => string;
};
