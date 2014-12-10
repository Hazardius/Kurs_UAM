UAM.ListView = function (listView) {

    UAM.EventEmitter.call(this);
    this.list = listView;

    this.add = function (element) {
        //Dodawanie elementu do listy, event przekazywany do ListCtrl
        this.emit("addingElement", element);
    }
    this.add.bind(this);

    this.elementClicked = function (event) {
        var clickedElement = event.target;
        while(clickedElement.tagName !== "LI") {
            clickedElement = clickedElement.parent;
        }
        this.emit("updateFooterSelectedItems", clickedElement);
    };

    //Klikniecie w element listy
    this.list.addEventListener("click", this.elementClicked.bind(this));

};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.addELement = function (list, element) {
	list.appendChild(element);
};