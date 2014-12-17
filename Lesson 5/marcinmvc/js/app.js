window.addEventListener('DOMContentLoaded', function () {
    "use strict";

	var model = new UAM.Model(),
        inputView = new UAM.InputView(document.querySelector('#inputview')),
        listView = new UAM.ListView(document.querySelector('#listview')),
        footerView = new UAM.FooterView(document.querySelector('#footerview'));

	new InputControler(inputView, model);
	new ListControler(listView, model);
	new FooterControler(footerView, model);
});
