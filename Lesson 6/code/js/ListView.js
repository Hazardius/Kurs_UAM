UAM.ListView = function (listView) {
    "use strict";
    
    UAM.EventEmitter.call(this);
    this.list = listView;

    this.elementClicked = function (event) {
        var clickedElement = event.target;
        while (clickedElement.tagName !== "LI") {
            clickedElement = clickedElement.parent;
        }
        this.emit("updateFooterSelectedItems", clickedElement);
    }.bind(this);

    this.list.addEventListener("click", this.elementClicked);
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.addELement = function (list, element) {
    "use strict";

	list.appendChild(element);
};