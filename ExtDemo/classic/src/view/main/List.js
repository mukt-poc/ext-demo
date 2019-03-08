/**
 * This view is an example list of people.
 */
Ext.define('ExtDemo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ExtDemo.store.Books'
    ],

    title: 'Books Self',

    store: {
        type: 'books'
    },

    height: 590,
		 store: Ext.create("ExtDemo.store.Books"), 

        columns : [{
            text : 'Published Date',
            dataIndex : 'date_published',
            width : "20%"
        },{
            text : 'Author',
            dataIndex : 'author.name',
            width : "20%"
        },{
            text : 'Title',
            dataIndex : 'title',
            width : "60%"
        },{
            hidden:true,
            dataIndex : 'content_html'
        }],
        
    viewConfig: {
        enableTextSelection: true
    }
    
});
