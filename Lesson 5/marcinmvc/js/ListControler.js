ListControler = function (listView, model) {
    "use strict";

    var addElementToList = function (element) {
            listView.addELement(listView.list, element);
            model.add(model.data, element);
        },
        updateFooter = function (element) {
            model.updateFooter(element);
        };

    // Listeners
    model.on("listElementAdded", addElementToList);
    
    listView.on("updateFooterSelectedItems", updateFooter);
};
