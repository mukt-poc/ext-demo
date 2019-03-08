/**
 * This view is an example list of people.
 */
Ext.define('ExtDemo.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'ExtDemo.store.Books'
    ],

    title: 'Book Self',

    
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
});
