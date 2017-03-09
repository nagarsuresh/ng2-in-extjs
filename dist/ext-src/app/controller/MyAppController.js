Ext.define('MyApp.controller.MyAppController', {
    extend: 'Ext.app.Controller',
    views: ['MainView', 'CenterContainer'],
    stores: [],
    init: function () {
        var me = this;

        me.control({
            '#homeButton': {
                click: me.onHomeClick
            },
            '#githubButton': {
                click: me.onGitHubButtonClick
            },
            '#centerComponent': {
                afterrender : me.onAfterNg2App1Render
            },
            '#eastComponent': {
                afterrender : me.onAfterNg2App2Render
            }
        });

        me.callParent(arguments);
    },


    onHomeClick: function () {
        document.location.href = "https://snagar78.github.io";
    },
    onGitHubButtonClick: function () {
        document.location.href = "https://github.com/snagar78/ng2-in-extjs";
    },
    onAfterNg2App2Render: function () {
        globalObservable.next('module2');
    },
    onAfterNg2App1Render: function () {
       globalObservable.next('module1'); 
    }
    
});