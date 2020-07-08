/**************************************************
 * file:        pagebuilder.py
 * written by:  Kotaro
 * data:        8th June 2020
 * description:
 *      a simple web page builder
**************************************************/


/*
A web page builder class. 
[parameters]
pages: page contents from pages (example: pages.js)
components: (common) page components (example: pagecomponents.js)
*/
var util = require("util");

exports.PageBuilder = function(page, components) {
    // local variables (const-like)
    var STYLES  = "styles";
    var SCRIPTS = "scripts";
    
    if (!page) {
        throw new Error("page is undefined");
    }

    if (!components) {
        throw new Error("no components specified");
    }
    
    this.title      = page.title || "Web Page";
    this.styles     = page.styles || [];
    this.scripts    = page.scripts || [];
    this.body       = page.body || "";
    this.components = components;
    this.contents   = null;
    
    /*** web page builder ***/
    this.buildPage = () => {
        var styleLinks = this.buildLinks(STYLES);
        var scriptLinks = this.buildLinks(SCRIPTS);
        
        return util.format(this.components.skelton, this.title, styleLinks, scriptLinks, this.body);
    };
    
    this.buildLinks = (type) => {
        var format = (type == STYLES) ? this.components.cssLinkFormat : this.components.scriptLinkFormat;
        var files = (type == STYLES) ? this.styles : this.scripts;
        
        if (files.length == 0) {
            return "";
        }
        
        var links = [];
        
        for (let index = 0; index < files.length; index++)
            links.push(util.format(format, files[index]));
        
        return "\t" + links.join("\n\t");
        
    };
    
};


