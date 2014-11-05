(function (global) {
  if (!global.UAM) {
    global.UAM = {};
    global.UAM.elements = [];
  }
  
  var reorganizeUL = function (arrayOfNames) {
    var UL = document.getElementById("UL");

    while (UL.hasChildNodes()) {
        UL.removeChild(UL.lastChild);
    }

    for (var i in arrayOfNames) {
      var item = document.createElement('li');
      item.appendChild(document.createTextNode(arrayOfNames[i]));
      button = document.createElement("button");
      button.onclick = function () {
        var index = arrayOfNames.indexOf(elementName);
        arrayOfNames.splice(index);
        reorganizeUL(global.UAM.elements);
      };
      item.appendChild(button);
      UL.appendChild(item);
    }
  };
  
  global.UAM.newel = function (elementName) {
    if (global.UAM.elements.indexOf(elementName) == -1) {
      global.UAM.elements.push(elementName);
      reorganizeUL(global.UAM.elements);
      /*var UL = document.getElementById("UL");

      while (UL.hasChildNodes()) {
          UL.removeChild(UL.lastChild);
      }

      for (var i in global.UAM.elements) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(global.UAM.elements[i]));
        button = document.createElement("button");
        button.onclick = function () {
          var index = global.UAM.elements.indexOf(elementName);
          global.UAM.elements.splice(index);
        };
        item.appendChild(button);
        UL.appendChild(item);
      }*/
    } else {
      global.console.log("OMG! PROBLEM! VALUE ALREADY EXISTS!");
    };
    global.console.log(global.UAM);
  };
  
  global.UAM.delel = function (elementName) {
  };

}(window));