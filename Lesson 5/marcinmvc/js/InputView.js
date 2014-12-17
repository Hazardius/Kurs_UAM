UAM.InputView = function (inputView) {
    "use strict";

    UAM.EventEmitter.call(this);

    this.buttonAdd = document.querySelector('#btn');
    this.inputElement = document.querySelector('#inputValue');

    this.add = function () {
        var content = this.inputElement.value;
        if (content) {
            var newElement = document.createElement("li");
            newElement.textContent = content;
            this.inputElement.value = "";
            this.emit("addElement", newElement);
        }
    }.bind(this);

    this.buttonAdd.addEventListener("click", this.add);

};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);
