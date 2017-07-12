// pause vimeo videos
$(document).find("iframe").each(function (i) {
  this.contentWindow.postMessage(JSON.stringify(command), "*");
});

// pause youtube videos
$(document).find("iframe").each(function (i) {
  this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
});


// boilerplate for Modul MVVC
var PokeApp = (function() {
  'use strict';
  // placeholder for cached DOM elements and global variables of modul
  var DOM = {}
    , globalVariable = null;

  /* =================== private methods ================= */
  // cache DOM elements
  function cacheDom() {
    DOM.$button = $("button");
  }

  // bind events
  function bindEvents() {
    DOM.$button.on("click", _onStartButton);
  }

  // set element click function
  function _onStartButton() {
    doStuff();
    // do more stuff
  }

  // functions

  function doStuff() {
    // do stuff
  }


  /* =================== public methods ================== */
  // main init method
  function init() {
    cacheDom();
    bindEvents();
  }

  /* =============== export public methods =============== */
  return {
    init: init
  };
}());
