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

    height: 200,
		//store : 'Objects',
        store: Ext.create("ExtDemo.store.Books"), 

        columns : [{
            text : 'Published Date',
            dataIndex : 'date_published'
        },{
            text : 'Author',
            dataIndex : 'author'
        },{
            text : 'Title',
            dataIndex : 'title'
        },{
            hidden:true,
            dataIndex : 'content_html'
        }],
        plugins: [
            {
                ptype: 'rowexpander',
                rowBodyTpl: [
                    '<table>',
                    '<tpl foreach=".">',
                    '<tr><td>{$}</td><td>{.}</td></tr>',
                    '</tpl>',
                    '</table>'
                ]
            }
        ],
    viewConfig: {
        enableTextSelection: true
    }
    
});
