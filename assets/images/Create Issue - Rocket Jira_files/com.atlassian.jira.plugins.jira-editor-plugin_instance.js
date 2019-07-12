;
/* module-key = 'com.atlassian.jira.plugins.jira-editor-plugin:instance', location = 'js/editor-instance.js' */
define("jira/editor/instance",["jira/editor/analytics","jira/editor/analytics-shortcuts","jira/util/navigator","jira/editor/tinymce","jira/editor/context-manager","jira/editor/context-detector","jira/editor/schema","jira/editor/selection","wiki-edit/SpeechRecognition","jira/util/logger","jquery","backbone","underscore","wrm/context-path"],function(i,g,o,m,n,h,e,f,b,l,d,k,j,c){var a=function(q,p){this.element=q;this.options=j.extend({},p)};j.extend(a.prototype,k.Events);a.prototype.init=function(q){this.editor=q;this.operationOverride={};this.analyticsShortcuts=new g(this.editor);this.selection=new f(this.editor);this.editor.on("NodeChange",function(v){var t=i.startMeasure();if(!v){return}if(v.element.nodeName.toLowerCase()==="img"){this.editor.fire("content")}var s=i.startMeasure();var u=d(v.element);this.trigger("selection:update",{insidePreformatted:h.detectPre(u),preformattedSelected:h.detectPreWithinSelection(this.editor.selection.getContent()),insideTable:h.detectTable(u),insideA:h.detectA(u)});s.measure("nodechange.context-detection");t.measure("nodechange")}.bind(this));this.editor.on("change SetContent blur",this._onChange.bind(this));this.editor.on("keyup",j.debounce(this._onChange.bind(this),1000));this.editor.on("init",function(t){var s=t.target;["tt","del","sup","sub","cite"].forEach(function(v){s.formatter.register(v,{block:v,remove:"all"})});var u=s.formatter.get("removeformat");if(u.length>0&&typeof u[0]==="object"){u[0].selector+=",tt"}});q.on("keydown",function(s){if(s.isDefaultPrevented()){return}var t=d(q.selection.getStart());if(s.keyCode===m.util.VK.ENTER&&!s.shiftKey&&t.is("td > p, th > p, th > br, td > br, td, th")){s.preventDefault();q.execCommand("InsertLineBreak",false,s)}if(s.keyCode===m.util.VK.ENTER&&(t.is("panel-title, panel-title *")||t.parent().hasClass("panelHeader"))){s.preventDefault()}});var p=function(){if((/(Edge)\/(\d+)\.(\d+)/).test(o._getUserAgent())){return"edge"}else{if(o.isIE()){return"ie"}else{if(o.isChrome()){return"chrome"}else{if(o.isMozilla()){return"firefox"}else{if(o.isSafari()){return"safari"}}}}}return""};i.sendEvent("editor.instance.init");i.sendEvent("bundled.editor.instance.init");var r=p();if(r){i.sendEvent("editor.instance.init."+r)}this.contextManager=new n(this);q.contextManager=this.contextManager};a.prototype.getId=function(){return this.editor.id};a.prototype.relayEvent=function(q,r,p){this.editor.on(q,function(s){r(s)},p)};a.prototype.getAllowedOperations=function(){return["paragraph","h1","h2","h3","h4","h5","h6","monospace","paragraph-quote","block-quote","delete","superscript","subscript","cite","monospace-inline",":)",":(",":P",":D",";)","(y)","(n)","(i)","(/)","(x)","(!)","(+)","(-)","(?)","(on)","(off)","(*)","(*r)","(*g)","(*b)","(*y)","bold","italic","underline","color","bullet-list","numbered-list","mention","table","code","noformat","panel","hr","speech","link","link-mail","link-anchor","link-attachment","image","image-attachment","attachment","editorInsertContent","editorInsertContentInNewLine","editorReplaceContent","editorReplaceContentInNewLine"]};a.prototype._isOperationSupported=function(p){var q=this.getAllowedOperations().filter(function(r){if(r instanceof Object){return r.name===p}else{return r===p}});return q.length>0};a.prototype._assertOperationIsSupported=function(p){if(!this._isOperationSupported(p)){l.error("Operation not supported:",p)}};a.prototype._selectedTextSanitized=function(){return e.sanitizeHtml(this.editor.selection.getContent(),this.editor,this.pasteInsidePreSchemaSpec)};a.prototype.executeOperation=function(y,v){this._assertOperationIsSupported(y);var r=this._mapOperationNameToTinymce(y);var w=this.operationOverride[y];if(w){i.sendEvent("editor.instance.operation."+y);w(v);return true}if("editorReplaceContentInNewLine"===y){this.editor.execCommand("mceReplaceContent",false,"<br />"+v.content)}else{if("editorReplaceContent"===y){this.editor.execCommand("mceReplaceContent",false,v.content)}else{if("editorInsertContentInNewLine"===y){this.editor.insertContent("<br />"+v.content)}else{if("editorInsertContent"===y){this.editor.insertContent(v.content)}else{if("hr"===y){this.editor.insertContent("<hr />")}else{if("color"===y){this.editor.execCommand("ForeColor",true,v)}else{if(["h1","h2","h3","h4","h5","h6","paragraph","paragraph-quote","block-quote","monospace","monospace-inline","cite"].indexOf(y)>-1){this.editor.execCommand("mceToggleFormat",true,r)}else{if(["bold","italic","underline","delete","superscript","subscript"].indexOf(y)>-1){if(this.selection.trimSelection()){if(!this.selection.hasSelection()){i.sendEvent("editor.instance.selection.collapsed",{op:y});return false}else{i.sendEvent("editor.instance.selection.trimmed",{op:y})}}this.editor.execCommand(r,true)}else{if(["bullet-list","numbered-list"].indexOf(y)>-1){this.editor.execCommand(r,true)}else{if(this._emoticonSourceMap(y)){var x;if(AJS&&AJS.contextPath){x=AJS.contextPath()}else{x=""}var u=x+"/images/icons/emoticons/"+this._emoticonSourceMap(y);this.editor.insertContent('<img class="emoticon" src="'+u+'" height="16" width="16" align="absmiddle" alt="" border="0">')}else{if("link"===y){var t=(this._selectedTextSanitized()||"link title");this.editor.selection.setContent("["+t+"|http://example.com]")}else{if("link-anchor"===y){var t=(this._selectedTextSanitized()||"anchor");this.editor.selection.setContent("[#"+t+"]")}else{if("link-mail"===y){var t=(this._selectedTextSanitized()||"mail@example.com");this.editor.selection.setContent("[mailto:"+t+"]")}else{if("mention"===y){var t=(this._selectedTextSanitized()||"Mention someone by typing their name...");this.editor.selection.setContent("@");var q=this.getSelectionStart();this.editor.selection.setContent(t);this.setSelectionStart(q)}else{if("attachment"===y&&v.attachment){if(v.attachment.type==="image"){var p=v.attachment.href||c()+"/images/icons/attach/image.gif";if(v.attachment.thumbnailable){p=p.replace("/attachment/","/thumbnail/")}var s=JIRA.Editor.Tags.Templates.attachedImage({source:p,filename:v.attachment.name})}else{var s=JIRA.Editor.Tags.Templates.attachedFile({title:v.attachment.name,href:v.attachment.href,filename:v.attachment.name})}this.editor.insertContent(s)}else{if("code"===y){var t=(this._selectedTextSanitized()||"// code placeholder"+"\n");this.editor.selection.setContent('<pre class="code panel" data-language="code-java">'+t+"</pre>")}else{if("panel"===y){var t=(this.editor.selection.getContent()||"Some text with a title");this.editor.selection.setContent('<div class="plain panel" style="border-width: 1px;"><panel-title>'+"My title"+"</panel-title><p>"+t+"</p></div>")}else{if("noformat"===y){var t=(this._selectedTextSanitized()||"*no* further _formatting_ is done here");this.editor.selection.setContent('<pre class="noformat panel">'+t+"</pre>")}else{if("table"===y){var t=(this.editor.selection.getContent()||("Col"+" A1"));this.editor.selection.setContent('<div class="table-wrap"><table class="confluenceTable mce-item-table" data-mce-selected="1"><tbody><tr><th class="confluenceTh">'+"Heading"+' 1</th><th class="confluenceTh">'+"Heading"+' 2</th></tr><tr><td class="confluenceTd">'+t+'</td><td class="confluenceTd">Col A2</td></tr></tbody></table></div>');i.sendEvent("editor.instance.table.toolbar")}else{if("speech"===y){b.start(null,this)}else{if(["link-attachment","image","image-attachment"].indexOf(y)>-1){l.warn("Not supported yet "+y);return false}else{l.warn("Unsupported operation "+y);return false}}}}}}}}}}}}}}}}}}}}}i.sendEvent("editor.instance.operation."+y);this.trigger("content");l.trace("jira.editor.operation.executed");return true};a.prototype._mapOperationNameToTinymce=function(p){var q={bold:"Bold",italic:"Italic",underline:"Underline","bullet-list":"InsertUnorderedList","numbered-list":"InsertOrderedList",blockquote:"mceBlockQuote",paragraph:"p","paragraph-quote":"blockquote","block-quote":"blockquote",monospace:"samp","monospace-inline":"samp-inline","delete":"strikethrough",superscript:"superscript",subscript:"subscript"};if(p in q){return q[p]}return p};a.prototype._emoticonSourceMap=function(q){var p={":)":"smile.png",":(":"sad.png",":P":"tongue.png",":D":"biggrin.png",";)":"wink.png","(y)":"thumbs_up.png","(n)":"thumbs_down.png","(i)":"information.png","(/)":"check.png","(x)":"error.png","(!)":"warning.png","(+)":"add.png","(-)":"forbidden.png","(?)":"help_16.png","(on)":"lightbulb_on.png","(off)":"lightbulb.png","(*)":"star_yellow.png","(*r)":"star_red.png","(*g)":"star_green.png","(*b)":"star_blue.png","(*y)":"star_yellow.png","(flag)":"flag.png","(flagoff)":"flag_grey.png"};if(q in p){return p[q]}};a.prototype.focus=function(){if(!this.editor.initialized||this.editor.removed||this.editor.destroyed){l.warn("bypassing `editor-instance.focus` because the editor instance hasn't initialized yet or already removed");return this}this.editor.focus();this.editor.nodeChanged();return this};a.prototype.destroy=function(){this.editor.contextManager=null;this.editor.remove();i.sendEvent("editor.instance.destroy");i.sendEvent("bundled.editor.instance.destroy")};a.prototype.setContent=function(s,r,p){var q={};if(r){q={format:"raw"}}q.no_events=p;s=s||"";this.editor.setContent(s,q);this.lastContent=this.getContent();if(!p){this.trigger("content")}};a.prototype.replaceSelection=function(p){this.editor.selection.setContent(p);this.trigger("content")};a.prototype.selectAll=function(){this.editor.selection.select(this.editor.getBody(),true)};a.prototype.getSelectionStart=function(){return this.editor.selection.getRng(true)};a.prototype.setSelectionStart=function(q){var p=this.editor.selection.getRng(true);p.setStart(q.startContainer,q.startOffset);this.editor.selection.setRng(p)};a.prototype.getContent=function(q){var p={};if(q){p={format:"raw"}}return this.editor.getContent(p)};a.prototype._onChange=function(){if(this.editor.destroyed){return}var p=this.getContent();var q=p!==this.lastContent;this.lastContent=p;if(!this.hidden&&q){this.trigger("content",this.getContent())}};a.prototype.getSelectedContent=function(p){if(p){return this.editor.selection.getContent({format:"text"})}else{return this.editor.selection.getContent()}};a.prototype.addShortcut=function(p,q){this.editor.addShortcut(p,"",q)};a.prototype.removeShortcut=function(p){this.editor.shortcuts.remove(p)};a.prototype.addOperationOverride=function(p,q){this._assertOperationIsSupported(p);this.operationOverride[p]=q};a.prototype.removeOperationOverride=function(p){this._assertOperationIsSupported(p);delete this.operationOverrideoperationOverride[p]};a.prototype.hide=function(){this.hidden=true;this.editor.hide()};a.prototype.show=function(){this.editor.show();delete this.hidden};a.prototype.isVisible=function(){return !this.editor.isHidden()};a.prototype.switchMode=function(p){this.trigger("switchMode",p)};a.prototype.enable=function(){this.editor.setProgressState(false)};a.prototype.disable=function(){this.editor.setProgressState(true)};return a});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-editor-plugin:instance', location = 'js/editor-resources.js' */
define("jira/editor/resources",["jira/editor/tinymce","jira/editor/wrm","wrm/require","jquery"],function(e,g,b,f){var d={};var c={};d.loadPlugins=function(h){var i=h.filter(function(j){return j.resource}).map(function(j){e.PluginManager.urls[j.name]=j.resource;return"wr!"+j.resource});return i.length>0?b(i):new f.Deferred().resolve()};d.require=function(h){return b(h.filter(function(i){return !c[i]}).map(function(i){return"wr!"+i}))};d.loadCssResources=function(){return new f.Deferred().resolve(a(g.getResources())).promise()};return d;function a(h){if(typeof h!=="object"||!h.length){return[]}return h.map(function(i){return i.replace(",","%2C")})}});;