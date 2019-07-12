;
/* module-key = 'com.atlassian.jira.plugins.jira-editor-plugin:context-manager', location = 'js/context-manager.js' */
define("jira/editor/context-manager",["jira/editor/context-detector","backbone","underscore"],function(b,d,a){var c=function(e){this._disableStates={all:null,table:null,a:null};this._tagList=a.difference(Object.keys(this._disableStates),"all");this._editorInstance=e;e.on("selection:update",function(g){var f=g.insidePreformatted||g.preformattedSelected;this._setDisable(f,"all");this._setDisable(f||g.insideTable,"table");this._setDisable(f||g.insideA,"a")}.bind(this));e.on("tabs:changed",function(){this._setDisable(false,"all");this._setDisable(false,"table");this._setDisable(false,"a")}.bind(this));a.extend(this,d.Events)};c.prototype._setDisable=function(f,e){if(this._disableStates[e]===f){return}this._disableStates[e]=f;this.trigger("change:"+e,{disableState:f});if("all"===e){this._tagList.forEach(function(g){this._setDisable(f,g)},this)}};c.prototype.isPreContextActive=function(){return true===this._disableStates.all};c.prototype.isContextActive=function(e){return true===this._disableStates[e]};c.prototype.getPasteSchemaForContext=function(){return b.detectPre(this._editorInstance.editor.selection.getNode())?this._editorInstance.pasteInsidePreSchemaSpec:this._editorInstance.pasteSchemaSpec};return c});;