/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtDemo.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ExtDemo.view.main.MainController',
        'ExtDemo.view.main.MainModel',
        'ExtDemo.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    items: [{
            xtype: 'mainlist'
        
    }]
});
