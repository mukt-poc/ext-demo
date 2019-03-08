/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('ExtDemo.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'ExtDemo.view.main.MainController',
        'ExtDemo.view.main.MainModel',
        'ExtDemo.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    
    items: [
        {
            title: 'Home',
            items: [{
                xtype: 'mainlist'
            }]
        }]
});
