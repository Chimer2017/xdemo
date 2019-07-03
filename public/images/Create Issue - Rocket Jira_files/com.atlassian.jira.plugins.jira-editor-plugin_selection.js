;
/* module-key = 'com.atlassian.jira.plugins.jira-editor-plugin:selection', location = 'js/editor-selection.js' */
define("jira/editor/selection",["jira/editor/constants"],function(b){var a=function(d){this.editor=d};a.prototype.trimSelection=function(){var j=false;var g=this.editor.selection.getRng();if(g.collapsed){return false}if(!g.toString().trim()){g.collapse(true);this.editor.selection.setRng(g);this.editor.focus();return true}var k=g.startContainer;var d=g.startOffset;var e=g.endContainer;var h=g.endOffset;if(k&&k.nodeType===Node.TEXT_NODE){var i=k.nodeValue.substring(d);var f=c(i,b.LEFT_WHITESPACE_MATCHER);if(f){j=true;if(i.length===f.length){g.setStartAfter(k)}else{g.setStart(k,d+f.length)}}}if(e&&e.nodeType===Node.TEXT_NODE){var i=e.nodeValue.substring(0,h);var f=c(i,b.RIGHT_WHITESPACE_MATCHER);if(f){j=true;if(i.length===f.length){g.setEndBefore(e)}else{g.setEnd(e,h-f.length)}}}if(j){this.editor.selection.setRng(g)}return j};a.prototype.hasSelection=function(){return !this.editor.selection.getRng().collapsed};return a;function c(f,e){var d=f.match(e);return(null!==d)?d[0]:""}});;