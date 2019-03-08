Ext.define('ExtDemo.model.Book', {
    extend: 'Ext.data.Model',
    fields: [
              'date_published',
              'author',
             {"name": 'author.name',"mapping" : 'author.name', "type":"string"},
              'title',
              'content_html'
            ]
});