/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ExtDemo.Application', {
    extend: 'Ext.app.Application',

    name: 'ExtDemo',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        Ext.Ajax.setUseDefaultXhrHeader(false);
        Ext.Ajax.useDefaultXhrHeader = false;

// Can also be specified in the request options
        Ext.Ajax.cors = true;

    }
});
