window.addEventListener('DOMContentLoaded', function () {
    "use strict";

	var model = new UAM.Model(),
        inputView = new UAM.InputView(document.querySelector('#inputview')),
        listView = new UAM.ListView(document.querySelector('#listview')),
        footerView = new UAM.FooterView(document.querySelector('#footerview')),
        saveView = new UAM.SaveView(document.querySelector('#saveview'));

	new InputControler(inputView, model);
	new ListControler(listView, model);
	new FooterControler(footerView, model);
    new SaveControler(saveView, model);
    
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState !== 4 ) {
            return;
        }
        
        if (httpRequest.status !== 200) {
            throw new Error('Request failed');
        }
        
        JSON.parse(httpRequest.responseText).forEach(function(entry) {
            var newElement = document.createElement("li");
            newElement.textContent = entry.value;
            inputView.emit("addElement", newElement);
        });
    };
	httpRequest.open('GET', '/api/todos');
    httpRequest.send();
	//httpRequest.open('POST', '/api/todos');
	//httpRequest.send(JSON.stringify([{id: 0, value: 'test'}, {id: 1, value: 'test222'}]));
});
