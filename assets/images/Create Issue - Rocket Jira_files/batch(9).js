;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:soy-templates', location = 'viewissue/attachmentsblock.soy' */
// This file was automatically generated from attachmentsblock.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.ViewIssue.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.ViewIssue == 'undefined') { JIRA.Templates.ViewIssue = {}; }


JIRA.Templates.ViewIssue.renderAttachments = function(opt_data, opt_ignored) {
  return '' + ((opt_data.viewMode == 'list') ? JIRA.Templates.ViewIssue.fileAttachments(opt_data) : JIRA.Templates.ViewIssue.galleryAttachments(opt_data));
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.renderAttachments.soyTemplateName = 'JIRA.Templates.ViewIssue.renderAttachments';
}


JIRA.Templates.ViewIssue.fileAttachments = function(opt_data, opt_ignored) {
  var output = '<ol id="file_attachments" class="item-attachments" data-sort-key="' + soy.$$escapeHtml(opt_data.sortKey) + '" data-sort-order="' + soy.$$escapeHtml(opt_data.sortOrder) + '">';
  var fileAttachmentList14 = opt_data.attachments;
  var fileAttachmentListLen14 = fileAttachmentList14.length;
  for (var fileAttachmentIndex14 = 0; fileAttachmentIndex14 < fileAttachmentListLen14; fileAttachmentIndex14++) {
    var fileAttachmentData14 = fileAttachmentList14[fileAttachmentIndex14];
    var attachmentDescription__soy15 = '';
    var keyList16 = soy.$$getMapKeys(opt_data.attachmentDescriptions);
    var keyListLen16 = keyList16.length;
    for (var keyIndex16 = 0; keyIndex16 < keyListLen16; keyIndex16++) {
      var keyData16 = keyList16[keyIndex16];
      attachmentDescription__soy15 += (keyData16 == fileAttachmentData14.id) ? soy.$$escapeHtml(opt_data.attachmentDescriptions[keyData16]) : '';
    }
    output += JIRA.Templates.ViewIssue.fileAttachment(soy.$$augmentMap(opt_data, {fileAttachment: fileAttachmentData14, attachmentDescription: attachmentDescription__soy15}));
  }
  output += '</ol>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.fileAttachments.soyTemplateName = 'JIRA.Templates.ViewIssue.fileAttachments';
}


JIRA.Templates.ViewIssue.galleryAttachments = function(opt_data, opt_ignored) {
  var output = '<ol id="attachment_thumbnails" class="item-attachments" data-sort-key="' + soy.$$escapeHtml(opt_data.sortKey) + '" data-sort-order="' + soy.$$escapeHtml(opt_data.sortOrder) + '">';
  var imageAttachmentList32 = opt_data.attachments;
  var imageAttachmentListLen32 = imageAttachmentList32.length;
  for (var imageAttachmentIndex32 = 0; imageAttachmentIndex32 < imageAttachmentListLen32; imageAttachmentIndex32++) {
    var imageAttachmentData32 = imageAttachmentList32[imageAttachmentIndex32];
    var attachmentDescription__soy33 = '';
    var keyList34 = soy.$$getMapKeys(opt_data.attachmentDescriptions);
    var keyListLen34 = keyList34.length;
    for (var keyIndex34 = 0; keyIndex34 < keyListLen34; keyIndex34++) {
      var keyData34 = keyList34[keyIndex34];
      attachmentDescription__soy33 += (keyData34 == imageAttachmentData32.id) ? soy.$$escapeHtml(opt_data.attachmentDescriptions[keyData34]) : '';
    }
    output += JIRA.Templates.ViewIssue.imageAttachment(soy.$$augmentMap(opt_data, {imageAttachment: imageAttachmentData32, attachmentDescription: attachmentDescription__soy33}));
  }
  output += '</ol>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.galleryAttachments.soyTemplateName = 'JIRA.Templates.ViewIssue.galleryAttachments';
}


JIRA.Templates.ViewIssue.fileAttachment = function(opt_data, opt_ignored) {
  return '<li class="attachment-content js-file-attachment' + ((! opt_data.fileAttachment.latest) ? ' earlier-version' : '') + '" data-attachment-id="' + soy.$$escapeHtml(opt_data.fileAttachment.id) + '"' + JIRA.Templates.ViewIssue.renderAttachmentData({issue: opt_data.issue, attachment: opt_data.fileAttachment}) + '>' + ((opt_data.fileAttachment.expandable) ? JIRA.Templates.ViewIssue.zipFileAttachment(opt_data) : '<div class="attachment-thumb"><a href="' + soy.$$escapeHtml(opt_data.baseurl) + '/' + soy.$$escapeHtml('' + opt_data.fileAttachment.attachmentUrl) + '" draggable="true" data-downloadurl="' + soy.$$escapeHtml(opt_data.fileAttachment.mimeType) + ':' + soy.$$escapeHtml(opt_data.fileAttachment.fileName) + ':' + soy.$$escapeHtml(opt_data.fullBaseUrl) + '/' + soy.$$escapeHtml('' + opt_data.fileAttachment.attachmentUrl) + '"' + JIRA.Templates.ViewIssue.tagAttachment({attachment: opt_data.fileAttachment}) + '>' + JIRA.Templates.ViewIssue.renderAttachmentIcon(soy.$$augmentMap(opt_data, {mimetype: opt_data.fileAttachment.mimeType})) + '</a></div><dl>' + JIRA.Templates.ViewIssue.renderAttachmentInfo(soy.$$augmentMap(opt_data, {attachment: opt_data.fileAttachment})) + '</dl>') + '</li>';
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.fileAttachment.soyTemplateName = 'JIRA.Templates.ViewIssue.fileAttachment';
}


JIRA.Templates.ViewIssue.zipFileAttachment = function(opt_data, opt_ignored) {
  return '<div class="twixi-block collapsed expander"><div class="twixi-wrap verbose"><a href="#" class="twixi"><span class="icon-default aui-icon aui-icon-small aui-iconfont-expanded"><span>' + soy.$$escapeHtml("Hide") + '</span></span></a><div class="attachment-thumb"><a href="' + soy.$$escapeHtml(opt_data.baseurl) + '/' + soy.$$escapeHtml('' + opt_data.fileAttachment.attachmentUrl) + '" draggable="true" data-downloadurl="' + soy.$$escapeHtml(opt_data.fileAttachment.mimeType) + ':' + soy.$$escapeHtml(opt_data.fileAttachment.fileName) + ':' + soy.$$escapeHtml(opt_data.fullBaseUrl) + '/' + soy.$$escapeHtml('' + opt_data.fileAttachment.attachmentUrl) + '"' + JIRA.Templates.ViewIssue.tagAttachment({attachment: opt_data.fileAttachment}) + '>' + JIRA.Templates.ViewIssue.renderAttachmentIcon(soy.$$augmentMap(opt_data, {mimetype: opt_data.fileAttachment.mimeType})) + '</a></div><dl>' + JIRA.Templates.ViewIssue.renderAttachmentInfo(soy.$$augmentMap(opt_data, {attachment: opt_data.fileAttachment})) + '<dd class="zip-contents"><ol><li><div class="attachment-thumb"><img src="' + soy.$$escapeHtml(opt_data.baseurl) + '/images/icons/wait.gif" /></div>' + soy.$$escapeHtml("Extracting archive...") + '</li></ol></dd></dl></div><div class="twixi-wrap concise"><a href="#" class="twixi"><span class="icon-default aui-icon aui-icon-small aui-iconfont-collapsed"><span>' + soy.$$escapeHtml("Show") + '</span></span></a><div class="attachment-thumb"><a href="' + soy.$$escapeHtml(opt_data.baseurl) + '/' + soy.$$escapeHtml('' + opt_data.fileAttachment.attachmentUrl) + '" draggable="true" data-downloadurl="' + soy.$$escapeHtml(opt_data.fileAttachment.mimeType) + ':' + soy.$$escapeHtml(opt_data.fileAttachment.fileName) + ':' + soy.$$escapeHtml(opt_data.fullBaseUrl) + '/' + soy.$$escapeHtml('' + opt_data.fileAttachment.attachmentUrl) + '"' + JIRA.Templates.ViewIssue.tagAttachment({attachment: opt_data.fileAttachment}) + '>' + JIRA.Templates.ViewIssue.renderAttachmentIcon(soy.$$augmentMap(opt_data, {mimetype: opt_data.fileAttachment.mimeType})) + '</a></div><dl>' + JIRA.Templates.ViewIssue.renderAttachmentInfo(soy.$$augmentMap(opt_data, {attachment: opt_data.fileAttachment})) + '</dl></div></div>';
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.zipFileAttachment.soyTemplateName = 'JIRA.Templates.ViewIssue.zipFileAttachment';
}


JIRA.Templates.ViewIssue.imageAttachment = function(opt_data, opt_ignored) {
  return '<li class="attachment-content js-file-attachment" draggable="true" data-downloadurl="' + soy.$$escapeHtml(opt_data.imageAttachment.mimeType) + ':' + soy.$$escapeHtml(opt_data.imageAttachment.fileName) + ':' + soy.$$escapeHtml(opt_data.fullBaseUrl) + '/' + soy.$$escapeHtml('' + opt_data.imageAttachment.attachmentUrl) + '"' + JIRA.Templates.ViewIssue.renderAttachmentData({issue: opt_data.issue, attachment: opt_data.imageAttachment}) + '><div class="attachment-thumb"><a href="' + soy.$$escapeHtml(opt_data.baseurl) + '/' + soy.$$escapeHtml('' + opt_data.imageAttachment.attachmentUrl) + '" title="' + soy.$$escapeHtml(opt_data.imageAttachment.fileName) + ' ' + ((opt_data.attachmentDescription) ? '-' + soy.$$filterNoAutoescape(opt_data.attachmentDescription) : '') + ' -' + ((opt_data.imageAttachment.latest) ? ' ' + soy.$$escapeHtml("Latest") : '') + ' ' + soy.$$escapeHtml(opt_data.imageAttachment.createdDateTime) + ((opt_data.imageAttachment.authorDisplayName) ? ' - ' + soy.$$escapeHtml(opt_data.imageAttachment.authorDisplayName) : '') + '"' + JIRA.Templates.ViewIssue.tagAttachment({attachment: opt_data.imageAttachment}) + '>' + ((opt_data.imageAttachment.thumbnailUrl != null) ? '<img src="' + soy.$$escapeHtml('' + opt_data.imageAttachment.thumbnailUrl) + '" alt="' + soy.$$escapeHtml(opt_data.imageAttachment.fileName) + '" />' : JIRA.Templates.ViewIssue.renderThumbnailIcon({mimetype: opt_data.imageAttachment.mimeType})) + '</a></div><dl ' + ((! opt_data.imageAttachment.latest) ? 'class="earlier-version"' : '') + '><dt>' + ((opt_data.imageAttachment.deletable) ? '<span class="blender blender-delete"></span><div class="attachment-delete"><a title="' + soy.$$escapeHtml("Delete this attachment") + '" id="del_' + soy.$$escapeHtml(opt_data.imageAttachment.id) + '" href="' + soy.$$escapeHtml(opt_data.baseurl) + '/secure/DeleteAttachment!default.jspa?id=' + soy.$$escapeHtml(opt_data.issue.id) + '&deleteAttachmentId=' + soy.$$escapeHtml(opt_data.imageAttachment.id) + '&from=issue"><span class="icon-default aui-icon aui-icon-small aui-iconfont-delete">' + soy.$$escapeHtml("Delete this attachment") + '</span></a></div>' : '<span class="blender"></span>') + '<a  href="' + soy.$$escapeHtml(opt_data.baseurl) + '/' + soy.$$escapeHtml('' + opt_data.imageAttachment.attachmentUrl) + '" class="attachment-title" title="' + soy.$$escapeHtml(opt_data.imageAttachment.fileName) + ' -' + ((opt_data.imageAttachment.latest) ? ' ' + soy.$$escapeHtml("Latest") : '') + ' ' + soy.$$escapeHtml(opt_data.imageAttachment.createdDateTime) + ((opt_data.imageAttachment.authorDisplayName) ? ' - ' + soy.$$escapeHtml(opt_data.imageAttachment.authorDisplayName) : '') + '"' + JIRA.Templates.ViewIssue.tagAttachment({attachment: opt_data.imageAttachment}) + '>' + soy.$$escapeHtml(opt_data.imageAttachment.fileName) + '</a></dt><dd class="attachment-size">' + soy.$$escapeHtml(opt_data.imageAttachment.fileSize) + '</dd><dd class="attachment-date"><time class="livestamp" datetime="' + soy.$$escapeHtml('' + opt_data.imageAttachment.createdIso8601) + '">' + soy.$$escapeHtml(opt_data.imageAttachment.createdDateTime) + '</time></dd></dl></li>';
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.imageAttachment.soyTemplateName = 'JIRA.Templates.ViewIssue.imageAttachment';
}


JIRA.Templates.ViewIssue.renderAttachmentInfo = function(opt_data, opt_ignored) {
  return '<dt class="attachment-title"><a href="' + soy.$$escapeHtml(opt_data.baseurl) + '/' + soy.$$escapeHtml('' + opt_data.attachment.attachmentUrl) + '" title="' + ((opt_data.attachment.latest) ? soy.$$escapeHtml("Latest") + ' ' : '') + ' ' + soy.$$escapeHtml(opt_data.attachment.createdDateTime) + ((opt_data.attachment.authorDisplayName) ? ' - ' + soy.$$escapeHtml(opt_data.attachment.authorDisplayName) : '') + '" draggable="true" data-downloadurl="' + soy.$$escapeHtml(opt_data.attachment.mimeType) + ':' + soy.$$escapeHtml(opt_data.attachment.fileName) + ':' + soy.$$escapeHtml(opt_data.fullBaseUrl) + '/' + soy.$$escapeHtml('' + opt_data.attachment.attachmentUrl) + '"' + JIRA.Templates.ViewIssue.tagAttachment(opt_data) + '>' + soy.$$escapeHtml(opt_data.attachment.fileName) + '</a></dt><dd class="attachment-delete">' + ((opt_data.attachment.deletable) ? '<a title="' + soy.$$escapeHtml("Delete this attachment") + '" id="del_' + soy.$$escapeHtml(opt_data.attachment.id) + '" href="' + soy.$$escapeHtml(opt_data.baseurl) + '/secure/DeleteAttachment!default.jspa?id=' + soy.$$escapeHtml(opt_data.issue.id) + '&deleteAttachmentId=' + soy.$$escapeHtml(opt_data.attachment.id) + '&from=issue"><span class="icon-default aui-icon aui-icon-small aui-iconfont-delete">' + soy.$$escapeHtml("Delete this attachment") + '</span></a>' : '<span class="icon"></span>') + '</dd><dd class="attachment-date"><time class="livestamp" datetime="' + soy.$$escapeHtml('' + opt_data.attachment.createdIso8601) + '">' + soy.$$escapeHtml(opt_data.attachment.createdDateTime) + '</time></dd><dd class="attachment-size">' + soy.$$escapeHtml(opt_data.attachment.fileSize) + '</dd><dd class="attachment-author">' + soy.$$escapeHtml(opt_data.attachment.authorDisplayName ? opt_data.attachment.authorDisplayName : '') + '</dd><dd class="attachment-description">' + soy.$$filterNoAutoescape(opt_data.attachmentDescription) + '</dd>';
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.renderAttachmentInfo.soyTemplateName = 'JIRA.Templates.ViewIssue.renderAttachmentInfo';
}


JIRA.Templates.ViewIssue.renderAttachmentData = function(opt_data, opt_ignored) {
  return 'data-issue-id="' + soy.$$escapeHtml(opt_data.issue.id) + '"' + ((opt_data.attachment.expandable) ? 'data-attachment-type="expandable"' : (opt_data.attachment.imageFileType) ? 'data-attachment-type="image" data-attachment-thumbnail="' + soy.$$escapeHtml(opt_data.attachment.thumbnailUrl != null) + '"' : 'data-attachment-type="file"');
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.renderAttachmentData.soyTemplateName = 'JIRA.Templates.ViewIssue.renderAttachmentData';
}


