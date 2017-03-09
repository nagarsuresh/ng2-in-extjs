Ext.Loader.setConfig({
    enabled: true,
    paths: {
        common: 'ext-src/common'
    }
});

Ext.application({
    name: 'MyApp',
    controllers: ['MyAppController'],
    appFolder: 'ext-src/app',
    mainView: 'MyApp.view.MainView',
    launch: function () {
    }
});