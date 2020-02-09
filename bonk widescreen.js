/ ==UserScript==
// @name         Bonk2.io Stretch Widescreen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  makes bonk 2 widescreen :O
// @author       You
// @match        https://bonk2.io/*/
// @grant        none
// ==/UserScript==

(function() {var css = [
	".gamecanvas {",
	"    width: 100% !important;",
	"    height: 100% !important;",
	"    position: fixed;",
	"}",
	"#gamerenderer {",
	"    width: 100%;",
	"    height: 70% !important;",
	"}",
	"#newbonklobby {",
	"    width: 100%;",
	"    height: 95% !important;",
	"    position: fixed;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
