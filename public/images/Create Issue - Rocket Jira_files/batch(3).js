;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-exception', location = 'includes/js/rapid/Exception.js' */
AJS.namespace("GH.Layout"),define("jira-agile/rapid/exception",["jira/util/logger","jira/util/data/meta","jquery"],function(e,t,n){var i={};i.errorPattern=/(com\.atlassian|com\.pyxis|jira\.webresources|batch|shortcuts\.js|RapidBoard\.jspa|RapidView\.jspa|ManageRapidViews\.jspa)/,i.isMessageExpanded=!1,i.errorCount=0,i.exceptionView=!1,i.handleJsException=function(a,r,l,o,s){var c=(window.console||{log:function(){}},l);arguments.length>3&&(c+=":"+o),e.log("An exception has occurred in "+r+" at "+c+" --- "+a),i.errorCount++;var d=null;if(arguments.length>4&&s&&s.stack&&(d=s.stack.split("\n")),!i.errorPattern.test(r))return void e.log("Ignoring file : "+r);var p={title:"An error occurred",details:{Exception:a,Resource:r,Line:l},stackTrace:d};arguments.length>3&&(p.details.Column=o);var u=document.getElementById("ghx-errors");if(i.exceptionView){var m=i.buildExceptionMessage(p.details);i.exceptionView.msgView.setAttribute("style","display:block;"),i.exceptionView.detailList.appendChild(m),i.exceptionView.titleView.getElementsByTagName("span")[1].innerHTML="("+i.errorCount+")"}else i.exceptionView=i.buildExceptionView(p);if(!u||""===u.innerHTML){var E=i.exceptionView.msgView,h=document.createElement("div");h.setAttribute("class","ghx-exception"),h.appendChild(E);var g=u;g||(g=document.createElement("div"),g.setAttribute("class","ghx-exception-wrapper"),document.body.appendChild(g)),g.appendChild(h)}return u&&(u.scrollTop=1e5),n(GH).trigger(GH.Layout.EVENT_DELAYED_RESIZE),!t.get("dev-mode")},i.buildExceptionView=function(e){var t=document.createElement("div");t.setAttribute("class","aui-message aui-message-error error closeable");var a=document.createElement("p");a.setAttribute("class","title"),a.innerHTML='<span class="aui-icon icon-error"></span>'+e.title;var r=document.createElement("a");r.setAttribute("class","ghx-more"),r.innerHTML="Details&hellip;",a.appendChild(r),t.appendChild(a);var l=document.createElement("div");l.setAttribute("style","display: none;"),r.onclick=function(e){i.isMessageExpanded?(l.setAttribute("style","display: none;"),r.innerHTML="Details&hellip;",i.isMessageExpanded=!1):(l.setAttribute("style","position: relative;"),r.innerHTML="Hide&hellip;",i.isMessageExpanded=!0)};var o=document.createElement("p");o.innerHTML='Please try refreshing the page, or contact your administrator / <a href="http://support.atlassian.com">Atlassian Support</a> if the problem continues.',l.appendChild(o);var s=document.createElement("div"),c=e.details,d=document.createElement("h4");d.innerHTML="Details",s.appendChild(d);var p=document.createElement("ol");s.appendChild(p);var u=i.buildExceptionMessage(c);p.appendChild(u),l.appendChild(s);var m=document.createElement("h4");m.innerHTML="Environment",l.appendChild(m);var E=document.createElement("div");E.innerHTML=navigator.userAgent,l.appendChild(E);var h=e.stackTrace;if(h){var g=document.createElement("h3");g.innerHTML="Stack trace",l.appendChild(g);for(var v=document.createElement("ul"),x=0;x<h.length;x++){var C=document.createElement("li");C.innerHTML=h[x],v.appendChild(C)}l.appendChild(v)}var w=document.createElement("a");return w.innerHTML='<span class="aui-icon icon-close" title="Close"></span>',a.appendChild(w),w.onclick=function(e){t.setAttribute("style","display:none;"),p.innerHTML="",n(GH).trigger(GH.Layout.EVENT_DELAYED_RESIZE)},t.appendChild(l),{msgView:t,detailList:p,titleView:a}},i.buildExceptionMessage=function(e){var t=document.createElement("li"),n=document.createElement("ul");t.appendChild(n);for(var i in e)if(e.hasOwnProperty(i)){var a=document.createElement("li");a.innerHTML=i+": "+e[i],n.appendChild(a)}return t},window.onerror=i.handleJsException}),AJS.namespace("GH.Exception",null,require("jira-agile/rapid/exception"));;