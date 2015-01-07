UAM.Model = function () {
    "use strict";

    UAM.EventEmitter.call(this);
    this.data  = [];
    this.selectedItems = [];

    this.add = function (data, element) {
        this.data.push(element);
        this.emit("elementAdded", this.data);
    }.bind(this);
    
    this.addToListView = function (element) {
        this.emit("listElementAdded", element);
    }.bind(this);
    
    this.checkItem = function (item) {
        if (this.selectedItems.indexOf(item) < 0) {
            this.selectedItems.push(item);
            return true;
        } else {
            this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            return false;
        }
    }.bind(this);
    
    this.saveList = function () {
        var myList = [],
            httpRequest = new XMLHttpRequest(),
            index = 0;
        this.data.forEach(function(entry) {
            myList.push({
                "id": index,
                "value": entry.textContent
            });
        });
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState !== 4) {
                return;
            }

            if (httpRequest.status !== 200) {
                window.alert("Not a 200!");
                return;
            }
        };
        httpRequest.open('POST', '/api/todos');
	    httpRequest.send(JSON.stringify(myList));
    }.bind(this);

    this.updateFooter = function (element) {
        this.emit("updateFooterSelectedItems", element);
    }.bind(this);

};

UAM.utils.inherits(UAM.EventEmitter, UAM.Model);

UAM.Model.prototype.update = function (id, data) {
    "use strict";
};
