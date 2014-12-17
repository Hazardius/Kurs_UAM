UAM.utils = {
    inherits: function (Parent, Child) {
        "use strict";

        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
    }
};
