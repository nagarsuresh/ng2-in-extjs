Ext.define('MyApp.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainView',
    layout: {
        type: 'border'
    },
    defaults: {
    },
    items: [
        {
            region: 'north',
            split: true,
            title : 'North Component'
        },
        {
            region: 'east',
            itemId : 'eastComponent',
            title: 'Angular2 Clarity Cards List',
            width: 350,
            collapsible: true,
            split: true,
            html: '<app2-root></app2-root>'
        },
        {
            region: 'center',
            title: 'Center Panel',
            split: true,
            xtype: 'centerContainer'
        },
        {
            region: 'west',
            split: true,
            title: 'West',
            width: 100
        }
    ]
});