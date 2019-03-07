Ext.define('ExtDemo.store.Books', {
    extend: 'Ext.data.Store',

    alias: 'store.books',

    requires : ['ExtDemo.override.Ajax'],
    
    model: 'ExtDemo.model.Book',
    
    proxy: {
        type: 'ajax',
        //url:'https://www.macstories.net/feed/json',
        method : "GET",
        actionMethod : 'read',
        api     : {
            read            : 'https://www.macstories.net/feed/json'
        },
        actionMethods : {
            read: 'GET',
            write: 'GET',
            update: 'GET',
            delete: 'GET'
        },
        reader: {
            type: 'json',
            readProperty: 'items'
        }
    }
});