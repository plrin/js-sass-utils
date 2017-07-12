// pause vimeo videos
$(document).find("iframe").each(function (i) {
  this.contentWindow.postMessage(JSON.stringify(command), "*");
});

// pause youtube videos
$(document).find("iframe").each(function (i) {
  this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
});
