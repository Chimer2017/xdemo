AJS.keys = {"shortcuts":[{"moduleKey":"go-to-dashboard-kb-shortcut","keys":[["g","d"]],"context":"global","op":"goTo","param":"/secure/Dashboard.jspa"},{"moduleKey":"su.launch.dialog","keys":[["g","u"]],"context":"global","op":"execute","param":"console.log(\"gu clicked\"); launchSuDialog(); console.log(\"gu finished\");"},{"moduleKey":"greenhopper-gh-shortcut","keys":[["g","h"]],"context":"global","op":"execute","param":"gh.app.globalkeyboardshortcuts.goToAgile();"},{"moduleKey":"browse-project-kb-shortcut","keys":[["g","p"]],"context":"global","op":"execute","param":"var elem = document.getElementById(\"browse_link\");\n                if (elem) {\n                    window.location.href = elem.getAttribute(\"href\");\n                }"},{"moduleKey":"greenhopper-agile-shortcut","keys":[["g","a"]],"context":"global","op":"execute","param":"gh.app.globalkeyboardshortcuts.goToAgile();"},{"moduleKey":"issue-navigator-kb-shortcut","keys":[["g","i"]],"context":"global","op":"execute","param":"var elem = document.getElementById(\"find_link\");\n                if (elem) {\n                    window.location.href = elem.getAttribute(\"href\");\n                }"},{"moduleKey":"admin.quicksearch.dialog.shortcut","keys":[["g","g"]],"context":"global","op":"execute","param":"if (AJS.Meta.get('admin-quicksearch-show')) {\n              JIRA.Shifter.show('admin');\n            }"},{"moduleKey":"quicksearch","keys":[["/"]],"context":"global","op":"moveToAndFocus","param":"#quickSearchInput, #admin-quick-nav-field"},{"moduleKey":"greenhopper-newcard-shortcut","keys":[["c"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.newIssue();"},{"moduleKey":"greenhopper-nextcard-shortcut","keys":[["j"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.nextIssue();"},{"moduleKey":"greenhopper-prevcard-shortcut","keys":[["k"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.previousIssue();"},{"moduleKey":"greenhopper-viewissue-shortcut","keys":[["o"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.viewIssue();"},{"moduleKey":"greenhopper-editcard-shortcut","keys":[["e"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.editIssue();"},{"moduleKey":"greenhopper-assign-shortcut","keys":[["a"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.assignIssue();"},{"moduleKey":"greenhopper-assigntome-shortcut","keys":[["i"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.assignIssueToMe();"},{"moduleKey":"greenhopper-comment-shortcut","keys":[["m"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.commentIssue();"},{"moduleKey":"greenhopper-labelissue-shortcut","keys":[["l"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.editIssueLabels();"},{"moduleKey":"greenhopper-issueactions-shortcut","keys":[["."]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.showOperationsDialog();"},{"moduleKey":"greenhopper-boardsearch-shortcut","keys":[["b"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.focusBoardSearch();"},{"moduleKey":"greenhopper-planmode-shortcut","keys":[["1"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.planMode();"},{"moduleKey":"greenhopper-workmode-shortcut","keys":[["2"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.workMode();"},{"moduleKey":"greenhopper-reportmode-shortcut","keys":[["3"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.reportMode();"},{"moduleKey":"greenhopper-projector-shortcut","keys":[["z"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.projector();"},{"moduleKey":"greenhopper-nextcolumn-shortcut","keys":[["n"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.nextBox();"},{"moduleKey":"greenhopper-prevcolumn-shortcut","keys":[["p"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.previousBox();"},{"moduleKey":"greenhopper-toggledetailview-shortcut","keys":[["t"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.toggleIssue();"},{"moduleKey":"greenhopper-priority-shortcut","keys":[["w"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.editIssuePriority();"},{"moduleKey":"greenhopper-toggle-swimlanes-shortcut","keys":[["-"]],"context":"greenhopper","op":"execute","param":"GH.Shortcut.toggleSwimlanes();"},{"moduleKey":"greenhopper-sendtotop-shortcut","keys":[["s","t"]],"context":"greenhopper","op":"execute","param":"gh.app.globalkeyboardshortcuts.sendToTop();"},{"moduleKey":"greenhopper-sendtobottom-shortcut","keys":[["s","b"]],"context":"greenhopper","op":"execute","param":"gh.app.globalkeyboardshortcuts.sendToBottom();"},{"moduleKey":"help","keys":[["?"]],"context":"global","op":"click","param":"#keyshortscuthelp"}]};