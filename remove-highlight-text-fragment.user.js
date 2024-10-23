// ==UserScript==
// @name         Remove Highlight Text Fragment
// @namespace    https://github.com/Drakmyth/remove-highlight-text-fragment
// @version      0.1
// @author       Drakmyth
// @description  A Tampermonkey userscript to automatically remove highlight fragments from Google/Bing search results
// @homepage     https://github.com/Drakmyth/remove-highlight-text-fragment
// @updateURL    https://github.com/Drakmyth/remove-highlight-text-fragment/raw/master/remove-highlight-text-fragment.user.js
// @downloadURL  https://github.com/Drakmyth/remove-highlight-text-fragment/raw/master/remove-highlight-text-fragment.user.js
// @supportURL   https://github.com/Drakmyth/remove-highlight-text-fragment/issues
// @license      MIT
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length <= 0) return;

    for (let entry of navigationEntries) {
        const parsed_url = entry.name.split('#:~:text');
        if (parsed_url.length > 1) {
            console.log(`Highlight fragment found! Redirecting to ${parsed_url[0]}`);
            window.location=parsed_url[0];
        }
    }
})();