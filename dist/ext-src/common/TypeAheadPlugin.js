Ext.define('common.TypeAheadPlugin', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.typeAheadPlugin',
    tokenStore: null,

    showAutoCompleteTask: null,

    util: null,

    textAreaEl: null,

    init: function (cmp) {
        var me = this;
        if (Ext.isEmpty(cmp)) {
            Ext.Error.raise("Component should be not null");
        }

        //if tokenstore is string, it assumed to be store id
        if (Ext.isString(me.tokenStore)) {
            me.tokenStore = Ext.getStore(me.tokenStore);
        }

        if (me.tokenStore == null) {
            Ext.Error.raise("Token store must be set or not found for " + me.tokenStore);
        }

        if (!cmp.isXType('textarea')) {
            Ext.Error.raise("Component should be of type textarea only!");
        }
        me.setCmp(cmp);

        me.util = common.TextAreaUtil;

        cmp.on('afterrender', Ext.Function.bind(me.initAutoComplete, me));

        me.showAutoCompleteTask = new Ext.util.DelayedTask(Ext.emptyFn);

        me.callParent(arguments);

    },

    initAutoComplete: function (cmp) {
        var me = this;
        me.textAreaEl = cmp.getEl().selectNode('textarea');

        cmp.enableKeyEvents = true;
        cmp.on({
            keydown: {
                fn: me.handleKeyPress,
                scope: me,
                buffer: 500
            },
            specialkey: {
                fn: me.handleSpecialKey,
                scope: me
            }
        });

        me.createDataView();

    },

    createDataView: function () {
        var me = this;

        me.dataView = Ext.create('Ext.view.View', {
            floating: true,
            focusOnToFront: false,
            minWidth: 350,
            maxHeight: 300,
            autoScroll: true,
            hidden: true,
            emptyText: '<div class="auto_complete_list_item">No suggestions found</div>',
            deferEmptyText: false,
            cls: 'auto_complete_list',
            selectedItemCls: 'selected',
            store: me.tokenStore,
            tpl: new Ext.XTemplate(
                '<tpl>',
                '<tpl for=".">',
                '<div class="token_name auto_complete_list_item" href="javascript:void(0)">{token}</div>',
                '</tpl>',
                '</tpl>'
            ),
            itemSelector: '.token_name',
            renderTo: Ext.getBody()
        });


        me.dataView.on('itemclick', function (view, record, item, index, e) {
            me.selectRecord(record);
        });

        me.dataView.on('itemkeydown', function (view, record, item, index, e, eOpts) {
            if (e.getKey() == Ext.event.Event.ESC) {
                me.resetAutoComplete();
            } else {

            }
        });

        me.dataView.getSelectionModel().setSelectionMode('SINGLE');

    },

    handleKeyPress: function (field, kbEvent) {
        var me = this;

        //find current word at the cursor        
        var wordInfo = me.findWordAt(me.textAreaEl.value, me.textAreaEl.selectionStart);
        var word = Ext.String.trim(wordInfo.word);

        console.log("You are at word " + word);

        if (Ext.isEmpty(word)) {
            me.resetAutoComplete();
            return;
        }


        //filter the store for the current word
        me.filterTokenStore(word);

        //show data view..        
        me.showAutoComplete();

    },

    handleSpecialKey: function (field, event) {
        var me = this;
        if (event.getKey() == event.DOWN) {
            if (Ext.isEmpty(me.dataView.getSelectionModel().getSelection())) {
                me.dataView.focusNode(me.tokenStore.getAt(0));
                me.dataView.getSelectionModel().select(0);
            }
        }
    },

    resetAutoComplete: function () {
        var me = this;
        var view = me.dataView;

        if (view.isVisible()) {
            view.getSelectionModel().deselectAll(true);
            view.setVisible(false);
            me.tokenStore.clearFilter();
            me.textAreaEl.focus();
        }
    },

    // handleMouseClick: function (mEvent) {
    //     console.log("Mouse clicked ");
    // },

    showAutoComplete: function () {
        var me = this;

        var bounds = me.getCurrentCursorPosition();
        me.dataView.showAt([bounds.left, bounds.top]);
    },

    getCurrentCursorPosition: function () {
        var me = this;

        var area = me.textAreaEl;
        var coords = me.util.getCaretPosition(area);
        console.log("position - Top:" + coords.top + " Left:" + coords.left);
        var bounds = area.getBoundingClientRect();

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        var top = bounds.top - area.scrollTop + scrollTop + coords.top + 20;
        var left = bounds.left - area.scrollLeft + coords.left;
        return {
            top: top,
            left: left
        }
    },

    filterTokenStore: function (word) {
        var me = this;

        me.tokenStore.clearFilter();
        me.tokenStore.filterBy(function (rec) {
            if (Ext.isEmpty(word)) {
                //				return false;
            }
            return Ext.String.startsWith(rec.get('token').toLowerCase(), word.toLowerCase());
        });
    },


    selectRecord : function (record) {
		var me = this;
		var textArea = me.textAreaEl;

		var wordConfig = me.findWordAt(textArea.value, textArea.selectionStart);
		var contents = textArea.value;

		if (contents.slice(wordConfig.start, wordConfig.end) != record.get('key')) {
			var left = contents.slice(0, wordConfig.start);
			var right = contents.slice(wordConfig.end);

    		textArea.value = left + record.get('token') + '' + right;
			var cursor = wordConfig.start + record.get('token').length + 2;
			textArea.selectionStart = cursor;
			textArea.selectionEnd = cursor;
		}
		textArea.focus();
		me.resetAutoComplete();
	},



    findWordAt: function (str, pos) {
        var me = this;

        str = String(str);
        //discard decimal if we get accidently
        pos = Number(pos) >>> 0;

        var leftPart = str.slice(0, pos);
        var left = leftPart.search(/\b\w+\b$/);
        var rightPart = str.slice(pos);
        var rightMatch = rightPart.match(/^\b\w+\b/);
        var right = -1;

        if (rightMatch && rightMatch[0]) {
            right = rightMatch[0].length;
        }

        if (right < 0) {
            return {
                word: str.slice(left, pos),
                start: left,
                end: pos
            };
        }

        return {
            word: str.slice(left, right + pos),
            start: left,
            end: right + pos
        };

    }


});