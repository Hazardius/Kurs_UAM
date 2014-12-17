SaveControler = function (saveView, model) {
    "use strict";

    var save = function () {
        model.saveList();
    };

    saveView.on("saveElement", save);
};
