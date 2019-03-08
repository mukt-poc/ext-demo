/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        var details = Ext.create('ExtDemo.view.main.Detail',{
            title : record.get('title'),
            html : record.get('content_html')
        });
        details.show();
    },

    control : {
        'mainlist' : {
            rowdblclick  : 'onItemSelected'
        }
    }
});
