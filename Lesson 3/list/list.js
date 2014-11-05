(function (global) {
  if (!global.UAM) {
    global.UAM = {};
    global.UAM.elements = [];
  }
  
  var generateFunction = function(elementName, arrayOfNames) {
    return function () {
        var index = arrayOfNames.indexOf(elementName);
        arrayOfNames.splice(index, 1);
        reorganizeUL(global.UAM.elements);
      };
  };
  
  var reorganizeUL = function (arrayOfNames) {
    var UL = document.getElementById("UL");

    while (UL.hasChildNodes()) {
        UL.removeChild(UL.lastChild);
    }

    for (var i in arrayOfNames) {
      var item = document.createElement('li');
      item.appendChild(document.createTextNode(arrayOfNames[i]));
      var elementName = item.textContent;
      global.console.log(elementName);
      button = document.createElement("button");
      button.appendChild(document.createTextNode("Delete"));
      button.onclick = generateFunction(elementName, arrayOfNames);
      item.appendChild(button);
      UL.appendChild(item);
    }
  };
  
  global.UAM.newel = function (elementName) {
    if (global.UAM.elements.indexOf(elementName) == -1) {
      global.UAM.elements.push(elementName);
      reorganizeUL(global.UAM.elements);
    } else {
      global.console.log("OMG! PROBLEM! VALUE ALREADY EXISTS!");
    };
  };

}(window));