function initialize(){
  // jsAjax();
  jQueryAjax();
};

//demo of AJAX using plain javascript
function jsAjax(){
  //instatiate an ajax request object
  var ajaxRequest = new XMLHttpRequest();

  //create an event handler for the request
  ajaxRequest.onreadystatechange = function(){
    if (ajaxRequest.readyState == 4){
      //call a callback fucntion and pass the data to it
      console.log(ajaxRequest.readyState);
      jsCallback(ajaxRequest.response);
    };
  };

  //open ajax request
  ajaxRequest.open('GET','data/MegaCities.geojason', true);

  //set data type
  ajaxRequest.responseType = 'json';

  //send the call
  ajaxRequest.send();
};

function jsCallback(data){
  console.log(data);
  var htmlString = "<h3>javascript AJAX response text:</h3>";
  htmlString += JSON.stringify(data);
  var p = document.createElement("p");
  p.innerHTML = htmlString;
  document.getElementById("mydiv").appendChild(p);
};

//ajax using jquery
function jQueryAjax(){
  // $.ajax("data/MegaCities.geojson", {
  //   dataType: "json",
  //   success: jQueryCallback
    //another way to do this
    // success: funtion(data){
    //   jQueryCallback(data);
    // }
  // });

  $.getJSON("data/MegaCities.geojson", jQueryCallback);
};

function jQueryCallback(data){
  console.log(data);
  var htmlString = "<h3>javascript AJAX response text:</h3>";
  htmlString += JSON.stringify(data);
  $("#mydiv").append("<p>"+htmlString+"</p>");
};

window.onload = initialize;
