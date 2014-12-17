UAM.SaveView = function (saveView) {
    "use strict";

    UAM.EventEmitter.call(this);

    this.buttonSave = document.querySelector('#sbtn');

    this.save = function () {
        this.emit("saveElement");
    }.bind(this);

    this.buttonSave.addEventListener("click", this.save);

};

UAM.utils.inherits(UAM.EventEmitter, UAM.SaveView);