JIRA.Templates.ViewIssue.renderAttachmentLegacyIcon = function(opt_data, opt_ignored) {
  var output = '';
  var fileIconUrl__soy309 = '' + JIRA.Templates.ViewIssue.matchFileIconUrl(opt_data);
  var fileIconAlt__soy311 = '' + JIRA.Templates.ViewIssue.matchFileIconAlt(opt_data);
  output += '<img src="' + soy.$$escapeHtml(fileIconUrl__soy309) + '" height="16" width="16" border="0" alt="' + soy.$$escapeHtml(fileIconAlt__soy311) + '">';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.renderAttachmentLegacyIcon.soyTemplateName = 'JIRA.Templates.ViewIssue.renderAttachmentLegacyIcon';
}


JIRA.Templates.ViewIssue.matchFileIconUrl = function(opt_data, opt_ignored) {
  return soy.$$escapeHtml(opt_data.baseurl) + '/images/icons/attach/' + JIRA.Templates.ViewIssue.matchFileIcon(opt_data);
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.matchFileIconUrl.soyTemplateName = 'JIRA.Templates.ViewIssue.matchFileIconUrl';
}


JIRA.Templates.ViewIssue.matchFileIcon = function(opt_data, opt_ignored) {
  var output = '';
  switch (opt_data.mimetype) {
    case 'application/pdf':
      output += 'pdf.gif';
      break;
    case 'image/gif':
      output += 'image.gif';
      break;
    case 'image/png':
      output += 'image.gif';
      break;
    case 'image/jpeg':
      output += 'image.gif';
      break;
    case 'text/xml':
      output += 'xml.gif';
      break;
    case 'text/html':
      output += 'html.gif';
      break;
    case 'text/plain':
      output += 'text.gif';
      break;
    case 'application/zip':
      output += 'zip.gif';
      break;
    case 'application/x-gzip-compressed':
      output += 'zip.gif';
      break;
    case 'application/msword':
      output += 'word.gif';
      break;
    case 'application/msword-template':
      output += 'word.gif';
      break;
    case 'application/vnd.ms-word.document.macroEnabled.12':
      output += 'word.gif';
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      output += 'word.gif';
      break;
    case 'application/vnd.ms-word.template.macroEnabled.12':
      output += 'word.gif';
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.template':
      output += 'word.gif';
      break;
    case 'application/vnd.ms-excel':
      output += 'excel.gif';
      break;
    case 'application/vnd.ms-excel.addin.macroEnabled.12':
      output += 'excel.gif';
      break;
    case 'application/vnd.ms-excel.sheet.binary.macroEnabled.12':
      output += 'excel.gif';
      break;
    case 'application/vnd.ms-excel.sheet.macroEnabled.12':
      output += 'excel.gif';
      break;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      output += 'excel.gif';
      break;
    case 'application/vnd.ms-excel.template.macroEnabled.12':
      output += 'excel.gif';
      break;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.template':
      output += 'excel.gif';
      break;
    case 'application/vnd.ms-powerpoint':
      output += 'powerpoint.gif';
      break;
    case 'application/vnd.ms-powerpoint.template.macroEnabled.12':
      output += 'powerpoint.gif';
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.template':
      output += 'powerpoint.gif';
      break;
    case 'application/vnd.ms-powerpoint.addin.macroEnabled.12':
      output += 'powerpoint.gif';
      break;
    case 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12':
      output += 'powerpoint.gif';
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.slideshow':
      output += 'powerpoint.gif';
      break;
    case 'application/vnd.ms-powerpoint.presentation.macroEnabled.12':
      output += 'powerpoint.gif';
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      output += 'powerpoint.gif';
      break;
    case 'text/x-java':
      output += 'java.gif';
      break;
    case 'text/x-java-source':
      output += 'java.gif';
      break;
    case 'application/x-java-archive':
      output += 'java.gif';
      break;
    default:
      output += 'file.gif';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.matchFileIcon.soyTemplateName = 'JIRA.Templates.ViewIssue.matchFileIcon';
}


JIRA.Templates.ViewIssue.matchFileIconAlt = function(opt_data, opt_ignored) {
  var output = '';
  switch (opt_data.mimetype) {
    case 'application/pdf':
      output += soy.$$escapeHtml("PDF File");
      break;
    case 'image/gif':
      output += soy.$$escapeHtml("GIF File");
      break;
    case 'image/png':
      output += soy.$$escapeHtml("PNG File");
      break;
    case 'image/jpeg':
      output += soy.$$escapeHtml("JPEG File");
      break;
    case 'text/xml':
      output += soy.$$escapeHtml("XML File");
      break;
    case 'text/html':
      output += soy.$$escapeHtml("HTML File");
      break;
    case 'text/plain':
      output += soy.$$escapeHtml("Text File");
      break;
    case 'application/zip':
      output += soy.$$escapeHtml("Zip Archive");
      break;
    case 'application/x-gzip-compressed':
      output += soy.$$escapeHtml("GZip Archive");
      break;
    case 'application/msword':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/msword-template':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.openxmlformats':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.ms-word.document.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.ms-word.template.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.template':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.ms-excel':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.ms-excel':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.ms-excel.addin.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.ms-excel.sheet.binary.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.ms-excel.sheet.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.ms-excel.template.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.template':
      output += soy.$$escapeHtml("Microsoft Word");
      break;
    case 'application/vnd.ms-powerpoint':
      output += soy.$$escapeHtml("Microsoft PowerPoint");
      break;
    case 'application/vnd.ms-powerpoint.template.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft PowerPoint");
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.template':
      output += soy.$$escapeHtml("Microsoft PowerPoint");
      break;
    case 'application/vnd.ms-powerpoint.addin.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft PowerPoint");
      break;
    case 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft PowerPoint");
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.slideshow':
      output += soy.$$escapeHtml("Microsoft PowerPoint");
      break;
    case 'application/vnd.ms-powerpoint.presentation.macroEnabled.12':
      output += soy.$$escapeHtml("Microsoft PowerPoint");
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      output += soy.$$escapeHtml("Microsoft PowerPoint");
      break;
    case 'text/x-java':
      output += soy.$$escapeHtml("Java Source File");
      break;
    case 'text/x-java-source':
      output += soy.$$escapeHtml("Java Source File");
      break;
    case 'application/x-java-archive':
      output += soy.$$escapeHtml("Java Archive File");
      break;
    default:
      output += soy.$$escapeHtml("File");
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.matchFileIconAlt.soyTemplateName = 'JIRA.Templates.ViewIssue.matchFileIconAlt';
}


JIRA.Templates.ViewIssue.renderAttachmentIcon = function(opt_data, opt_ignored) {
  var output = '';
  var fileClass__soy467 = '' + JIRA.Templates.ViewIssue.matchFileClass(opt_data);
  var fileIconAlt__soy469 = '' + JIRA.Templates.ViewIssue.matchFileIconAlt(opt_data);
  output += '<span class="aui-icon aui-icon-small attachment-icon ' + soy.$$escapeHtml(fileClass__soy467) + '" title="' + soy.$$escapeHtml(fileIconAlt__soy469) + '"></span>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.renderAttachmentIcon.soyTemplateName = 'JIRA.Templates.ViewIssue.renderAttachmentIcon';
}


JIRA.Templates.ViewIssue.renderThumbnailIcon = function(opt_data, opt_ignored) {
  var output = '';
  var fileClass__soy477 = '' + JIRA.Templates.ViewIssue.matchFileClass(opt_data);
  output += '<span class="aui-icon aui-icon-large attachment-thumbnail-icon ' + soy.$$escapeHtml(fileClass__soy477) + '"></span>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.renderThumbnailIcon.soyTemplateName = 'JIRA.Templates.ViewIssue.renderThumbnailIcon';
}


JIRA.Templates.ViewIssue.matchFileClass = function(opt_data, opt_ignored) {
  var output = '';
  switch (opt_data.mimetype) {
    case 'application/pdf':
      output += 'aui-iconfont-file-pdf';
      break;
    case 'image/gif':
      output += 'aui-iconfont-image';
      break;
    case 'image/png':
      output += 'aui-iconfont-image';
      break;
    case 'image/jpeg':
      output += 'aui-iconfont-image';
      break;
    case 'text/xml':
      output += 'aui-iconfont-file-code';
      break;
    case 'text/html':
      output += 'aui-iconfont-file-code';
      break;
    case 'text/plain':
      output += 'aui-iconfont-file-txt';
      break;
    case 'application/zip':
      output += 'aui-iconfont-file-zip';
      break;
    case 'application/x-gzip-compressed':
      output += 'aui-iconfont-file-zip';
      break;
    case 'application/msword':
      output += 'aui-iconfont-file-doc';
      break;
    case 'application/msword-template':
      output += 'aui-iconfont-file-doc';
      break;
    case 'application/vnd.ms-word.document.macroEnabled.12':
      output += 'aui-iconfont-file-doc';
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      output += 'aui-iconfont-file-doc';
      break;
    case 'application/vnd.ms-word.template.macroEnabled.12':
      output += 'aui-iconfont-file-doc';
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.template':
      output += 'aui-iconfont-file-doc';
      break;
    case 'application/vnd.ms-excel':
      output += 'aui-iconfont-file-xls';
      break;
    case 'application/vnd.ms-excel.addin.macroEnabled.12':
      output += 'aui-iconfont-file-xls';
      break;
    case 'application/vnd.ms-excel.sheet.binary.macroEnabled.12':
      output += 'aui-iconfont-file-xls';
      break;
    case 'application/vnd.ms-excel.sheet.macroEnabled.12':
      output += 'aui-iconfont-file-xls';
      break;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      output += 'aui-iconfont-file-xls';
      break;
    case 'application/vnd.ms-excel.template.macroEnabled.12':
      output += 'aui-iconfont-file-xls';
      break;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.template':
      output += 'aui-iconfont-file-xls';
      break;
    case 'application/vnd.ms-powerpoint':
      output += 'aui-iconfont-file-ppt';
      break;
    case 'application/vnd.ms-powerpoint.template.macroEnabled.12':
      output += 'aui-iconfont-file-ppt';
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.template':
      output += 'aui-iconfont-file-ppt';
      break;
    case 'application/vnd.ms-powerpoint.addin.macroEnabled.12':
      output += 'aui-iconfont-file-ppt';
      break;
    case 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12':
      output += 'aui-iconfont-file-ppt';
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.slideshow':
      output += 'aui-iconfont-file-ppt';
      break;
    case 'application/vnd.ms-powerpoint.presentation.macroEnabled.12':
      output += 'aui-iconfont-file-ppt';
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      output += 'aui-iconfont-file-ppt';
      break;
    case 'text/x-java':
      output += 'aui-iconfont-file-code';
      break;
    case 'text/x-java-source':
      output += 'aui-iconfont-file-code';
      break;
    case 'application/x-java-archive':
      output += 'aui-iconfont-file-zip';
      break;
    default:
      output += 'aui-iconfont-devtools-file';
  }
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.matchFileClass.soyTemplateName = 'JIRA.Templates.ViewIssue.matchFileClass';
}


JIRA.Templates.ViewIssue.tagAttachment = function(opt_data, opt_ignored) {
  return '' + JIRA.Templates.ViewIssue.tagFilePreview({id: opt_data.attachment.id, title: opt_data.attachment.fileName, mimeType: opt_data.attachment.mimeType, isImage: opt_data.attachment.thumbnailUrl != null, thumbnailUrl: opt_data.attachment.thumbnailUrl});
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.tagAttachment.soyTemplateName = 'JIRA.Templates.ViewIssue.tagAttachment';
}


JIRA.Templates.ViewIssue.tagFilePreview = function(opt_data, opt_ignored) {
  var output = '';
  var previewType__soy560 = '' + ((opt_data.isImage || opt_data.mimeType != null && ('' + opt_data.mimeType).indexOf('image/') != -1) ? 'image' : (opt_data.mimeType == 'application/pdf') ? 'document' : 'unknown');
  output += (previewType__soy560 != 'unknown') ? ' file-preview-id="' + soy.$$escapeHtml(opt_data.id) + '" file-preview-title="' + soy.$$escapeHtml(opt_data.title) + '" file-preview-type="' + soy.$$escapeHtml(previewType__soy560) + '"' + ((opt_data.thumbnailUrl != null) ? 'file-preview-url="' + soy.$$escapeHtml('' + opt_data.thumbnailUrl) + '"' : '') : '';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.tagFilePreview.soyTemplateName = 'JIRA.Templates.ViewIssue.tagFilePreview';
}
;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-base', location = 'js/i18n.js' */
define("dndattachment/i18n",["require"],function(a){var b=a("jira/util/formatter");var c={"dnd.attachment.unsupported.browser":"Drag and Drop of attachments is currently only available for the following browsers:","dnd.attachment.file.is.too.large":"File exceeds maximum size limit set by the administrator ({0}).","dnd.attachment.upload.in.progress":"Upload in progress, please wait.","dnd.attachment.not.uploaded":function(d){return b.format("File \"{0}\" was not uploaded",d)},"dnd.attachment.unauthorized":"You are not authorized, session has expired or connection is lost.","dnd.attachment.internal.server.error":"An internal error has occurred. Please contact your administrator.","dnd.attachment.upload.aborted":"Upload was aborted.","dnd.attachment.upload.remove":"Remove attachment"};return function(d){if(c[d]){return c[d]}else{throw"Unknown key: "+d}}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-base', location = 'js/TemporaryAttachments.js' */
define("dndattachment/TemporaryAttachments",[],function(){var a={};return{createAttachment:function(e,b,d,c){return{id:e,name:b,type:d,file:c}},getAttachment:function(c,b){return a[c]||this.createAttachment(c,b)},putAttachment:function(c,b){return a[c]=this.createAttachment(c,b.name,b.type,b)}}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-base', location = 'js/Parser.js' */
define("dndattachment/Parser",["require"],function(c){var a=c("jira/util/events");var h=c("jira/util/events/types");var b=c("jira/jquery/deferred");var d=c("jquery");var e="-dui-type-parsed";var g="*[duiType]:not(."+e+")";function f(j){var i=d(j).find(g).add(j.filter(g));var k=i.addClass(e).map(function(m,n){var l=new b();c([d(n).attr("duiType")],function(o){if(typeof o=="function"){l.resolve(new o(n))}else{l.reject()}});return l});return d.when.apply(window,d.makeArray(k))}a.bind(h.NEW_CONTENT_ADDED,function(k,i,j){f(i)});if(d.isReady){f(d("body"))}else{d(function(){f(d("body"))})}return{parse:f}});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-base', location = 'templates/IssueDropZone.soy' */
// This file was automatically generated from IssueDropZone.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.DnDAttachmentPlugin.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.DnDAttachmentPlugin == 'undefined') { JIRA.Templates.DnDAttachmentPlugin = {}; }


JIRA.Templates.DnDAttachmentPlugin.IssueDropZone = function(opt_data, opt_ignored) {
  return '<div class="issue-drop-zone__target"></div><span class="issue-drop-zone__text"><span class="issue-drop-zone__drop-icon"> </span> ' + soy.$$escapeHtml("Drop files to attach, or") + ' <button type="button" class="issue-drop-zone__button"> ' + soy.$$escapeHtml("browse") + '.</button><input class="issue-drop-zone__file ignore-inline-attach" type="file" multiple /></span>';
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.IssueDropZone.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.IssueDropZone';
}


JIRA.Templates.DnDAttachmentPlugin.AttachmentsDropZone = function(opt_data, opt_ignored) {
  return '<div duiType="dndattachment/dropzones/AttachmentsDropZone" class="issue-drop-zone" data-upload-limit="' + soy.$$escapeHtml(opt_data.jiraAttachmentSize) + '" data-upload-size="' + soy.$$escapeHtml(opt_data.uploadLimit) + '" data-upload-size="' + soy.$$escapeHtml(opt_data.uploadLimit) + '"></div>';
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.AttachmentsDropZone.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.AttachmentsDropZone';
}
;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-base', location = 'js/dropzones/IssueDropZone.js' */
define("dndattachment/dropzones/IssueDropZone",["require"],function(g){var l=g("jira/util/formatter");var s=g("jira/util/logger");var f=g("jira/analytics");var o=g("jira/ajs/ajax/smart-ajax");var d=g("jira/issue");var a=g("jira/jquery/plugins/isdirty");var m=g("jira/util/data/meta");var n=g("jira/lib/class");var q=g("underscore");var b=g("jira/jquery/deferred");var e=g("jquery");var r=g("jira/flag");var c=g("dndattachment/Parser");var k=g("dndattachment/i18n");var h=g("dndattachment/templates");var t=g("dndattachment/util/DataTransfer");var p=5000;var j=["An internal error has occurred. Please contact your administrator."];var i=n.extend({eventGroup:"issuedropzone",progressBarType:"dndattachment/progressbars/UploadProgressBar",init:function(u){this.$node=e(u);if(!this.isSupportedBrowser()){return this.renderUnsupported()}if(this.$node.parents(".mod-content")){this.$node.parents(".mod-content").addClass("issue-drop-zone")}this.uploadLimit=this.$node.data("upload-limit");this.uploadSize=this.$node.data("upload-size");this.formToken=this.$node.data("form-token");this.attachFileUrl=contextPath+"/secure/AttachFile.jspa";this.pendingQueue=[];this.render();this.queueEvent("init")},queueTask:function(u){this.pendingQueue.push(u);u.always(function(){this.pendingQueue.splice(this.pendingQueue.indexOf(u),1)}.bind(this));this.markDirty(true);e.when.apply(window,this.pendingQueue).always(q.debounce(this.checkMarkDirty,false,true).bind(this))},render:function(){this.$node.html(h.IssueDropZone({}));this.fileInput=this.$node.find(".issue-drop-zone__file");this.fileButton=this.$node.find("button.issue-drop-zone__button");this.connectListeners();s.trace("jira.issue.dnd.issuedropzone.render")},connectListeners:function(){this.fileInput.change(function(v){this.handleFilesReceived(this.fileInput[0].files);this.queueEvent("fileInput",{count:this.fileInput[0].files.length});this.fileInput.attr("value",null)}.bind(this));this.fileButton.click(function(v){v.preventDefault();this.fileInput.click()}.bind(this));var u=this.$node.parents(".issue-drop-zone").length>0?this.$node.parents(".issue-drop-zone"):this.$node;this.$dropTarget=u.find(">*").andSelf();this.$dropTarget.on("dragover dragenter drop",function(v){v.preventDefault();v.stopPropagation();u.addClass("dragover");if(v.type=="drop"){u.removeClass("dragover");e(document).trigger("dropHandled");var w=new t(v.dataTransfer);w.getFiles().then(function(x){this.handleFilesReceived(x);this.queueEvent("fileDrop",{count:x.length})}.bind(this))}}.bind(this));this.$dropTarget.on("dragleave",function(){u.removeClass("dragover")}.bind(this))},configureUploadProgressBar:function(u,v){u.data("upload-size",this.uploadSize).data("file",v).data("form-token",this.formToken)},createUploadProgressBar:function(v){var u=e('<div duiType="'+this.progressBarType+'" class="upload-progress-bar"></div>');this.configureUploadProgressBar(u,v);return c.parse(u).then(function(w){this.placeUploadProgressBar(u,w);this.handleNewProgressBar(w)}.bind(this))},placeUploadProgressBar:function(u){return u.insertAfter(this.$node)},handleNewProgressBar:function(u){},handleFilesReceived:function(u){this.uploadFiles(u)},uploadFiles:function(u){var C=new b();var x=[];var w=m.get("issue-key");var y=m.get("viewissue-permlink");var A=e("#summary-val input").attr("value")||e("#summary-val").text();var v=h.SuccessMessageLink({issueLink:y,issueKey:w,issueSummary:A});var z=q.map(u,function(E){var D=new b();this.createUploadProgressBar(E).then(function(F){this.trigger("progressBarInserted",F);x.push(F);F.uploadFile(E,this.uploadLimit).then(D.resolve.bind(D),D.resolve.bind(D)).done(function(){this.trigger("uploadFinished",F)}.bind(this)).fail(function(){C.reject(arguments)})}.bind(this));return D}.bind(this));var B=e.when.apply(window,z);B.done(function(){var D=q.filter(z.length==1?[arguments]:arguments,function(E){return E&&E[0]&&E[0].id}).map(function(E){return E[0].id});if(D.length==0){return}this.commitUpload(D).done(function(){q.delay(function(){x.some(function(G){if(G.getAutoDestroy()){G.destroy();this.queueEvent("autoDestroy")}}.bind(this))}.bind(this),p);var E=q.filter(x,function(G){return G.result.isResolved()});if(E.length==1){var F=E[0].getFileName();r.showSuccessMsg("",l.format("{0} was attached successfully to {1}.",F,v))}else{if(E.length>1){r.showSuccessMsg("",l.format("{0} files were attached successfully to {1}.",E.length,v))}}C.resolve(q.map(E,function(G){return G.file.name}))}.bind(this)).fail(function(E,F){C.reject(E,F);if(E){E.forEach(function(G){x.forEach(function(H){H.reportError(G)})})}if(F){x.forEach(function(H){var G=F["#"+H.getFileID()]||F[H.getFileName()];if(G){H.reportError(G)}})}s.trace("jira.issue.dnd.commit.fail")})}.bind(this));this.queueTask(B);return C},loadAttachments:function(u){u.forEach(function(v){this.createUploadProgressBar(v.file).then(function(w){w.setFileID(v.id);w.setFileName(v.name);w.setFileSize(v.size);w.setProgress(1);w.setFinished();this.trigger("uploadFinished",w)}.bind(this))},this)},commitUpload:function(u){return new b()},attachFile:function(v){var u=new b();o.makeRequest({type:"POST",url:this.attachFileUrl,data:{inline:true,id:d.getIssueId(),filetoconvert:v,atl_token:atl_token(),formToken:this.formToken},dataType:"json"}).done(u.resolve.bind(u)).fail(function(y){try{var w=JSON.parse(y.responseText);u.reject(w.errorMessages||j,w.errors)}catch(x){u.reject(j)}});return u},isSupportedBrowser:function(){if(e("html.webkit")[0]||e("html.safari")[0]){if(!(parseFloat(e.browser.version)>=537)){return false}}else{if(e("html.mozilla")[0]){if(!(parseFloat(e.browser.version)>=1.9)){return false}}else{if(e("html.msie")[0]){if(!(parseFloat(e.browser.version)>=10)){return false}}else{return false}}}return true},renderUnsupported:function(){this.$node.addClass("issue-drop-zone__not-supported").text(k("dnd.attachment.unsupported.browser")).append("<ul><li>FireFox 3.6+</li><li>Chrome 5+</li><li>Safari 5</li></ul>")},markDirty:function(u){this.$node.addClass(a.ClassNames.SANCTIONED);this.$node.toggleClass(a.ClassNames.EXEMPT,!u);this.$node.attr("value",false);this.$node.attr("defaultValue",true)},checkMarkDirty:function(){if(this.pendingQueue.length==0){this.markDirty(false)}},queueEvent:function(u,v){f.send({name:"issue.dnd.attachment."+this.eventGroup+"."+u,data:v||{}})}});return i});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-issue-drop-zone', location = 'js/dropzones/AttachmentsDropZone.js' */
define("dndattachment/dropzones/AttachmentsDropZone",["require"],function(c){var g=c("jira/libs/parse-uri");var o=c("jira/util/logger");var d=c("jira/util/events/types");var q=c("jira/util/events/reasons");var m=c("underscore");var l=c("jira/jquery/deferred");var k=c("dndattachment/dropzones/IssueDropZone");var p=c("jira/util/events");var n=c("dndattachment/util/events/types");var h=c("jquery");var f=c("dndattachment/templates");var i=c("dndattachment/util/DataTransfer");var j=c("dndattachment/ctrlv/utility");var e=c("jira/dialog/dialog");var b=(function(){var r=g(window.location);return r.protocol+"://"+r.authority})();var a=k.extend({eventGroup:"attachmentsdropzone",progressBarType:"dndattachment/progressbars/AttachmentsUploadProgressBar",init:function(){this._super.apply(this,arguments);this.attachFileUrl=contextPath+"/rest/jddap/1.0/attachment";p.bind(d.PANEL_REFRESHED,this.panelRefreshed.bind(this));this.connectContainer()},connectContainer:function(){this.$pagePanel=h("div.aui-page-panel");this.$containerNode=this.getContainerNode();this.$dragoverDropzone=h(f.dropzone());this.$dragoverBorder=this.$dragoverDropzone.find(".attachments-drop-zone__dragover-border");this.$dragoverInfo=this.$dragoverDropzone.find(".attachments-drop-zone__dragover-info");this.$dragoverDropzone.appendTo(this.$containerNode);this.onDragOverDropHandler=this.onDragOverDrop.bind(this);this.onDragLeaveHandler=this.onDragLeave.bind(this);this.$containerNode.on("dragover dragenter drop",this.onDragOverDropHandler);this.$containerNode.on("dragleave",this.onDragLeaveHandler);this.$windowMask=h(f.windowDropzoneMask());this.$body=h(document.body);this.$body.append(this.$windowMask);this.$body.on("dragenter",m.throttle(this.onBodyDragEnter.bind(this),200,{trailing:false}));this.$body.on("dragleave",this.onBodyDragLeave.bind(this));this.$windowMask.on("dragover dragenter",this.onWindowMaskDragEnter.bind(this));this.$windowMask.on("dragleave",this.onWindowMaskDragLeave.bind(this));this.$windowMask.on("drop",this.onWindowMaskDrop.bind(this));this.$auiSidebar=h(".aui-sidebar-body");this._disconnectListenersFromParentDropzone();this.onContentAddedHandler=this.onContentAdded.bind(this);p.bind(d.NEW_CONTENT_ADDED,this.onContentAddedHandler)},_disconnectListenersFromParentDropzone:function(){this.$dropTarget.off("dragover drop dragleave dragenter");h(document).off("dragover dragenter")},_risePagePanel:function(){this._pagePanelZIndex=this.$pagePanel.css("z-index");this.$pagePanel.css("z-index","auto")},_releasePagePanel:function(){this.$pagePanel.css("z-index",this._pagePanelZIndex)},disconnectContainer:function(){this.$dragoverDropzone.remove();this.$windowMask.remove();this.$body.removeClass("attachments-drop-zone__dragover");this.$body.off("dragenter",this.onBodyDragEnter.bind(this));this.$containerNode.off("dragenter dragover drop",this.onDragOverDropHandler);this.$containerNode.off("dragleave",this.onDragLeaveHandler);p.unbind(d.NEW_CONTENT_ADDED,this.onContentAddedHandler)},isAttached:function(){return h.contains(document,this.$node[0])},onContentAdded:function(){if(!this.isAttached()){this.disconnectContainer()}},getContainerNode:function(){var r=h(h(".issue-container")[0]);if(r.css("position")==="static"){r.css("position","relative")}return r},canDoFullPageDrop:function(){if(!e.current){o.trace("jira.issue.dnd.dropallowed");return true}else{o.trace("jira.issue.dnd.dropnotallowed");return false}},onDragOverDrop:function(r){if(!this.isAttached()){this.disconnectContainer();return}if(!j.dragEventContainsFiles(r)){return}if(!this.canDoFullPageDrop()){return}r.preventDefault();if(r.originalEvent){r.originalEvent.dataTransfer.dropEffect="copy"}o.trace("jira.issue.dnd.dragover");this.$body.addClass("attachments-drop-zone__dragover");this.$body.addClass("attachments-drop-zone__window-dragover");this.$containerNode.addClass("attachments-drop-zone__dragover-fade");this._readjustDropzone();this._repositionStickyInfoBox();if(r.type=="drop"){this.removeAllDragoverClasses(this.$containerNode);this._releasePagePanel();h(document).trigger("dropHandled");var s=new i(r.dataTransfer);s.getFiles().then(function(t){this.handleFilesReceived(t);this.queueEvent("fileDrop",{count:t.length})}.bind(this))}},onDragLeave:function(){this.removeAllDragoverClasses(this.$containerNode)},_readjustDropzone:function(){if(this.$auiSidebar.length!==0){var s=this.$auiSidebar.offset().left+this.$auiSidebar.width();if(this.$dragoverBorder.parent().offset()){var r=this.$dragoverBorder.parent().offset().left;if(s>r){this.$dragoverBorder.css({left:s-r})}else{this.$dragoverBorder.css({left:0})}}else{this.$dragoverBorder.css({left:0})}this._risePagePanel()}},_repositionStickyInfoBox:function(){var r=this.$containerNode.scrollParent().scrollTop()+10;var u=this.$containerNode.offset().top;var t;if(this.$containerNode.scrollParent().offset()){t=this.$containerNode.scrollParent().offset().top}else{t=0}var s;if(t===0){if(r>=u){s=r-u}else{s=10}}else{s=r}this.$dragoverInfo.css({top:s})},onBodyDragEnter:function(r){if(!j.dragEventContainsFiles(r)){return}this._readjustDropzone();this.$body.addClass("attachments-drop-zone__window-dragover")},onBodyDragLeave:function(){this.removeAllDragoverClasses()},onWindowMaskDragEnter:function(r){if(!j.dragEventContainsFiles(r)){return}r.preventDefault();if(r.originalEvent){r.originalEvent.dataTransfer.dropEffect="none"}this._readjustDropzone();this.$body.addClass("attachments-drop-zone__window-dragover");if(this.canDoFullPageDrop()){this.$body.addClass("attachments-drop-zone__dragover");this._repositionStickyInfoBox()}},onWindowMaskDragLeave:function(){this.removeAllDragoverClasses()},onWindowMaskDrop:function(r){r.preventDefault();this.removeAllDragoverClasses()},removeAllDragoverClasses:function(r){if(r){r.removeClass("attachments-drop-zone__dragover-fade")}this.$body.removeClass("attachments-drop-zone__window-dragover");this.$body.removeClass("attachments-drop-zone__dragover")},handleFilesReceived:function(t){var v=h("textarea.wiki-textfield:visible:focus");var s=v.length>0;var r=h(".jira-editor-container iframe:visible:focus");var u=r.length>0;p.trigger(n.ATTACHMENT_FOR_PAGE_RECEIVED,{files:t,isWikiTextfieldFocused:s,wikiTextfield:v[0],isRichEditorFieldFocused:u,richEditorField:r[0]})},render:function(){this.$node.parents("#attachmentmodule").addClass("attachments-drop-zone-parent");this.$listNode=this.$node.siblings("#file_attachments, #attachment_thumbnails");return this._super.apply(this,arguments)},panelRefreshed:function(t,r,u,s){if(!s.find(this.$node).is("*")){return}var w=this.getViewMode();u=u.find(">.mod-content");u.addClass("issue-drop-zone");this.$node.prependTo(u);this.render();var v=s.find(".attachments-upload-progress-bar");v.data("viewMode",this.getViewMode()).each(function(x,y){h(y).prop("_instance").render()});v.each(function(x,y){this.insertProgressBar(h(y))}.bind(this));this._disconnectListenersFromParentDropzone()},getViewMode:function(){return this.$listNode.attr("id")=="file_attachments"?"list":"gallery"},getSortBy:function(){return this.$listNode.data("sort-key")},getSortOrder:function(){return this.$listNode.data("sort-order")},getSortComparator:function(){var r=this.getSortOrder()=="asc"?1:-1;var t=this.getSortBy()=="fileName"?function(u){return u.find(".attachment-title").text()}:function(u){return new Date(u.find("*[datetime]").attr("datetime")).getTime()};var s=this.getSortBy()=="fileName"&&String.prototype.localeCompare?function(v,u){return v.localeCompare(u)}:function(v,u){return v<u?-1:(v>u?1:0)};return function(u,w){var x=t(u);var v=t(w);return r*s(x,v)}},commitUpload:function(s){var r=new l();this.attachFile(s).then(r.resolve.bind(r),r.reject.bind(r));r.then(function(t){var u=h(JIRA.Templates.ViewIssue.renderAttachments({baseurl:contextPath,fullBaseUrl:b+contextPath,issue:{id:JIRA.Issues.Api.getSelectedIssueId()},attachments:t,viewMode:this.getViewMode()})).find(".attachment-content");t.forEach(function(w,v){var y=u[v];var x=this.$listNode.find('>*[data-file-id="'+s[v]+'"]');x.replaceWith(y)},this);p.trigger(d.NEW_CONTENT_ADDED,[this.$listNode,q.panelRefreshed]);o.trace("jira.issue.dnd.attached")}.bind(this));this.queueTask(r);this.queueEvent("commitUpload",{count:s.length});return r},configureUploadProgressBar:function(r){this._super.apply(this,arguments);r.data("viewMode",this.getViewMode())},placeUploadProgressBar:function(r,s){s.$node.find("time.livestamp").attr("datetime",new Date().toISOString()).livestamp();this.insertProgressBar(r);s.bind("onDestroy",function(){var t=r.parents(".item-attachments");if(t.find(".attachments-upload-progress-bar, .attachment-content").length==0){t.remove()}});return r},insertProgressBar:function(t){var r=this.getSortComparator();var s=this.$listNode.children().toArray();var u=function(v){if(r(t,h(v))<1){t.insertBefore(v);return true}};if(!s.some(u)){t.appendTo(this.$listNode)}}});return a});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-issue-drop-zone', location = 'js/progressbars/UploadProgressBar.js' */
define("dndattachment/progressbars/UploadProgressBar",["require"],function(h){var g=h("jira/analytics");var p=h("jira/util/formatter");var u=h("jira/util/logger");var d=h("jira/issue");var c=h("jira/attachment/inline-attach");var q=h("jira/lib/class");var t=h("underscore");var r=h("wrm/context-path");var a=h("jira/jquery/deferred");var e=h("jquery");var b=h("dndattachment/Parser");var o=h("dndattachment/i18n");var m=h("dndattachment/TemporaryAttachments");var l=h("dndattachment/templates");var i=h("dndattachment/util/Configuration");var j=h("dndattachment/util/FileSizeUtil");var k=["aui-iconfont-error","aui-iconfont-success","aui-iconfont-close-dialog"];function f(v,w){g.send({name:"issue.dnd.attachment.uploadprogress."+v,data:w||{}})}var s=i.getWRM("thumbnail-mime-types").split(",");var n=q.extend({autoDestroy:true,init:function(v){this.result=new a();this.$node=e(v);this.file=this.$node.data("file");this.uploadSize=this.$node.data("upload-size");this.formToken=this.$node.data("form-token");this.$node.prop("_instance",this);this.render()},render:function(){this.$node.html(l.UploadProgressBar({isImageType:this.isImageType()}));this.afterRender()},afterRender:function(){if(this.file){this.setFileName(this.file.name);this.setFileSize(this.file.size);this.loadThumbnail(this.file)}if(this.progress){this.updateProgress()}this.connectListeners()},connectListeners:function(){this.getControlNode().on("click",function(){this.destroy();f("buttonClick")}.bind(this))},destroy:function(){if(this.destroyed){return}if(this.upload){this.upload.abort()}this.setAutoDestroy(false);this.trigger("onBeforeDestroy");this.destroyed=true;this.$node.animate({opacity:0},{duration:250,complete:function(){this.$node.slideUp(250,function(){if(this.objectURL){window.URL.revokeObjectURL(this.objectURL)}this.$node.remove();u.trace("jira.issue.dnd.progressbar.removed");this.trigger("onDestroy")}.bind(this))}.bind(this)})},isDestroyed:function(){return !!this.destroyed},setAutoDestroy:function(v){this.autoDestroy=v},getAutoDestroy:function(){return this.autoDestroy},getUploadParams:function(v){var w={filename:v.name,size:v.size,atl_token:atl_token(),formToken:this.formToken};t.extend(w,this.getEntityParams());return w},getEntityParams:function(){var v={};var x=d.getIssueId();var w=this.$node.parents("form").find('*[name="pid"]').attr("value");if(w){v.projectId=w}else{if(x){v.issueId=x}}return v},setFile:function(v){this.file=v},setFileID:function(v){this.fileID=v;this.$node.attr("data-file-id",v)},getFileID:function(){return this.fileID},setFileName:function(v){this.$node.find(".upload-progress-bar__file-name").text(v)},getFileName:function(){return this.$node.find(".upload-progress-bar__file-name").text()},setFileSize:function(v){if(v>=0){this.$node.find(".upload-progress-bar__file-size").html(j.format(v))}},uploadFile:function(y,A){this.setFile(y);var v=this.result;this.monitorUpload(v);v.fail(this.reportError.bind(this));if(y.size>A){v.reject(o("dnd.attachment.file.is.too.large").replace("{0}",this.uploadSize),true);return v}var z=["\\","/",'"',":","?","*","<","|",">"];for(var x=0;x<z.length;x++){var w=z[x];if(t.contains(y.name,w)){v.reject(p.format("{0} contains the invalid character \'\'{1}\'\'. Please rename the file and try again.",y.name,w),true);return v}}this.upload=new c.AjaxUpload({file:y,params:this.getUploadParams(y),url:c.AjaxPresenter.DEFAULT_URL,progress:function(B){v.notify(B/y.size)},success:function(C,B){if(C.id!==undefined&&C.name!==undefined){v.notify(1);v.resolve(C,B,y)}else{v.reject(C,B,y)}},error:function(C,B){v.reject(o("dnd.attachment.internal.server.error"),B)},abort:function(){v.reject(o("dnd.attachment.upload.aborted"),"abort")}});this.checkSession().then(function(){this.upload.upload()}.bind(this)).fail(function(){v.reject(o("dnd.attachment.unauthorized"),401)});this.$node.find(".upload-progress-bar__control>*").on("click",function(){this.upload.abort();v.reject()}.bind(this));v.done(function(B){m.putAttachment(B.id,y);this.setFileID(B.id);u.trace("jira.issue.dnd.uploaded")}.bind(this));return v},monitorUpload:function(v){v.progress(this.setProgress.bind(this));v.done(this.setFinished.bind(this));v.fail(this.setFailed.bind(this))},setProgress:function(v){this.progress=v;this.updateProgress()},updateProgress:function(){var v=this.$node.find(".upload-progress-bar__progress-bar");v.toggleClass("UploadProgressBar_progressUnknown",this.progress===false);if(this.progress>=0){v.find(".upload-progress-bar__bar").css("width",100*this.progress+"%")}},setFinished:function(){this.$node.addClass("upload-progress-bar__upload-finished");this.$node.find(".upload-progress-bar__control button .aui-icon").addClass("aui-iconfont-success").removeClass("aui-iconfont-close-dialog");this.finished=true;this.trigger("onFinished")},setFailed:function(){this.$node.addClass("UploadProgressBar_uploadFailed");this.finished=true;this.failed=true;this.trigger("onFailed")},isFinished:function(){return !!this.finished},isFailed:function(){return !!this.failed},isSuccessful:function(){return this.isFinished()&&!this.isFailed()},isImageType:function(){return this.file&&this.file.type&&t.contains(s,this.file.type)},getThumbnailSrc:function(v){if(this.isImageType()){this.objectURL=window.URL.createObjectURL(v)}return this.objectURL||JIRA.Templates.ViewIssue.matchFileIconUrl({baseurl:r(),mimetype:v.type})},getThumbnailNode:function(){return this.$node.find(".upload-progress-bar__thumbnail")},getControlNode:function(){return this.$node.find(".upload-progress-bar__control button")},loadThumbnail:function(v){var w=this.getThumbnailSrc(v);var y=this.getThumbnailNode();y.addClass(this.objectURL?"upload-progress-bar__thumbnail_image":"upload-progress-bar__thumbnail_icon");var x=e("<img/>").attr("src",w);return x.appendTo(y)},reportError:function(w,v){if(typeof w=="object"&&w.errorMessage){w=w.errorMessage}this.$node.addClass("upload-progress-bar__upload-error");this.$node.removeClass("upload-progress-bar__upload-finished");this.$node.find(".upload-progress-bar__bar").css("width","100%");this.showErrorMessage(w,v);this.setAutoDestroy(false);f("error",{message:w})},showErrorMessage:function(v){this.$node.find(".upload-progress-bar__error-message").text(v)},setIcon:function(w){var v=this.$node.find(".upload-progress-bar__control button .aui-icon");if(!k.some(function(x){v.toggleClass(x,x==w);return x==w})){throw"Unknown icon"}},checkSession:function(){var v=new a();e.ajax({type:"GET",url:contextPath+"/rest/auth/1/session",contentType:"application/json"}).done(function(){v.resolve()}).fail(function(){this.checkPermissions().done(function(w){v.resolve()}).fail(function(){v.reject()})}.bind(this));return v},checkPermissions:function(){var v=new a();e.ajax({type:"GET",url:contextPath+"/rest/api/2/mypermissions",contentType:"application/json",data:this.getEntityParams()}).done(function(w){if(w.permissions.CREATE_ATTACHMENT.havePermission){v.resolve()}else{v.reject()}}).fail(function(){v.reject()});return v}});return n});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-issue-drop-zone', location = 'js/progressbars/AttachmentsUploadProgressBar.js' */
define("dndattachment/progressbars/AttachmentsUploadProgressBar",["require"],function(b){var i=b("dndattachment/progressbars/UploadProgressBar");var g=b("jira/analytics");var h=b("jira/flag");var f=b("jquery");var e=b("dndattachment/aui/escape-html");var d=b("dndattachment/templates");var c=b("dndattachment/i18n");function a(j,k){g.send({name:"issue.dnd.attachment.attachmentsuploadprogress."+j,data:k||{}})}return i.extend({render:function(){this.$node.html(d.AttachmentsUploadProgressBar({isImageType:this.isImageType()})).removeClass("upload-progress-bar").addClass("attachments-upload-progress-bar");this.$node.toggleClass("attachment-content",!this.isImageType());this.afterRender()},loadThumbnail:function(j){if(this.$node.data("viewMode")=="gallery"){if(i.prototype.isImageType.call(this)){return this._super.apply(this,arguments)}else{return f(JIRA.Templates.ViewIssue.renderThumbnailIcon({mimetype:j.type})).appendTo(this.getThumbnailNode())}}else{return f(JIRA.Templates.ViewIssue.renderAttachmentIcon({mimetype:j.type})).appendTo(this.getThumbnailNode())}},showErrorMessage:function(l,j){if(j=="abort"){return}var k=h.showErrorMsg(c("dnd.attachment.not.uploaded")(this.getFileName()),e(l));f(k).on("aui-flag-close",function(){this.destroy()}.bind(this));this.bind("onDestroy",function(){k.close()})},isImageType:function(){return this.$node.data("viewMode")=="gallery"},getControlNode:function(){return this.$node.find(".upload-progress-bar__upload-control span")},getAutoDestroy:function(){return false}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-issue-drop-zone', location = 'templates/AttachmentsDropZone.soy' */
// This file was automatically generated from AttachmentsDropZone.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.DnDAttachmentPlugin.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.DnDAttachmentPlugin == 'undefined') { JIRA.Templates.DnDAttachmentPlugin = {}; }


JIRA.Templates.DnDAttachmentPlugin.dropzoneMask = function(opt_data, opt_ignored) {
  return '<span><div class="attachments-drop-zone__dragover-mask" /></span>';
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.dropzoneMask.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.dropzoneMask';
}


JIRA.Templates.DnDAttachmentPlugin.dropzone = function(opt_data, opt_ignored) {
  return '<span><div class="attachments-drop-zone__dragover-border"><div class="attachments-drop-zone__dragover-info"><p>' + soy.$$escapeHtml("Drop files to attach them to the issue") + '</p></div></div></span>';
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.dropzone.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.dropzone';
}


JIRA.Templates.DnDAttachmentPlugin.windowDropzoneMask = function(opt_data, opt_ignored) {
  return '<span><div class="attachments-drop-zone__window-dragover-mask" /></span>';
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.windowDropzoneMask.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.windowDropzoneMask';
}
;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-issue-drop-zone', location = 'templates/UploadProgressBar.soy' */
// This file was automatically generated from UploadProgressBar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.DnDAttachmentPlugin.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.DnDAttachmentPlugin == 'undefined') { JIRA.Templates.DnDAttachmentPlugin = {}; }


JIRA.Templates.DnDAttachmentPlugin.UploadProgressBar = function(opt_data, opt_ignored) {
  return '<div class="upload-progress-bar__thumbnail"> </div><span class="upload-progress-bar__file-name"> </span><span class="upload-progress-bar__file-size"> </span><div class="upload-progress-bar__progress-bar"><span class="upload-progress-bar__bar"> </span></div><div class="upload-progress-bar__control"><button type="button" class="aui-button aui-button-subtle aui-button-compact"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml("Cancel upload") + '</span></button></div><div class="upload-progress-bar__error-message"></div>';
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.UploadProgressBar.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.UploadProgressBar';
}


JIRA.Templates.DnDAttachmentPlugin.AttachmentsUploadProgressBar = function(opt_data, opt_ignored) {
  return '' + ((opt_data.isImageType) ? '<div class="upload-progress-bar__thumbnail"><div class="upload-progress-bar__progress-bar"><span class="upload-progress-bar__bar"> </span></div></div><dl><dt><span class="upload-progress-bar__file-name"> </span></dt><dd class="upload-progress-bar__file-size"> </dd><dd class="upload-progress-bar__upload-control"><span>' + soy.$$escapeHtml("Cancel") + '</span></dd><dd class="upload-progress-bar__error-message"></dd><dd class="attachment-date"><time class="livestamp" /></dd></dl>' : '<div class="attachment-thumb upload-progress-bar__thumbnail"></div><dl><dt class="attachment-title upload-progress-bar__file-name"></dt><dd class="upload-progress-bar__upload-control"><span>' + soy.$$escapeHtml("Cancel") + '</span></dd><dd class="attachment-size"><span class="upload-progress-bar__file-size"> </span><div class="upload-progress-bar__progress-bar"><span class="upload-progress-bar__bar"> </span></div></dd><dd class="attachment-author"> </dd><dd class="attachment-date"><time class="livestamp" /></dd></dl>');
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.AttachmentsUploadProgressBar.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.AttachmentsUploadProgressBar';
}


JIRA.Templates.DnDAttachmentPlugin.TempUploadProgressBar = function(opt_data, opt_ignored) {
  return '<div class="temp-upload-progress-bar__parent-container temp-upload-progress-bar__uploading"><div class="temp-upload-progress-bar__container"><div class="upload-progress-bar__thumbnail"/><div class="upload-progress-bar__progress-bar"><span class="upload-progress-bar__bar"> </span></div><div class="upload-progress-bar__error"><div class="upload-progress-bar__error-indicator"><span class="aui-icon aui-icon-large aui-iconfont-error">' + soy.$$escapeHtml("Upload error") + '</span></div><div class="upload-progress-bar__error-text">' + soy.$$escapeHtml("Upload failed") + '</div></div><div class="upload-progress-bar__upload-mask"/><div class="upload-progress-bar__control"><button type="button" class="aui-button aui-button-subtle aui-button-compact"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog"><div class="button-text" aria-label="' + soy.$$escapeHtml("Cancel upload") + ' "></div><div class="file-name"></div><div class="error-message"></div></span></button></div><div class="upload-progress-bar__progress-bar"><span class="upload-progress-bar__bar"> </span></div></div><div class="upload-progress-bar_file-name-container"><span class="upload-progress-bar__file-name"></span></div></div>';
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.TempUploadProgressBar.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.TempUploadProgressBar';
}


JIRA.Templates.DnDAttachmentPlugin.SuccessMessageLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.issueLink) + '">' + soy.$$escapeHtml(opt_data.issueKey) + ' - ' + soy.$$escapeHtml(opt_data.issueSummary) + '</a>';
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.SuccessMessageLink.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.SuccessMessageLink';
}
;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-form-drop-zone', location = 'js/dropzones/FormDropZone.js' */
define("dndattachment/dropzones/FormDropZone",["require"],function(a){var m=a("jira/util/logger");var c=a("jira/util/events/types");var k=a("underscore");var i=a("jira/jquery/deferred");var d=a("dndattachment/Parser");var h=a("dndattachment/dropzones/IssueDropZone");var e=a("jquery");var l=a("dndattachment/aui/dialog2");var b=a("dndattachment/i18n");var f=a("dndattachment/util/DataTransfer");var g=a("dndattachment/ctrlv/utility");var n=a("jira/util/events");var j=h.extend({eventGroup:"formdropzone",init:function(){this._super.apply(this,arguments);this.progressBars=[];this.bind("uploadFinished",this.onUploadFinished.bind(this));this.$containerNode=this.getContainerNode();this.$formNode=this.$node.parents("form");this.formToken=this.$formNode.find('input[name="formToken"]').attr("value");this.$inputNode=e('<input name="dnd-dropzone" type="hidden" />').insertAfter(this.$node);this.$fieldNode=this.$node.parents(".field-group");this.$fieldNode.addClass("long-field");this.connectContainer()},onUploadFinished:function(p,q){var o=e('<input type="checkbox" name="filetoconvert"/>').addClass("upload-progress-bar__checkbox").attr("value",q.fileID).attr("id","filetoconvert-"+q.fileID).prop("checked",true).insertBefore(q.$node);q.bind("onBeforeDestroy",function(){o.prop("checked",false).prop("value",null)});setTimeout(function(){q.$node.addClass("upload-progress-bar__upload-ready");q.setIcon("aui-iconfont-close-dialog")},1000);m.trace("jira.issue.dnd.uploadfinished")},commitUpload:function(o){this.queueEvent("commitUpload",{count:o.length});return new i()},getContainerNode:function(){return this.$node.parents(".jira-dialog-content")},connectContainer:function(){this.$dragoverMask=e('<div class="attach-files-drop-zone__dragover-mask" />');this.$dragoverMask.appendTo(this.$containerNode);this.$body=e(document.body);this.onDragOverDropHandler=this.onDragOverDrop.bind(this);this.onDragLeaveHandler=this.onDragLeave.bind(this);this.onBodyDragOverDropHandler=this.onBodyDragOverDrop.bind(this);this.$containerNode.on("dragover drop",this.onDragOverDropHandler);this.$containerNode.on("dragleave",this.onDragLeaveHandler);this.$body.on("dragover drop",this.onBodyDragOverDropHandler);this.onBeforeSubmitHandler=this.onBeforeSubmit.bind(this);this.$formNode.on("before-submit",this.onBeforeSubmitHandler);this.onContentAddedHandler=this.onContentAdded.bind(this);n.bind(c.NEW_CONTENT_ADDED,this.onContentAddedHandler);n.bind("Dialog.hide",this.onDialogHide.bind(this));if(l){l.on("hide",this.onDialogHide.bind(this))}},disconnectContainer:function(){this.$dragoverMask.remove();this.$containerNode.removeClass("attach-files-drop-zone__dragover");this.$containerNode.off("dragover drop",this.onDragOverDropHandler);this.$containerNode.off("dragleave",this.onDragLeaveHandler);this.$formNode.off("before-submit",this.onBeforeSubmitHandler);n.unbind(c.NEW_CONTENT_ADDED,this.onContentAddedHandler);n.unbind("Dialog.hide",this.onDialogHide.bind(this));if(l){l.off("hide",this.onDialogHide.bind(this))}},isAttached:function(){return e.contains(document,this.$node[0])},onContentAdded:function(){if(!this.isAttached()){this.disconnectContainer()}},onDialogHide:function(){this.$body.off("dragover drop",this.onBodyDragOverDropHandler)},onBodyDragOverDrop:function(o){o.preventDefault();if(o.originalEvent){o.originalEvent.dataTransfer.dropEffect="none"}},onDragOverDrop:function(o){if(!this.isAttached()){this.disconnectContainer();return}if(!g.dragEventContainsFiles(o)){return}o.preventDefault();o.stopPropagation();if(o.originalEvent){o.originalEvent.dataTransfer.dropEffect="copy"}this.$containerNode.addClass("attach-files-drop-zone__dragover");if(o.type=="drop"){this.$containerNode.removeClass("attach-files-drop-zone__dragover");e(document).trigger("dropHandled");var p=new f(o.dataTransfer);p.getFiles().then(function(q){this.handleFilesReceived(q);this.queueEvent("fileDrop",{count:q.length})}.bind(this))}},onDragLeave:function(){this.$containerNode.removeClass("attach-files-drop-zone__dragover")},onBeforeSubmit:function(o){if(this.isDirty){o.preventDefault();var p={};p[this.$inputNode.attr("name")]=b("dnd.attachment.upload.in.progress");JIRA.applyErrorsToForm(this.$formNode,p);this.$formNode.find(".error").toArray().some(function(q){q.scrollIntoView()})}},markDirty:function(o){h.prototype.markDirty.apply(this,arguments);this.isDirty=o;m.trace(o?"jira.issue.dnd.isdirty":"jira.issue.dnd.isclear")},handleNewProgressBar:function(o){this.progressBars.push(o);o.bind("onBeforeDestroy",k.bind(function(){this.trigger("progressBarOnBeforeDestroy",o);this.progressBars=k.filter(this.progressBars,function(p){return p!==o});if(this.progressBars.length===0){this.trigger("allUploadsCancelled")}},this));o.bind("onDestroy",k.bind(function(){this.trigger("progressBarDestroyed")},this));o.bind("onFinished",k.bind(function(){this.trigger("progressBarFinished")},this));o.bind("onFailed",k.bind(function(){this.trigger("progressBarFailed")},this));this.trigger("progressBarStarted")},filesStillUploading:function(){return k.filter(this.progressBars,function(o){return !o.isFinished()}).length>0},anyFilesFailed:function(){return k.filter(this.progressBars,function(o){return o.isFailed()}).length>0}});return j});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-create-issue-drop-zone', location = 'js/dropzones/AttachFilesDropZone.js' */
define("dndattachment/dropzones/AttachFilesDropZone",["require"],function(b){var a=b("jira/jquery/deferred");var c=b("dndattachment/dropzones/FormDropZone");return c.extend({eventGroup:"attachfiledropzone",init:function(){this._super.apply(this,arguments);this.bind("progressBarInserted",function(d,f){var e=new a();this.queueTask(e);f.result.done(e.resolve.bind(e));f.bind("onBeforeDestroy",function(){e.resolve()})}.bind(this))},checkMarkDirty:function(){if(this.pendingQueue.length<=1){this.markDirty(false)}}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-create-issue-drop-zone', location = 'js/dropzones/CreateIssueDropZone.js' */
define("dndattachment/dropzones/CreateIssueDropZone",["require"],function(d){var c=d("underscore");var f=d("jquery");var e=d("dndattachment/dropzones/FormDropZone");var b=d("dndattachment/progressbars/UploadProgressBar");var a=e.extend({eventGroup:"createissuedropzone",progressBarType:"dndattachment/progressbars/ProjectUploadProgressBar",getContainerNode:function(){return f(this.$node.parents(".jira-dialog-content")[0]||this.$node.parents("form#issue-create").parents(".aui-page-panel-content")[0]||this.$node.parents("form.dnd-attachment-support")[0])},handleNewProgressBar:function(g){this._super.apply(this,arguments);g.bind("onDestroy onFinished",c.bind(function(){if(!this.filesStillUploading()){var h={};h[this.$inputNode.attr("name")]="";JIRA.applyErrorsToForm(this.$formNode,h)}},this))}});return a});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-create-issue-drop-zone', location = 'js/progressbars/ProjectUploadProgressBar.js' */
define("dndattachment/progressbars/ProjectUploadProgressBar",["require"],function(b){var c=b("jquery");var a=b("dndattachment/progressbars/UploadProgressBar");return a.extend({getProjectId:function(){return this.$node.parents("form").find("*[name=pid]").val()},getUploadParams:function(d){var e=a.prototype.getUploadParams.apply(this,arguments);if(this.getProjectId()){e.projectId=this.getProjectId()}return e},loadThumbnail:function(e){if(!this.isImageType()){var h=this.getThumbnailNode();h.removeClass("upload-progress-bar__thumbnail_image").addClass("upload-progress-bar__thumbnail_icon").addClass("upload-progress-bar__thumbnail_icon_aui");var d="aui-iconfont-devtools-file";var g="File";if(typeof e==="object"){d=JIRA.Templates.ViewIssue.matchFileClass({mimetype:e.type});g=JIRA.Templates.ViewIssue.matchFileIconAlt({mimetype:e.type})}var f=c('<span class="aui-icon aui-icon-large"/>').addClass(d).attr("title",g);return f.appendTo(h)}else{return this._super.apply(this,arguments)}}})});;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-create-issue-drop-zone', location = 'templates/AttachFilesDropZone.soy' */
// This file was automatically generated from AttachFilesDropZone.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.DnDAttachmentPlugin.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.DnDAttachmentPlugin == 'undefined') { JIRA.Templates.DnDAttachmentPlugin = {}; }


JIRA.Templates.DnDAttachmentPlugin.AttachFilesDropZone = function(opt_data, opt_ignored) {
  return '<div duiType="dndattachment/dropzones/AttachFilesDropZone" class="issue-drop-zone" data-upload-limit="' + soy.$$escapeHtml(opt_data.jiraAttachmentSize) + '" data-upload-size="' + soy.$$escapeHtml(opt_data.uploadLimit) + '"></div>';
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.AttachFilesDropZone.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.AttachFilesDropZone';
}
;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:dnd-create-issue-drop-zone', location = 'templates/CreateIssueDropZone.soy' */
// This file was automatically generated from CreateIssueDropZone.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.DnDAttachmentPlugin.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.DnDAttachmentPlugin == 'undefined') { JIRA.Templates.DnDAttachmentPlugin = {}; }


JIRA.Templates.DnDAttachmentPlugin.CreateIssueDropZone = function(opt_data, opt_ignored) {
  return '<div duiType="dndattachment/dropzones/CreateIssueDropZone" class="issue-drop-zone" data-upload-limit="' + soy.$$escapeHtml(opt_data.jiraAttachmentSize) + '" data-upload-size="' + soy.$$escapeHtml(opt_data.uploadLimit) + '"></div>' + ((opt_data.description) ? '<div class="description">' + soy.$$escapeHtml(opt_data.description) + '</div>' : '');
};
if (goog.DEBUG) {
  JIRA.Templates.DnDAttachmentPlugin.CreateIssueDropZone.soyTemplateName = 'JIRA.Templates.DnDAttachmentPlugin.CreateIssueDropZone';
}
;
;
/* module-key = 'com.atlassian.jira.plugins.jira-dnd-attachment-plugin:drag-and-drop-attachment-javascript-init', location = 'js/initIssueDropZone.js' */
define("dndattachment/init",["jira/util/events","jira/util/events/types","jira/dialog/dialog-register","jira/dialog/dialog","underscore","dndattachment/Parser","jquery","dndattachment/dropzones/IssueDropZone","dndattachment/upload/handler","dndattachment/upload/default/executor","dndattachment/TemporaryAttachments","dndattachment/templates","dndattachment/util/Configuration","dndattachment/util/FileSizeUtil"],function(m,r,i,g,t,a,f,n,s,e,o,l,h,j){if(!n.prototype.isSupportedBrowser()){return}var d=h.getWRM("upload-limit");var p;function k(w,z){var v=w.find(".field-group.file-input-list");if(v.size()==0){return}if(v.find('*[duiType*="'+z+'"]').length>0){return}var u=v.find("input[name=filetoconvert]:checked").map(function(A,B){return o.getAttachment(B.value,f(B).siblings("label").text())}).toArray();var x=v.find(".description:last-child").html();v.empty();var y=f(l[z]({uploadLimit:j.format(d),jiraAttachmentSize:d,description:x}));a.parse(y.appendTo(v)).then(function(A){if(A!=null){A.loadAttachments(u)}})}function c(v,w){var u=function(){k(v.$popupContent,w)};if(v.$popup&&v.$popup.is(":visible")){u()}else{v.onContentReady(u)}}function q(u){var v=u&&(u.attr("id")=="attachmentmodule")&&f(".mod-content:not(.issue-drop-zone)",u);if(v&&v.size()>0){if(u.find("#add-attachments-link").length==0){return}v.addClass("issue-drop-zone");var w=f(l.AttachmentsDropZone({uploadLimit:j.format(d),jiraAttachmentSize:d}));a.parse(w.prependTo(v)).then(function(x){if(p){p.disconnectContainer()}p=x;s.setAttachmentDropZone(x)})}}var b=function(){m.bind(r.NEW_CONTENT_ADDED,function(y,w,x){q(w)});var v=f("form#issue-create, form#issue-edit, form.dnd-attachment-support");if(v.size()>0){k(v,"CreateIssueDropZone")}s.initialize();s.registerExecutor(e);q(f("#attachmentmodule"));var u="issue-drop-zone-document__dragover";f(document).on("dragover dragenter",function(){f("body").addClass(u)});f(document).on("dragleave drop dropHandled",function(){f("body").removeClass(u)})};if(f.isReady){b()}else{f(b)}f.event.props.push("dataTransfer")});require("dndattachment/init");;
;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:marionette', location = 'lib/backbone/marionette/backbone.marionette-amd.js' */
define("jira/view-issue-plugin/lib/marionette",["backbone","underscore","atlassian/libs/factories/marionette-2.1.0"],function(e,i,n){return n(i,e)});;
;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:asynchronous-attachment-expansion', location = 'viewissue/attachment/attachment-contents-view.js' */
define("jira/view-issue-plugin/attachment/attachment-contents-view",["jira/view-issue-plugin/lib/marionette"],function(t){"use strict";return t.ItemView.extend({template:JIRA.Templates.ViewIssue.attachmentContents,initialize:function(t){this.attachment=t.attachment,this.issueId=t.issueId,this.baseUrl=t.baseUrl},serializeData:function(){return{attachment:this.attachment,issueId:this.issueId,baseUrl:this.baseUrl}}})}),define("jira/attachment/attachment-contents-view",["jira/view-issue-plugin/attachment/attachment-contents-view"],function(t){return t});;
;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:asynchronous-attachment-expansion', location = 'viewissue/attachment/attachment-element.js' */
define("jira/view-issue-plugin/attachment/attachment-element",["jira/util/logger","wrm/context-path","jquery","jira/skate","jira/viewissue/slideshow/slideshow-configuration","jira/view-issue-plugin/lib/marionette","jira/attachment/attachment-contents-view"],function(t,e,n,i,a,o,r){"use strict";function c(i){var a=n(i),c=a.data("attachment-id"),s=a.data("issue-id"),u=e()+"/rest/api/2/attachment/"+c+"/expand/human",l=n.get(u);l.done(function(t){var n=new o.Region({el:a.find(".zip-contents").first()}),i=new r({attachment:t,issueId:s,baseUrl:window.location.protocol+"//"+window.location.host+e()});n.show(i)}),l.error(function(e){t.error(e)})}return i("js-file-attachment",{type:i.type.CLASSNAME,attached:function(e){n(e).find(".expander").one("expandBlock",function(){c(e)}),t.trace("jira.plugins.viewissue.expansion.wired")},events:{"click .attachment-title":function(t,e){if(1===e.which){var n=t.getThumbnailImage();n.length&&(n.click(),e.preventDefault())}}},prototype:{getThumbnailImage:function(){return n(".gallery",this)}}})});;
;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:asynchronous-attachment-expansion', location = 'viewissue/attachment/attachment.soy' */
// This file was automatically generated from attachment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.ViewIssue.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.ViewIssue == 'undefined') { JIRA.Templates.ViewIssue = {}; }


JIRA.Templates.ViewIssue.attachmentContents = function(opt_data, opt_ignored) {
  var output = '<ol class="archive-expanded">';
  var entries__soy4 = opt_data.attachment.entries;
  var entryList5 = entries__soy4;
  var entryListLen5 = entryList5.length;
  for (var entryIndex5 = 0; entryIndex5 < entryListLen5; entryIndex5++) {
    var entryData5 = entryList5[entryIndex5];
    output += JIRA.Templates.ViewIssue.attachmentArchiveEntry(soy.$$augmentMap(opt_data, {entry: entryData5}));
  }
  output += ((opt_data.attachment.totalEntryCount == 0) ? '<li><div class="aui-message aui-message-warning" style="display: inline-block"><p>' + soy.$$escapeHtml("This archive is either corrupt, empty or not an archive at all") + '.</p></div></li>' : '') + '</ol><span class="zip-contents-trailer">' + ((entries__soy4.length < opt_data.attachment.totalEntryCount) ? '<span class="limit-info">' + soy.$$escapeHtml(AJS.format("Showing {0} of {1} items",entries__soy4.length,opt_data.attachment.totalEntryCount)) + ' </span>' : '');
  var attachmentUrl__soy20 = soy.$$escapeHtml(opt_data.baseUrl) + '/secure/attachment/' + soy.$$escapeHtml(opt_data.attachment.id) + '/';
  output += '<a href="' + soy.$$escapeHtml(attachmentUrl__soy20) + '" draggable="true" data-downloadurl="' + soy.$$escapeHtml(opt_data.attachment.mediaType) + ':' + soy.$$escapeHtml(opt_data.attachment.name) + ':' + soy.$$escapeHtml(attachmentUrl__soy20) + '">' + soy.$$escapeHtml("Download Zip") + '</a></span>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.attachmentContents.soyTemplateName = 'JIRA.Templates.ViewIssue.attachmentContents';
}


JIRA.Templates.ViewIssue.attachmentArchiveEntry = function(opt_data, opt_ignored) {
  var output = '';
  var entryUrl__soy37 = soy.$$escapeHtml(opt_data.baseUrl) + '/secure/attachmentzip/unzip/' + soy.$$escapeHtml(opt_data.issueId) + '/' + soy.$$escapeHtml(opt_data.attachment.id) + '%5B' + soy.$$escapeHtml(opt_data.entry.index) + '%5D/';
  var entryDownloadUrl__soy49 = soy.$$filterNoAutoescape(opt_data.entry.mediaType) + ':' + soy.$$filterNoAutoescape(opt_data.entry.path) + ':' + soy.$$filterNoAutoescape(entryUrl__soy37);
  output += '<li class="archive-entry" data-entry-index="' + soy.$$escapeHtml(opt_data.entry.index) + '"><div class="attachment-thumb"><a href="' + soy.$$escapeHtml(entryUrl__soy37) + '" draggable="true" data-downloadurl="' + soy.$$escapeHtml(entryDownloadUrl__soy49) + '"' + JIRA.Templates.ViewIssue.tagFilePreview({id: opt_data.attachment.id + '/' + opt_data.entry.index, title: opt_data.entry.label, mimeType: opt_data.entry.mediaType}) + '>' + JIRA.Templates.ViewIssue.renderAttachmentIcon({mimetype: opt_data.entry.mediaType, baseurl: opt_data.baseUrl}) + '</a></div><a class="file-path" href="' + soy.$$escapeHtml(entryUrl__soy37) + '" title="' + soy.$$escapeHtml(opt_data.entry.path) + '" draggable="true" data-downloadurl="' + soy.$$escapeHtml(entryDownloadUrl__soy49) + '"' + JIRA.Templates.ViewIssue.tagFilePreview({id: opt_data.attachment.id + '/' + opt_data.entry.index, title: opt_data.entry.label, mimeType: opt_data.entry.mediaType}) + '>' + soy.$$escapeHtml(opt_data.entry.label) + '</a><span class="attachment-size">' + soy.$$escapeHtml(opt_data.entry.size) + '</span></li>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Templates.ViewIssue.attachmentArchiveEntry.soyTemplateName = 'JIRA.Templates.ViewIssue.attachmentArchiveEntry';
}
;
;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:draggableattachment', location = 'viewissue/initDraggableAttachment.js' */
define("jira/view-issue-plugin/init-draggable-attachment",["jquery"],function(a){a.event.props.push("dataTransfer"),a("[draggable=true]").live("dragstart",function(e){var t=a(this),i=e.dataTransfer;i.effectAllowed="copy",i.dropEffect="copy",i.setData("DownloadURL",t.data("downloadurl")),t.find("img").length||i.setDragImage(t.closest("li").find("img:visible")[0],8,8)})});;
;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:analytics', location = 'viewissue/analytics.js' */
define("jira/view-issue-plugin/analytics",["jira/analytics","jquery"],function(i,s){"use strict";var n=s(document);n.on("click","#subtasks-bulk-operation",function(){i.send({name:"jira.bulk.move.click.subtasks-bulk-operation"})}),n.on("click","#subtasks-open-issue-navigator",function(){i.send({name:"jira.bulk.move.click.subtasks-open-issue-navigator"})})});;
;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:controller-subtasks', location = 'viewissue/subtasks/subtasks.js' */
require(["jquery","wrm/data","wrm/context-path","jira/analytics","jira/issuetable"],function(n,i,t,e,r){var o=function(n){return n.position.original!==n.position.current},a=function(n){return n.position.current<n.position.original},s=function(i){return n(i.row).parent().find("tr .stsequence div")},u=function(n){var i=s(n),t=n.position;return a(n)?i.slice(t.current+1,t.original+1):i.slice(t.original,t.current)};i.claim("com.atlassian.jira.jira-view-issue-plugin:controller-subtasks.controller.subtasks.parameters",function(i){r.onTable(function(r){var c=t()+i.url.replace("{issueId}",JIRA.Issue.getIssueId());n.get(c).success(function(c){c&&(r.on(r.Events.ROW_DRAG_COMPLETED,function(c){o(c)&&(n.ajax({url:t()+i.url.replace("{issueId}",JIRA.Issue.getIssueId()),type:"POST",method:"POST",accept:"application/json",contentType:"application/json",data:JSON.stringify({original:c.position.original,current:c.position.current}),dataType:"json"}).success(function(){[].slice.call(s(c)).forEach(function(i,t){n(i).html(t+1+".")})}).fail(function(){console.error("Unable to store updated issues position"),r.dragging.cancel()}),e.send({name:"com.atlassian.jira.view-issue-plugin.subtasks.drag.and.drop",data:{direction:a(c)?"up":"down",rowsCount:s(c).length,rowsUpdated:u(c).length}}))}),r.dragging.enable())})})},function(){console.warn("Unable to read data from WRM")})});;
;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:linkingmodule-js', location = 'viewissue/links/links-container.js' */
define("jira/view-issue-plugin/links/links-container",["jira/util/formatter","wrm/context-path","jira/ajs/ajax/smart-ajax","jira/skate","jquery"],function(n,e,i,t,a){"use strict";function l(n){var e=n.data("remote-link-id");e&&n.data("requires-async-loading")&&s(e,n.attr("id"))}function s(t,l){i.makeRequest({error:function(){var e=a(document.getElementById(l)),i=e.parents("*[data-default-link-icon]").data("default-link-icon");e.find(".link-loading").removeClass("link-loading").addClass("link-loading-failed").html("Failed to load"),e.find(".link-throbber").append(a("<img width='16' height='16' title='' alt='' />").attr("src",i))},success:function(n){a(document.getElementById(l)).find(".link-content").html(n)},url:e()+"/rest/viewIssue/1/remoteIssueLink/render/"+t})}return t("links-container",{type:t.type.CLASSNAME,attached:function(n){a(n).find("dd:not(.collapsed-link)").each(function(n,e){l(a(e))})},events:{"click #show-more-links-link":function(n,e,i){e.preventDefault();var t=a(n);t.find(i).parent().hide(),t.find(".collapsed-links-list").removeClass("collapsed-links-list"),t.find("dd.collapsed-link").each(function(n,e){var i=a(e);l(i),i.removeClass("collapsed-link")})}}})});;
;
/* module-key = 'com.atlassian.jira.jira-view-issue-plugin:initialiser', location = 'viewissue/initViewIssue.js' */
require(["jira/view-issue-plugin/attachment/attachment-element","jira/view-issue-plugin/init-draggable-attachment","jira/view-issue-plugin/links/links-container","jira/view-issue-plugin/analytics"]);;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-inline-editable', location = 'includes/js/rapid/ui/detail/editable/EditableDetailsView.soy' */
// This file was automatically generated from EditableDetailsView.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GH.tpl.inlineEditableDetailview.
 */

if (typeof GH == 'undefined') { var GH = {}; }
if (typeof GH.tpl == 'undefined') { GH.tpl = {}; }
if (typeof GH.tpl.inlineEditableDetailview == 'undefined') { GH.tpl.inlineEditableDetailview = {}; }


GH.tpl.inlineEditableDetailview.renderIssueDetailsSkeleton = function(opt_data, opt_ignored) {
  return '<div id="ghx-detail-contents" class="ghx-detail-contents issue-container"><div class="ghx-detail-view-blanket"></div></div>';
};
if (goog.DEBUG) {
  GH.tpl.inlineEditableDetailview.renderIssueDetailsSkeleton.soyTemplateName = 'GH.tpl.inlineEditableDetailview.renderIssueDetailsSkeleton';
}


GH.tpl.inlineEditableDetailview.renderIssueDetails = function(opt_data, opt_ignored) {
  return '<div id="ghx-detail-issue" class="ghx-detail-issue issue-body-content" data-issueid="' + soy.$$escapeHtml(opt_data.issueDetails.id) + '" data-issuekey="' + soy.$$escapeHtml(opt_data.issueDetails.key) + '">' + GH.tpl.detailview.renderIssueDetailsBody(opt_data) + '</div>';
};
if (goog.DEBUG) {
  GH.tpl.inlineEditableDetailview.renderIssueDetails.soyTemplateName = 'GH.tpl.inlineEditableDetailview.renderIssueDetails';
}


GH.tpl.inlineEditableDetailview.renderStatisticGroup = function(opt_data, opt_ignored) {
  return '<div class="ghx-statistic-group"><div class="ghx-detail-statistic ghx-estimate js-estimate"></div><div class="ghx-remaining-group"><div class="ghx-detail-statistic ghx-remainings js-remainings"></div>' + GH.tpl.detailview.renderLogWorkTrigger(null) + '</div></div>';
};
if (goog.DEBUG) {
  GH.tpl.inlineEditableDetailview.renderStatisticGroup.soyTemplateName = 'GH.tpl.inlineEditableDetailview.renderStatisticGroup';
}


GH.tpl.inlineEditableDetailview.renderAggregateRemainingEstimateTooltip = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.data) {
    output += '<div class="ghx-aggregatetimeestimate-tooltip">';
    var rowList23 = opt_data.data;
    var rowListLen23 = rowList23.length;
    for (var rowIndex23 = 0; rowIndex23 < rowListLen23; rowIndex23++) {
      var rowData23 = rowList23[rowIndex23];
      output += (rowData23) ? '<div><span>' + soy.$$escapeHtml(rowData23.label) + ': </span><span>' + soy.$$escapeHtml(rowData23.value ? rowData23.value : '-') + '</span></div>' : '';
    }
    output += '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  GH.tpl.inlineEditableDetailview.renderAggregateRemainingEstimateTooltip.soyTemplateName = 'GH.tpl.inlineEditableDetailview.renderAggregateRemainingEstimateTooltip';
}


GH.tpl.inlineEditableDetailview.renderTabMenuStructure = function(opt_data, opt_ignored) {
  var output = '<div class="ghx-detail-nav-menu"><ul>';
  var tabList35 = opt_data.tabs;
  var tabListLen35 = tabList35.length;
  for (var tabIndex35 = 0; tabIndex35 < tabListLen35; tabIndex35++) {
    var tabData35 = tabList35[tabIndex35];
    output += GH.tpl.inlineEditableDetailview.renderTabNavigation({tab: tabData35});
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  GH.tpl.inlineEditableDetailview.renderTabMenuStructure.soyTemplateName = 'GH.tpl.inlineEditableDetailview.renderTabMenuStructure';
}


GH.tpl.inlineEditableDetailview.renderTabNavigation = function(opt_data, opt_ignored) {
  var output = '';
  var sectionList41 = opt_data.tab.sections;
  var sectionListLen41 = sectionList41.length;
  for (var sectionIndex41 = 0; sectionIndex41 < sectionListLen41; sectionIndex41++) {
    var sectionData41 = sectionList41[sectionIndex41];
    output += (sectionData41.iconFont || sectionData41.iconURL) ? '<li id="' + soy.$$escapeHtml(opt_data.tab.tabId) + '-nav" class="ghx-detail-nav-item ' + ((sectionData41.isLazyLoading) ? 'disabled' : '') + '"><a href="#' + soy.$$escapeHtml(sectionData41.id) + '" title="' + ((sectionData41.toolTip) ? soy.$$escapeHtml(sectionData41.toolTip) : soy.$$escapeHtml(sectionData41.title)) + '">' + ((sectionData41.thirdPartyTab) ? (sectionData41.iconFont) ? '<span class="ghx-iconfont aui-icon aui-icon-small aui-iconfont-' + soy.$$escapeHtml(sectionData41.iconFont) + '">' + soy.$$escapeHtml(sectionData41.title) + '</span>' : '<span class="ghx-icon ghx-icon-thirdparty" style="background-image:url(\'' + soy.$$escapeHtml(sectionData41.iconURL) + '\');">' + soy.$$escapeHtml(sectionData41.title) + '</span>' : '<span class="ghx-iconfont aui-icon aui-icon-small aui-iconfont-' + soy.$$escapeHtml(sectionData41.iconFont) + '">' + soy.$$escapeHtml(sectionData41.title) + '</span>') + ((sectionData41.hasTitleCount) ? '<b>' + soy.$$escapeHtml(sectionData41.titleCount) + '</b>' : '') + '</a></li>' : '';
  }
  return output;
};
if (goog.DEBUG) {
  GH.tpl.inlineEditableDetailview.renderTabNavigation.soyTemplateName = 'GH.tpl.inlineEditableDetailview.renderTabNavigation';
}


GH.tpl.inlineEditableDetailview.renderTabs = function(opt_data, opt_ignored) {
  var output = '<div id="js-detail-nav-content" class="ghx-detail-nav-content">';
  var tabList89 = opt_data.tabs;
  var tabListLen89 = tabList89.length;
  for (var tabIndex89 = 0; tabIndex89 < tabListLen89; tabIndex89++) {
    var tabData89 = tabList89[tabIndex89];
    output += '<div id="' + soy.$$escapeHtml(tabData89.tabId) + '">';
    var sectionList93 = tabData89.sections;
    var sectionListLen93 = sectionList93.length;
    for (var sectionIndex93 = 0; sectionIndex93 < sectionListLen93; sectionIndex93++) {
      var sectionData93 = sectionList93[sectionIndex93];
      output += '<div id="' + soy.$$escapeHtml(sectionData93.id) + '" class="ghx-detail-section"></div>';
    }
    output += '</div>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  GH.tpl.inlineEditableDetailview.renderTabs.soyTemplateName = 'GH.tpl.inlineEditableDetailview.renderTabs';
}


GH.tpl.inlineEditableDetailview.renderFieldStructure = function(opt_data, opt_ignored) {
  var output = '';
  var isAgileInlineEdit__soy102 = opt_data.field.id == 'timeoriginalestimate' || opt_data.field.id == 'timeestimate';
  output += '<dl class="ghx-detail-list"><dt class="ghx-detail-term ghx-fieldtype-' + soy.$$escapeHtml(opt_data.field.type) + ' ghx-fieldname-' + soy.$$escapeHtml(opt_data.field.id) + '"' + ((opt_data.field.dataTooltip) ? 'data-tooltip="' + soy.$$escapeHtml(opt_data.field.dataTooltip) + '"' : 'title="' + soy.$$escapeHtml(opt_data.field.tooltip ? opt_data.field.tooltip : opt_data.field.label) + '"') + '>' + soy.$$escapeHtml(opt_data.field.label) + ':</dt><dd id="' + soy.$$escapeHtml(opt_data.field.id) + '-val" class="ghx-detail-description ghx-fieldtype-' + soy.$$escapeHtml(opt_data.field.type) + ' ghx-fieldname-' + soy.$$escapeHtml(opt_data.field.id) + '"' + ((opt_data.issueDetails.editable && opt_data.field.editable) ? 'tabindex="0"' : '') + ' data-field-id="' + soy.$$escapeHtml(opt_data.field.id) + '"' + ((opt_data.field.dataTooltip) ? 'data-tooltip="' + soy.$$escapeHtml(opt_data.field.dataTooltip) + '"' : 'title="' + soy.$$escapeHtml(opt_data.field.tooltip ? opt_data.field.tooltip : opt_data.field.label) + '"') + '></dd></dl>';
  return output;
};
if (goog.DEBUG) {
  GH.tpl.inlineEditableDetailview.renderFieldStructure.soyTemplateName = 'GH.tpl.inlineEditableDetailview.renderFieldStructure';
}


GH.tpl.inlineEditableDetailview.renderSubtasks = function(opt_data, opt_ignored) {
  var output = '<div class="ghx-container">';
  if (opt_data.filteredSubtaskCount > 0 && opt_data.subtasks.length == 0) {
    output += GH.tpl.rapid.notification.renderAuiMessage({type: 'info', message: opt_data.filteredSubtaskMessage, messageHtml: true, icon: true});
  } else if (opt_data.subtasks.length == 0 && opt_data.filteredSubtaskCount == 0) {
    output += GH.tpl.detailview.renderSubtasksEmpty(null);
  } else if (opt_data.subtasks.length > 0) {
    output += '<table class="aui"><tbody>';
    var issueList155 = opt_data.subtasks;
    var issueListLen155 = issueList155.length;
    for (var issueIndex155 = 0; issueIndex155 < issueListLen155; issueIndex155++) {
      var issueData155 = issueList155[issueIndex155];
      output += '<tr class="js-subtask-issue' + ((issueData155.done) ? ' ghx-done' : '') + '" data-issue-key="' + soy.$$escapeHtml(issueData155.key) + '" data-issue-id="' + soy.$$escapeHtml(issueData155.id) + '"><td headers="sub-key" class="ghx-nowrap"><a href="' + soy.$$escapeHtml(GH.Ajax.CONTEXT_PATH) + '/browse/' + soy.$$escapeHtml(issueData155.key) + '" title="' + soy.$$escapeHtml("View this issue") + '" class="js-detailview ghx-key">' + soy.$$escapeHtml(issueData155.key) + '</a></td><td headers="sub-summary"><div class="ghx-summary" title="' + soy.$$escapeHtml("Summary") + '">' + soy.$$escapeHtml(issueData155.summary) + '</div></td>' + ((issueData155.type && issueData155.type.url) ? '<td headers="issue-type"><span class="ghx-type" title="' + soy.$$escapeHtml(issueData155.type.name) + '"><img src="' + soy.$$escapeHtml(issueData155.type.url) + '"></span></td>' : '') + '<td headers="sub-status" class="ghx-status ' + ((! issueData155.status.statusCategory) ? 'ghx-center' : '') + '">' + GH.tpl.status.renderIcon({status: issueData155.status, maxWidth: 'short'}) + '</td><td headers="sub-avatar">' + ((issueData155.assignee) ? '<div class="ghx-sub-avatar"><span id="issue_summary_assignee_admin" class="user-hover" rel="' + soy.$$escapeHtml(issueData155.assignee.id) + '">' + ((! issueData155.assignee.avatar) ? '<a class="user-hover" rel="' + soy.$$escapeHtml(issueData155.assignee.id) + '" href="' + soy.$$escapeHtml("") + '/secure/ViewProfile.jspa?name=' + soy.$$escapeHtml(issueData155.assignee.id) + '">' + soy.$$escapeHtml(issueData155.assignee.name) + '</a>' : '<img class="user-hover" src="' + soy.$$escapeHtml(issueData155.assignee.avatar) + '"' + ((issueData155.assignee.name) ? 'alt="' + soy.$$escapeHtml(issueData155.assignee.name) + '" title="' + soy.$$escapeHtml("Assignee") + ': ' + soy.$$escapeHtml(issueData155.assignee.name) + '"' : 'alt=""') + '>') + '</span></div>' : '') + '</td>' + ((opt_data.showTrackingField) ? '<td headers="sub-estimate" class="ghx-estimate ghx-right ghx-nowrap"><div title="' + soy.$$escapeHtml("Remaining Estimate") + '">' + GH.tpl.detailview.renderTextView({field: issueData155.trackingField}) + '</div></td>' : '') + ((opt_data.showActionsColumn) ? '<td headers="sub-actions" class="ghx-nowrap ghx-actions ghx-center"><ul class="menu">' + ((issueData155.canEdit) ? '<li><a class="js-edit-subtask" title="' + soy.$$escapeHtml("Edit") + '"><span class="ghx-icon ghx-icon-edit">' + soy.$$escapeHtml("Edit") + '</span></a></li>' : '') + ((issueData155.canDelete) ? '<li><a class="js-delete-subtask" title="' + soy.$$escapeHtml("Delete") + '"><span class="ghx-iconfont aui-icon aui-icon-small aui-iconfont-remove">' + soy.$$escapeHtml("Delete") + '</span></a></li>' : '') + '</ul></td>' : '') + '</tr>';
    }
    output += ((opt_data.showTrackingField && opt_data.trackingFieldSum) ? '<tr><td colspan="5" /><td headers="sub-estimate" class="ghx-estimate-sum ghx-right ghx-nowrap"><div title="' + soy.$$escapeHtml("Remaining sum") + '">&Sigma; ' + soy.$$escapeHtml(opt_data.trackingFieldSum) + '</div></td>' + ((opt_data.showActionsColumn) ? '<td />' : '') + '</tr>' : '') + ((opt_data.filteredSubtaskCount > 0) ? '<tr><td colspan="5">' + GH.tpl.rapid.notification.renderAuiMessage({type: 'info', message: opt_data.filteredSubtaskMessage, messageHtml: true, icon: true}) + '</td></tr>' : '') + '</tbody></table>';
  }
  output += '</div>' + ((opt_data.canCreateSubtask && opt_data.subtasks.length == 0) ? '<div class="ghx-controls"><button class="aui-button js-create-subtask">' + soy.$$escapeHtml("Create Sub-Task") + '</button></div>' : '');
  return output;
};
if (goog.DEBUG) {
  GH.tpl.inlineEditableDetailview.renderSubtasks.soyTemplateName = 'GH.tpl.inlineEditableDetailview.renderSubtasks';
}
;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-inline-editable', location = 'includes/js/rapid/ui/detail/editable/EditableDetailsModel.js' */
define("jira-agile/rapid/ui/detail/inlineedit/inline-editable-details-model",["require"],function(e){"use strict";function i(e,i){return t.find(e.tabs.defaultTabs,function(e){return e.tabId.toLowerCase()===i.toLowerCase()})}var t=e("underscore"),a=e("jira-agile/rapid/ui/detail/details-model"),s={};return s.getInlineEditableFields=function(){return this.viewData?i(this.viewData,"DETAILS").inlineEditableFields:null},s.getTimeTrackingFields=function(){var e=this.getViewField("timeestimate");if(!e)return null;var i=this.getViewField("aggregatetimeestimate"),t=this.getViewField("aggregatetimeestimate_subtasks");return{currentIssueRemainingEstimateField:e,aggregateRemainingField:i,aggregateRemainingSubtaskField:t}},s.getViewField=function(e){var i=t.findWhere(this.viewData.tabs.defaultTabs,{tabId:"HEADER"});return t.find(i.fields,function(i){return i.id===e})},s.processFields=function(e){this.fieldSections={header:[],estimate:[],details:[],people:[],dates:[],links:[],description:[]};var i=e.primaryStatisticFieldId||"",a=e.trackingStatisticFieldId||"",s=t.findWhere(e.tabs.defaultTabs,{tabId:"HEADER"});t.forEach(s.fields,function(e){if(e&&e.id)if(e.id===i)this.fieldSections.estimate.push(e.id);else if(e.id!==a&&"aggregatetimeestimate"!==e.id&&"aggregatetimeestimate_subtasks"!==e.id){var t=this.FIELD_SECTION_PRESETS[e.id];t=t||e.category||"details","unsupported"!==t&&this.fieldSections[t].push(e.id)}}.bind(this))},t.extend(a,s)});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-inline-editable', location = 'includes/js/rapid/ui/detail/editable/EditableDetailsFieldRenderer.js' */
define("jira-agile/rapid/ui/detail/inlineedit/inline-editable-details-field-renderer",["require"],function(e){"use strict";function t(e,t){var i=t.find("#"+e.tabId+"-nav"),a=AJS.$(GH.tpl.detailview.renderTabNavigation({tab:e}));a&&i.replaceWith(a)}var i=e("underscore"),a=e("jira-agile/rapid/ui/detail/details-field-renderer"),n=GH.DetailsObjectFactory.getDetailsModel(),s={};return s.buildTabs=function(e,t){var i=[];return e.tabs.defaultTabs.length>0&&this._addTabs(i,e.tabs.defaultTabs,e),i},s._addTabs=function(e,t,a){i.each(t,function(t){"HEADER"!==t.tabId&&e.push({tabId:t.tabId,sections:[]})}.bind(this)),i.each(t,function(t){var n="THIRD_PARTY_TAB"!==t.tabId,s=i.findWhere(e,{tabId:t.tabId});s&&("SUB_TASKS"===t.tabId?this.addSubtaskTab(s.sections,t,a.trackingStatisticFieldId,a.key):t.sections&&i.each(t.sections,function(e){if(e.providerKey&&(e.iconURL||e.iconFont||n)){var a;a=n?e.providerKey.split(":")[1]:"ghx-tab-"+e.providerKey,e.titleCount=this._getTitleCount(e,t);var r=i.extend(e,{id:a.replace(/\./g,"-").replace(/:/g,"-"),title:e.label,hasTitleCount:!i.isUndefined(e.titleCount),thirdPartyTab:!n,isLazyLoading:!1,subpanelHtmls:[]});s.sections.push(r)}}.bind(this)))}.bind(this))},s.addSubtaskTab=function(e,t,a,s){if(t.subtaskEntries){var r,d=!!i.find(t.subtaskEntries,function(e){return e.canEdit||e.canDelete}),l=!i.isUndefined(a);if(l){var u=n.getViewField("aggregatetimeestimate_subtasks");u&&(r=u.html)}e.push({id:"subtasks",title:"Sub-Tasks",titleCount:t.subtaskEntries.length,hasTitleCount:!0,subtasks:t.subtaskEntries,canCreateSubtask:n.hasIssueOperation("create-subtask"),showActionsColumn:d,showTrackingField:l,trackingFieldSum:r,filteredSubtaskCount:t.subtaskEntries?t.totalSubtaskCount-t.subtaskEntries.length:0,parentIssueKey:s,iconFont:"jira-completed-task"})}},s.renderTabs=function(e,t,i,a){var n=AJS.$(GH.tpl.detailview.renderTabs({tabs:a})),s=AJS.$(GH.tpl.detailview.renderTabMenuStructure({tabs:a}));t.append(s),i.append(n),this.renderTabsContent(a,t.find(".ghx-detail-nav-menu"),i)},s.renderTabsContent=function(e,a,n){i.each(e,function(e){t(e,a);var s=n.find("#"+e.tabId);s.empty(),i.each(e.sections,function(e){e.subtasks?s.append(this.renderSubtasks(e)):s.append(this.renderTab(e))}.bind(this))}.bind(this))},s.renderSubtasks=function(e){var t=this.renderSubtaskAsHtmlNode(e),a={links:[],groups:[]};return e.canCreateSubtask&&e.subtasks.length>0&&a.links.push({id:"createSubtask",title:"Create Sub-Task",label:"Create Sub-Task",styleClass:"icon issueaction-create-subtask aui-icon aui-icon-small aui-iconfont-add issueaction-aui-icon"}),AJS.$.extend(e,{html:i.map(t,function(e){return AJS.$("<DIV></DIV>").append(AJS.$(e).clone()).html()}).join(""),headerLinks:a,renderHeader:!0,subpanelHtmls:[]}),this.renderTab(e)},s.renderTab=function(e){var t=[];if(e.headerLinks){var i=AJS.$(JIRA.Components.IssueViewer.Templates.Body.issuePanel({html:e.html,id:e.id,label:e.title,renderHeader:e.renderHeader,headerLinks:e.headerLinks,subpanelHtmls:e.subpanelHtmls}));i.addClass("ghx-detail-section"),t=i}else{var a=AJS.$(GH.tpl.detailview.renderTabTitle({tabTitle:e.title}));t.append(a),t.append(AJS.$(e.html))}return e.thirdPartyTab||e.iconFont||e.iconURL||t.addClass("ghx-no-tab-menu"),e.tabIconId?t.attr("ghx-tab-icon-id",e.tabIconId):e.iconFont||e.iconURL||t.addClass("ghx-hidden-tab"),t},s._getTitleCount=function(e,t){var a;if(i.isUndefined(e.titleCount))switch(t.tabId){case"ATTACHMENT":a=t.totalCount;break;case"COMMENT":a=t.totalComments}else a=e.titleCount;return a},s.renderEstimationAndTimeTracking=function(e,t){var i=t.find(".ghx-statistic-group"),a=n.getPrimaryEstimateStatisticField(),s=n.getTimeTrackingFields();a||s?(this.renderEstimateStatisticField(a,e,i),s?this.renderTimeTrackingFields(s,e,i):i.find(".ghx-remaining-group").remove()):i.empty()},s.renderEstimateStatisticField=function(e,t,a){if(e){var n=i.extend({},e,{dataTooltip:e.label,label:"Estimate"});this.renderStatisticFields([n],".js-estimate",t,a)}else a.find(".js-estimate").remove()},s.renderTimeTrackingFields=function(e,t,a){var n=[];if(n.push(i.extend({},e.currentIssueRemainingEstimateField,{dataTooltip:e.currentIssueRemainingEstimateField.label,label:"Remaining"})),e.aggregateRemainingField){var s=GH.tpl.detailview.renderAggregateRemainingEstimateTooltip({data:[{label:"Parent",value:e.currentIssueRemainingEstimateField.text},{label:e.aggregateRemainingSubtaskField?e.aggregateRemainingSubtaskField.label:null,value:e.aggregateRemainingSubtaskField?e.aggregateRemainingSubtaskField.text:null}]});n.push(i.extend({},e.aggregateRemainingField,{dataTooltip:s,label:"Remaining sum"}))}this.renderStatisticFields(n,".js-remainings",t,a)},s.renderStatisticFields=function(e,t,a,n){var s=n.find(t);s.empty(),i.each(e,function(e){var t=this.renderField(a,e);s.append(t),i.isUndefined(e.text)?s.addClass("ghx-empty"):s.removeClass("ghx-empty")}.bind(this))},i.extend(a,s)});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-inline-editable', location = 'includes/js/rapid/ui/detail/editable/IssueEditorWrapper.js' */
define("jira-agile/rapid/ui/detail/inlineedit/issue-editor-wrapper",["underscore","jquery","require"],function(e,i,n){"use strict";function t(){if(!C){C=new E,C.fieldsLoader._getFieldsData=d,C.viewIssueData.fetch=s,C.saveInProgressManager.saveIssue=a,C.issueController.show=function(){},C.canDismissComment=function(){return!0};var e={};i(GH).unbind(I("QuickEdit.fieldChange")).bind(I("QuickEdit.fieldChange"),function(i,n){e[n.fieldId]=n.fieldChangeData}),C.on("saveSuccess",function(n){var t=n.savedFieldIds[0];S(t,y.getReloadReasonForChangedField(t)),i(GH).trigger("issueUpdated",{issueId:n.issueId,source:"detailView",fieldId:t,fieldChanges:e}),AJS.trigger("analytics",{name:"gh.issueaction.issuedetail.inlineedit.submit",data:{changedField:t}})})}}function s(e,n){var t;t=l(n)?r():j;var s=new i.Deferred;return s.resolve(t),s.promise()}function r(){var e={};return e.fields=[],e.issue={id:D(),key:A(),isEditable:!0,operations:{linkGroups:[]}},e.panels={leftPanels:[],rightPanels:[],infoPanels:[]},c(e),e}function l(i){if(!i.issueEntity||!j)return!0;var n=i.issueEntity;return b!==n.key||!e.isEqual(H?H:null,n.viewIssueQuery?n.viewIssueQuery:null)}function a(i,n,t,s,r){var l=t[0],a=l;k.isTimeTrackingField(l)&&(k.specifyWhichFieldToSave(l,s,R.getEditsInProgress()),a=k.getServerFieldId());var u=C.saveInProgressManager;u.triggerBeforeSaving();var d,o,g=e.extend(s,{issueId:i,atl_token:atl_token(),singleFieldEdit:!0,fieldsToForcePresent:[a],skipScreenCheck:!0,rapidViewId:GH.DetailsView.rapidViewId}),f=e.extend({type:"POST",url:AJS.contextPath()+"/secure/DetailsViewAjaxIssueAction.jspa?decorator=none",headers:{"X-SITEMESH-OFF":!0},error:function(e){u._handleSaveError(i,n,t,e)},success:function(e,s,r,l){o=l.data,"string"==typeof o?u._handleHtmlResponse(i,n,t,o):(o=c(o),m.transformFieldHtml(o),k.isTimeTrackingField(t[0])&&(o.fields=k.removeOtherTrackingField(t[0],o.fields)),u.triggerSaveSuccess(i,n,t,o))},complete:function(){H=null,u.removeSaveInProgress(d),JIRA.trigger(JIRA.Events.INLINE_EDIT_SAVE_COMPLETE)},data:g},r);d=JIRA.SmartAjax.makeRequest(f),u.addSaveInProgress(d),u.triggerSavingStarted(i,t,g)}function u(){P||(P=new h,P.on("refineViewer",function(e){e.preventDefault(),C.once("loadComplete",function(e,i){i.issueId===D()&&S(null,y.ATTACHMENTS_CHANGED)}),H=e.query,C.updateIssueWithQuery(e.query)}),P.capture(w))}function d(e,n){var t=new i.Deferred;return setTimeout(function(){if(C){var i=T();i&&t.resolve(o(i,e,n))}},0),t.promise()}function o(e,i,n){var t=m.transformFieldHtml({fields:e});return{issueId:i,issueKey:n,fields:t.fields}}function c(e){return e&&e.panels&&(e.panels.infoPanels=[],e.panels.leftPanels=[],e.panels.rightPanels=[]),b=e.issue.key,j=e,e}function g(){P&&P.destroy(),P=null}function f(){C&&C.close(),i(GH).unbind(I("QuickEdit.fieldChange")),C=null}function I(e){return e+"."+v}var v="agileIssueEditorEventNamespace",p=n("jira/util/data/meta"),E=n("jira/components/issueeditor"),m=n("jira/components/issueviewer/legacy/issuefieldutil"),h=n("jira/components/issueviewer/linkscapturer"),k=n("jira-agile/rapid/ui/detail/inlineedit/timetracking-fields-helper"),y=n("jira-agile/rapid/ui/detail/inlineedit/details-view-reload-reason"),C=null,P=null,w=null,F=null,S=null,T=null,D=null,A=null,b=null,j=null,H=null,R={init:function(e){w=e.$detailContainer,F=e.getRapidViewIdCallback,S=e.loadIssueDetailCallback,T=e.getInlineEditableFieldsCallback,D=e.getIssueIdCallback,A=e.getIssueKeyCallback,t(),u()},loadIssueToEditor:function(){C&&(p.set("server-view-issue-is-editable",!0),C.loadIssue({id:D(),key:A()}))},triggerFieldUpdate:function(i,n){var t=C.editIssueController,s=e.find(t.getFields().models,function(e){return e.id===i});s&&(t.getIssueEventBus().triggerPanelRendered(s.id,n),s.triggerUpdateRequired())},hasEditsInProgress:function(){return this.getEditsInProgress().length>0},getEditsInProgress:function(){var i=C.editIssueController;return e.union(i.getDirtyEditsInProgress(),i.getEditsInProgress())},destroy:function(){b=null,j=null,H=null,F=null,S=null,T=null,D=null,A=null,g(),f()},getWrappedIssueEditor:function(){return C},_getFieldsData:d,getIssueAttachmentQuery:function(){return H}};return R});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-inline-editable', location = 'includes/js/rapid/ui/detail/editable/DetailViewInlineEditor.js' */
define("jira-agile/rapid/ui/detail/inlineedit/issue-detail-view-inline-editor",["require"],function(e){"use strict";function i(){t(),n(),a(),l(),E.unbind(u(JIRA.Events.ISSUE_REFRESHED)),E.bind(u(JIRA.Events.ISSUE_REFRESHED),c.debounce(r,0))}function t(){D.off(u("click")).on(u("click"),"#commentmodule .issue-activity-sort-link",function(e){e.preventDefault();var i=g(e.currentTarget).attr("href");g.get(i).done(function(){R(null,v.COMMENTS_CHANGED)})}),E.unbind(u(JIRA.Events.UNLOCK_PANEL_REFRESHING)),E.bind(u(JIRA.Events.UNLOCK_PANEL_REFRESHING),function(e,i){"addcommentmodule"===i&&R(null,v.COMMENTS_CHANGED)})}function n(){D.off(u("focus")).on(u("focus"),".ghx-estimate input",function(){var e=D.find(".ghx-estimate"),i=e.find(".ghx-estimate-scope-warning");if("ACTIVE"===S()&&0===i.length){i=g('<div class="ghx-estimate-scope-warning"></div>'),i.text("Sprint scope will be affected by this action.");var t=e.find(".ghx-editing");0===t.length&&(t=e.find(".editable-field.active .field-group")),t.append(i)}})}function a(){E.bind(f.INLINE_EDIT_STARTED,function(e,i,t,n){T.isTimeTrackingField(i)&&(n.find(".error").length||I.BlurTriggers.Default(i,T.getFieldFromContainer(i,n)))})}function l(){E.unbind(u(JIRA.Events.NEW_CONTENT_ADDED)),E.bind(u(JIRA.Events.NEW_CONTENT_ADDED),function(e,i,t){if(t===JIRA.CONTENT_ADDED_REASON.panelRefreshed&&h.indexOf(i.attr("id"))>=0){var n=c.any(i.find(".attachment-content"),function(e){return c.isNull(g(e).data("issue-id"))});n&&(GH.RapidBoard.State.isPlanMode()?R(null,v.ATTACHMENTS_CHANGED):(GH.windowActivityNotifier.trigger("blur"),R(null,v.ATTACHMENTS_CHANGED)))}})}function r(){s()}function s(){JIRA.trigger(JIRA.Events.NEW_CONTENT_ADDED,[g("#attachmentmodule"),A.panelRefreshed])}function d(e){e.find("#commentmodule .activitymodule-link.issue-comment-action").attr("target","_blank")}function u(e){return e+"."+o}var o="agileDetailViewInlineEditableEventNamespace",c=e("underscore"),g=e("jquery"),E=e("jira/util/events"),f=e("jira/components/issueeditor/eventtypes"),m=e("jira-agile/rapid/ui/detail/inlineedit/dialogsoverrider"),I=e("jira/components/issueeditor/inlineeditutils"),p=e("jira/components/issueviewer/legacy/issuefieldutil"),N=e("jira-agile/rapid/ui/detail/inlineedit/issue-editor-wrapper"),A=e("jira/util/events/reasons"),T=e("jira-agile/rapid/ui/detail/inlineedit/timetracking-fields-helper"),v=e("jira-agile/rapid/ui/detail/inlineedit/details-view-reload-reason"),h=["attachment_thumbnails","file_attachments"],D=null,_=null,R=null,b=null,C=null,S=null,k={init:function(e){N.init(e),D=e.$detailContainer,_=e.getRapidViewIdCallback,R=e.loadIssueDetailCallback,b=e.getIssueIdCallback,C=e.getIssueKeyCallback,S=e.getIssueSprintStatusCallback,m.init(R),i()},loadIssueToEditor:N.loadIssueToEditor,triggerFieldUpdate:N.triggerFieldUpdate,getFieldSelector:p.getFieldSelector,hasEditsInProgress:N.hasEditsInProgress,getEditsInProgress:N.getEditsInProgress,getIssueAttachmentQuery:N.getIssueAttachmentQuery,_issueEditorWrapper:N,fixUpDetailView:d,destroy:function(){_=null,R=null,b=null,C=null,S=null,m.destroy(),N.destroy()},registerListenersForTab:function(e,i){switch(e){case"comment":d(i),t();break;case"header":n(),a();break;case"attachment":l(),s();break;case"details":N.loadIssueToEditor()}}};return k});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-inline-editable', location = 'includes/js/rapid/ui/detail/editable/DialogsOverrider.js' */
define("jira-agile/rapid/ui/detail/inlineedit/dialogsoverrider",["require"],function(i){"use strict";function e(i){return a.DIALOG_OVERRIDE_LIST.indexOf(i)!==-1}var n=i("jira/util/events"),t=i("jquery"),o=i("jira-agile/rapid/ui/detail/inlineedit/details-view-reload-reason"),d=GH.DetailsObjectFactory.getDetailsModel(),a={};a.DIALOG_OVERRIDE_LIST=["delete-attachment-dialog","delete-issue-link-dialog","edit-comment","delete-comment-dialog","assign-to-me-link-handler","assign-dialog","link-issue-dialog"];var l=null;return a.init=function(i){"function"!=typeof l&&(l=function(n,t,a){var l=a&&e(a.options.id);l&&(a._performRedirect=function(){this.redirected=!1},a.options.onDialogFinished=function(){i(null,o.REASON_FOR_DIALOG[a.options.id]),AJS.$(GH).trigger("issueUpdated",{issueId:d.viewData.id,source:"detailView"}),a.hide()})},n.bind("Dialog.show",l),n.bind("Dialog.hide",function(i,e,n){t(".aui-blanket").remove()}))},a.destroy=function(){n.unbind("Dialog.show",l),l=null},a});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-inline-editable', location = 'includes/js/rapid/ui/detail/editable/TimeTrackingFieldsHelper.js' */
define("jira-agile/rapid/ui/detail/inlineedit/timetracking-fields-helper",["require"],function(e){"use strict";function i(e){return e===o?l:e===l?o:void 0}function t(e){return e===o?T:e===l?g:void 0}var n,r=e("underscore"),a=e("jquery"),c=e("jira/components/issueviewer/legacy/issuefieldutil"),l="timeoriginalestimate",o="timeestimate",s="timetracking_targetsubfield",u=[l,o],d="timetracking",g="timetracking_originalestimate",T="timetracking_remainingestimate",m={_visibleForTesting:{ORIGINAL_TIME_ESTIMATE:l,REMAINING_TIME_ESTIMATE:o,TARGET_FIELD_PARAM_NAME:s,ORIGINAL_ESTIMATE_FORM_PARAM_ID:g,REMAINING_ESTIMATE_FORM_PARAM_ID:T}};return m.getFieldFromContainer=function(e,i){if(this.isTimeTrackingField(e))return i.find("#"+t(e))},m.specifyWhichFieldToSave=function(e,l,o){var u,d=a(c.getFieldSelector(e)),g=a(c.getFieldSelector(i(e)));if(0!==g.length)u=0!==g.find(".ghx-fa").length;else{var T=this.getFieldFromContainer(i(e),d);u=r.isEmpty(T.val())}u&&!r.contains(o,i(e))?delete l[t(i(e))]:(l[s]=t(e),n=!0)},m.removeOtherTrackingField=function(e,t){return n?r.reject(t,function(t){return m.isTimeTrackingField(e)&&t.id===i(e)}):t},m.getServerFieldId=function(){return d},m.isTimeTrackingField=function(e){return r.contains(u,e)},m});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-inline-editable', location = 'includes/js/rapid/ui/detail/editable/EditableDetailsViewReloader.js' */
define("jira-agile/rapid/ui/detail/inlineedit/details-view-reloader",["require"],function(e){"use strict";function i(e,i,a,d){return function(l){if(!n.isUndefined(s.viewData)&&!n.isNull(s.viewData))if(s.viewData.tabs.defaultTabs=n.map(s.viewData.tabs.defaultTabs,function(e){var i=n.findWhere(l.defaultTabs,{tabId:e.tabId});return i?i:e}),n.isUndefined(a)||n.isUndefined(d)||!n.isFunction(d)){var u=t("#ghx-detail-issue");if("header"===i)e.renderDetailsHeaderFields(s.viewData,u,r.opts);else{var o={tabs:{defaultTabs:l.defaultTabs}},D=e.buildTabs(o),E=u.find("#ghx-detail-nav");e.renderTabsContent(D,u.find(".ghx-detail-nav-menu"),E),r.registerListenersForTab(i,E)}GH.DetailsViewScrollTracker.afterDetailsViewLoaded({issueId:s.viewData.id})}else d(a)}}function a(e){var i=new AJS.$.Deferred,a={rapidViewId:r.rapidViewId,issueIdOrKey:r.selectedIssueKey,loadSubtasks:r.opts.showSubtaskTab};return"attachment"!==e||n.isUndefined(r.getAttachmentViewQuery)||(a=n.extend(a,r.getAttachmentViewQuery())),GH.Ajax.get({url:"/xboard/issue/details/"+e,data:a},"detailView/"+e).done(function(e){i.resolveWith(null,[e])}),i.promise()}var t=e("jquery"),n=e("underscore"),d=e("jira-agile/rapid/ui/detail/inlineedit/details-view-reload-reason"),r=GH.DetailsView,s=GH.DetailsObjectFactory.getDetailsModel(),l=["details","header","description"],u={};u[d.HEADER_FIELD_CHANGED]=l,u[d.DETAILS_FIELD_CHANGED]=l,u[d.LINKED_ISSUES_CHANGED]=l,u[d.LINKED_ISSUE_CREATED_AND_COMMENTED]=n.union(l,["comment"]),u[d.DESCRIPTION_CHANGED]=l,u[d.ATTACHMENTS_CHANGED]=["attachment"],u[d.COMMENTS_CHANGED]=["comment"],u[d.SUBTASKS_CHANGED]=n.union(["sub_tasks"],l),u[d.VERSION_PANEL_CHANGED]=l,u[d.EPIC_PANEL_CHANGED]=l,u[d.ISSUE_ASSIGNED_AND_COMMENTED]=n.union(l,["comment"]);var o={reload:function(t,d,r){if(u[t]){var s=u[t],l=e("jira-agile/rapid/ui/detail/inlineedit/inline-editable-details-field-renderer");n.each(s,function(e){a(e).done(i(l,e,d,r))})}}};return o});;
;
/* module-key = 'com.pyxis.greenhopper.jira:gh-rapid-inline-editable', location = 'includes/js/rapid/ui/detail/editable/EditableDetailsViewReloadReason.js' */
define("jira-agile/rapid/ui/detail/inlineedit/details-view-reload-reason",["require"],function(E){"use strict";var D=E("underscore"),_=GH.DetailsObjectFactory.getDetailsModel(),N={HEADER_FIELD_CHANGED:"HEADER_FIELD_CHANGED",DETAILS_FIELD_CHANGED:"DETAILS_FIELD_CHANGED",DESCRIPTION_CHANGED:"DESCRIPTION_CHANGED",LINKED_ISSUES_CHANGED:"LINKED_ISSUES_CHANGED",LINKED_ISSUE_CREATED_AND_COMMENTED:"LINKED_ISSUE_CREATED_AND_COMMENTED",ATTACHMENTS_CHANGED:"ATTACHMENTS_CHANGED",COMMENTS_CHANGED:"COMMENTS_CHANGED",SUBTASKS_CHANGED:"SUBTASKS_CHANGED",VERSION_PANEL_CHANGED:"VERSION_PANEL_CHANGED",EPIC_PANEL_CHANGED:"EPIC_PANEL_CHANGED",ISSUE_ASSIGNED_AND_COMMENTED:"ISSUE_ASSIGNED_AND_COMMENTED"},A={description:N.DESCRIPTION_CHANGED,summary:N.HEADER_FIELD_CHANGED,timeestimate:N.HEADER_FIELD_CHANGED,timeoriginalestimate:N.HEADER_FIELD_CHANGED};return D.extend(N,{REASON_FOR_DIALOG:{"delete-attachment-dialog":N.ATTACHMENTS_CHANGED,"delete-issue-link-dialog":N.LINKED_ISSUES_CHANGED,"edit-comment":N.COMMENTS_CHANGED,"delete-comment-dialog":N.COMMENTS_CHANGED,"link-issue-dialog":N.LINKED_ISSUE_CREATED_AND_COMMENTED,"delete-issue-dialog":N.SUBTASKS_CHANGED,"assign-to-me-link-handler":N.DETAILS_FIELD_CHANGED,"assign-dialog":N.ISSUE_ASSIGNED_AND_COMMENTED},getReloadReasonForChangedField:function(E){var D=A[E];return D?D:_.isFieldInSection(E,"estimate")||_.isFieldInSection(E,"tracking")?N.HEADER_FIELD_CHANGED:N.DETAILS_FIELD_CHANGED}})});;