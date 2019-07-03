;
/* module-key = 'com.atlassian.feedback.jira-feedback-plugin:button-resources', location = '/js/issue-collector.js' */
define("jira/feedback/issue-collector",["require"],function(e){"use strict";function t(){return n.get("issue-project-type")}function r(){var t;try{var r=e("jira/api/projects");t=r.getCurrentProjectType()}catch(e){t=void 0}return t}var n=e("jira/util/data/meta"),i={software:"13831",business:"13830",service_desk:"13832",unknown:"13833"},o={page_path:"customfield_16632",project_type_id:"customfield_16630",version:"customfield_10932"};return{getJiraVersion:function(){var e=n.get("version-number");return e||"not detected"},getProjectType:function(){var e=t();return e&&i[e]||(e=r())&&i[e]||(e="unknown"),e||"unknown"},getProjectTypeId:function(){var e=this.getProjectType();return i[e]?i[e]:i.unknown},getPath:function(){return window.location.pathname},getFieldValues:function(){var e={};return e[o.page_path]=this.getPath(),e[o.project_type_id]=this.getProjectTypeId(i),e[o.version]=this.getJiraVersion(),e}}});;
;
/* module-key = 'com.atlassian.feedback.jira-feedback-plugin:button-resources', location = '/js/feedback-dialog.js' */
require(["jquery","jira/loading/loading","underscore","jira/message","jira/ajs/ajax/smart-ajax","wrm/data","jira/feedback/issue-collector"],function(e,i,a,n,r,t,c){"use strict";function o(){l||(s(),window.ATL_JQ_PAGE_PROPS={triggerFunction:function(e){a.defer(function(){d(!0),e()})},fieldValues:c.getFieldValues()},e.ajax({url:f[u[c.getProjectType()]],type:"get",cache:!0,timeout:1e4,dataType:"script"}).fail(function(e){d(),n.showErrorMsg(r.buildSimpleErrorContent(e),{closeable:!0})}))}function s(){l=!0,AJS.dim(),i.showLoadingIndicator()}function d(e){l=!1,e&&AJS.dim.$dim.css("transition","none"),AJS.undim(),e&&AJS.dim.$dim&&AJS.dim.$dim.css("transition",""),i.hideLoadingIndicator()}var u={software:"jira.feedback.plugin.issue.collector.software",business:"jira.feedback.plugin.issue.collector.core",service_desk:"jira.feedback.plugin.issue.collector.service.desk",unknown:"jira.feedback.plugin.issue.collector.default"},l=!1,f=t.claim("com.atlassian.feedback.jira-feedback-plugin:button-resources-init.data");f&&f.isHeaderFeedbackButtonEnabled&&e(document).on("click",".jira-feedback-plugin",function(e){e.preventDefault(),o()})});;