$(document).ready(function(){

  var listItems = $(".content .tutorial .textbox ul").find('li');
  var myArray = map(listItems, getText);
  console.log(listItems.length);

function map(HTMLarray, fn) {
    var ret = [], i = -1, len = HTMLarray.length;
    while (++i < len) ret[i] = fn(HTMLarray[i]);
    console.log(ret[1]);
    console.log("map function works");
    return ret;
}

function getText(node) {
    if (node.nodeType === 3) return node.data;
    var txt = '';
    if (node = node.firstChild) do {
        txt += getText(node);
    } while (node = node.nextSibling);
    console.log(txt);
    console.log("getText function works");
    return txt;
}
  var clickCounter = 0;
  $(".content .tutorial .inputbox .inputbutton").click(function () {
    clickCounter += 1;
      var userText = $(".content .tutorial .inputuser").val();
      console.log(userText);
      if (clickCounter <= 4){

        myArray.push(userText);
      }
      else {
        myArray.pop();
        myArray.push(userText);
      }
      var myNum = myArray.length;
      console.log(myNum);
      var htmlList = "";
      for (var i = 0; i < myNum; i++){
        htmlList +=  "<li>" + myArray[i] + "</li>";
        console.log(htmlList);
        console.log("refresh function works");
      }

      $(".content .tutorial .textbox .namelist").html(htmlList);
      console.log("add name function works");
    });

});
