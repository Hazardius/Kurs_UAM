UAM.FooterView = function (footerView) {
    "use strict";

    UAM.EventEmitter.call(this);
    this.allElements = 0;
    this.selectedItems = 0;

    this.updateFooterView = function () {
        footerView.textContent = this.selectedItems + '/' + this.allElements;
    }.bind(this);

    this.updateFooterView();
    
    this.updateAllItems = function (data) {
        this.allElements = data.length;
        this.updateFooterView();
    };

    this.updateSelectedItems = function (selectedItems) {
        this.selectedItems = selectedItems;
        this.updateFooterView();
    };
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);
