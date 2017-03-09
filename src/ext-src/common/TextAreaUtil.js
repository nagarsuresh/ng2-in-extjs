Ext.define('common.TextAreaUtil', {
    singleton: true,

    styleProps: [
        'direction',
        'boxSizing',
        'width',
        'height',
        'overflowX',
        'overflowY',

        'borderTopWidth',
        'borderRightWidth',
        'borderBottomWidth',
        'borderLeftWidth',
        'borderStyle',

        'paddingTop',
        'paddingRight',
        'paddingBottom',
        'paddingLeft',

        'fontStyle',
        'fontVariant',
        'fontWeight',
        'fontStretch',
        'fontSize',
        'fontSizeAdjust',
        'lineHeight',
        'fontFamily',

        'textAlign',
        'textTransform',
        'textIndent',
        'textDecoration',

        'letterSpacing',
        'wordSpacing',

        'tabSize',
        'MozTabSize'
    ],



    getCaretPosition: function (textArea) {
        var me = this;

        var selectionStartIndex = textArea.selectionStart;

        var el = document.querySelector('#text-area-duplicate-div');
        if (el) {
            el.parentNode.removeChild(el);
        }

        var div = document.createElement('div');
        div.id = 'text-area-duplicate-div';
        document.body.appendChild(div);

        var style = div.style;
        var computed = window.getComputedStyle ? getComputedStyle(textArea) : textArea.currentStyle;  // currentStyle for IE < 9

        style.whiteSpace = 'pre-wrap';
        style.wordWrap = 'break-word';

        // position off-screen
        style.position = 'absolute';

        // style.visibility = 'hidden';

        me.styleProps.forEach(function (prop) {
            style[prop] = computed[prop];
        });

        if (Ext.browser.is.Firefox) {
            if (textArea.scrollHeight > parseInt(computed.height))
                style.overflowY = 'scroll';
        } else {
            style.overflow = 'hidden';
        }

        div.textContent = textArea.value.substring(0, selectionStartIndex);

        var span = document.createElement('span');
        span.textContent = textArea.value.substring(selectionStartIndex) || '.';
        div.appendChild(span);

        var coordinates = {
            top: span.offsetTop + parseInt(computed['borderTopWidth']),
            left: span.offsetLeft + parseInt(computed['borderLeftWidth'])
        };

        span.style.backgroundColor = '#aaa';
        document.body.removeChild(div);

        return coordinates;
    }

});