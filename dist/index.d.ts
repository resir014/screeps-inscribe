export interface ScreepsInscribe {
    /**
     * Decorates a string of text with color.
     *
     * @param {string} str The string to format.
     * @param {string} fontColor Any HTML color name (`teal`) or hex code (`#33b5e5`).
     * @returns {string} A string output of the color-formatted text.
     * @memberof IInscribe
     */
    color(str: string, fontColor: string): string;
    /**
     * Appends a link to log output
     *
     * @param {string} href Any string-escaped link.
     * @param {string} title The link title.
     * @returns {string} A console output string with link.
     * @memberof IInscribe
     */
    link(href: string, title: string): string;
    /**
     * Allows tooltip to be sent to the formatter
     *
     * @param {string} str The string to format
     * @param {string} tooltipText The tooltip text to give away
     * @returns {string} The tooltipped text for the Screeps console.
     * @memberof IInscribe
     */
    tooltip(str: string, tooltipText: string): string;
    /**
     * Outputs a formatted version of `Game.time`
     *
     * @param {string} [color] Any HTML color name (`teal`) or hex code
     *   (`#33b5e5`). Defaults to `gray` if empty.
     * @returns {string} A pretty-formatted `Game.time`.
     * @memberof Inscribe
     */
    time(color?: string): string;
}
/**
 * Initialise Inscribe functions to the global.
 *
 * @export
 */
export declare function init(): ScreepsInscribe;
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
