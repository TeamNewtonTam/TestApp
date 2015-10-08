'use strict';

app.promoView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_promoView
// END_CUSTOM_CODE_promoView
(function(parent) {
    var promoViewModel = kendo.observable({
        fields: {
            search: '',
            promoDesc: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('promoViewModel', promoViewModel);
})(app.promoView);

// START_CUSTOM_CODE_promoViewModel
// END_CUSTOM_CODE_promoViewModel