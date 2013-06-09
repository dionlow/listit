(function(L) {
    'use strict';
    L.models.Preferences = Backbone.Model.extend({
        defaults: {
            shrinkNotes: true,
            expandVariables: true,
            openHotkey: '',
            notificationTimeout: 5,
            toolbarItems: [
                'mode',
                'bold',
                'italic',
                'underline',
                'foreground',
                'link'
            ]
        },
        // Specify user settable preferences here. The view will automatically
        // format/display them.
        schema: {
            shrinkNotes: {
                type: 'boolean',
                description: 'Collapse Notes' // TODO:Better desc
            },
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
            }
        },
        // Singleton
        url : '/preferences',
        isNew: function() {
            return false;
        },
        initialized: function() {
            this.on('change', this.save, this);
        },
        toggleShrink: function() {
            this.set('shrinkNotes', !this.get('shrinkNotes'));
        }
    });
})(ListIt);
