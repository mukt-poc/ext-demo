Ext.define('ExtDemo.store.Books', {
    extend: 'Ext.data.Store',

    alias: 'store.books',

    requires : ['ExtDemo.override.Ajax'],
    
    model: 'ExtDemo.model.Book',
    autoLoad : true,
    proxy: {
        type: 'ajax',
        url:'https://cors-anywhere.herokuapp.com/https://macstories.net/feed/json',
        method : "GET",
        useDefaultXhrHeader: false,
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        actionMethods : {
            read: 'GET'
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});