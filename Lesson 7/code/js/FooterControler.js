FooterControler = function (footerView, model) {
    "use strict";

    var update = function (element) {
            if (model.checkItem(element)) {
                element.className = element.className + "active_element";
            } else {
                element.className = element.className.replace("active_element", "");
            }
            footerView.updateSelectedItems(model.selectedItems.length);
        },
        updateFooter = function (data) {
            footerView.updateAllItems(data);
        };

    model.on("updateFooterSelectedItems", update);

    model.on("elementAdded", updateFooter);
};
