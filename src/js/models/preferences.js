(function(L) {
  'use strict';
  L.models.Preferences = Backbone.Model.extend({
    autoFetch: true,
    defaults: {
      shrinkNotes: false,
      expandVariables: true,
      hideToolbar: false,
      openHotkey: '',
      notificationTimeout: 5,
      showSavedSearches: true
    },
    /**
     * Specify user settable preferences here. The view will automatically
     * format/display them.
     *
     * Format:
     *
     *   <var_name>: {
     *     type: '<var_type>'
     *     description: '<var_description>'
     *   }
     *
     * where type is one of: boolean, number, hotkey, text
     **/
    schema: {
      /* Not used
      expandVariables: {
          type: 'boolean',
          description: 'Expand variables' // TODO: Add help.
      },
      openHotkey: {
          type: 'hotkey',
          description: 'Open Hotkey'
      },
      notificationTimeout: {
          type: 'number',
          description: 'Notification Timeout (s)'
      },
      */
      shrinkNotes: {
        type: 'boolean',
        description: 'Collapse Notes' // TODO:Better desc
      },
      showSavedSearches: {
        type: 'boolean',
        description: 'Show saved search bar'
      },
      hideToolbar: {
        type: 'boolean',
        description: 'Hide text format buttons'
      }
    },
    // Singleton
    url : '/preferences',
    isNew: function() {
      return false;
    },
    initialized: function() {
      this.on('change', _.mask(this.save), this);
    }
  });
})(ListIt);
