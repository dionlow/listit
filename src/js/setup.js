(function(L) {

  'use strict';

  var barr = new Barrier();
  if (DEBUG_MODE && window.console && window.console.time) {
    window.console.timeEnd('load');
    window.console.time('startup');
  }
  _.each([
    function() {
      L.setStatus('setup');

      debug("setup::begin");
      L.lvent.trigger('setup:before', L, barr);
    },
    function() {
      debug("setup::migrate::begin");
      L.lvent.trigger('setup:migrate:before', L, barr);
    },
    function() {
      L.lvent.trigger('setup:migrate', L, barr);
    },
    function() {
      L.lvent.trigger('setup:migrate:after', L, barr);
      debug("setup::migrate::end");
    },
    function() {
      debug("setup::models::begin");
      L.lvent.trigger('setup:models:before', L, barr);
    },
    function() {
      L.lvent.trigger('setup:models', L, barr);
    },
    function() {
      L.lvent.trigger('setup:models:after', L, barr);
      debug("setup::models::end");
    },
    function() {
      barr.aquire();
      $(function() {
        debug("setup::views::begin");
        L.lvent.trigger('setup:views:before', L, barr);
        barr.release();
      });
    },
    function() {
      L.lvent.trigger('setup:views', L, barr);
    },
    function() {
      L.lvent.trigger('setup:views:after', L, barr);
      debug("setup::views::end");
    },
    function() {
      L.lvent.trigger('setup:after', L, barr);
      debug("setup::end");
    }, function() {
      L.setStatus('ready');
      if (DEBUG_MODE && window.console && window.console.time) {
        window.console.timeEnd('startup');
      }
    }
  ], function(fn) {
    barr.wait(fn);
  });
})(ListIt);
