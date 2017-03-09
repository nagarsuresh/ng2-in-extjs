Ext.define('MyApp.view.CenterContainer', {
    extend: 'Ext.panel.Panel',
    padding: '10',
    alias: 'widget.centerContainer',
    items: [
        {
            xtype: 'container',
            padding : 10,
            style: {
                'background-color' : '#cdcdcd'
            },
            margin: 10,
            layout: {
                type: 'hbox'
            },
            defaults: {
                xtype: 'button'
            },
            items: [
                {
                    xtype: 'tbfill',
                    flex: 1
                },
                {
                    text: 'HOME',
                    itemId: 'homeButton'
                },
                {
                    xtype: 'tbspacer',
                    width: 10
                },
                {
                    text: 'GitHub Repository',
                    itemId: 'githubButton'
                }
            ]
        },
        {
            xtype: 'component',
            itemId : 'centerComponent',
            html: '<app1-root></app1-root>'
        },

    ]
});