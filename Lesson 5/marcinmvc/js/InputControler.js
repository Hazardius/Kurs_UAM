InputControler = function (inputView, model) {
    "use strict";

    var add = function (element) {
        model.addToListView(element);
    };

    inputView.on("addElement", add);
};
