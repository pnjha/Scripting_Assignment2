var pageCounter = 1;
var comicsContainer = document.getElementById("comicsDisplay");
var isAtLast = 0;
var isAtFirst = 0;
var firstBtn = document.getElementById("firstBtn");
var lastBtn = document.getElementById("lastBtn");
var nextBtn = document.getElementById("nextBtn");
var previousBtn = document.getElementById("previousBtn");
var randomBtn = document.getElementById("randomBtn");

function firstButton() {
  isAtFirst = 1;
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://xkcd.com/1/info.0.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      console.log(ourData);
    } else {
      console.log("Server returned error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

}

function lastButton() {
  isAtLast = 1;
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://xkcd.com/info.0.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      //console.log(ourData);
    } else {
      console.log("Server returned error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
 
}


function nextButton() {
  
  if(isAtLast!=1){
    isAtFirst = 0;
    pageCounter++;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://xkcd.com/'+pageCounter+'/info.0.json');
    ourRequest.onload = function() {
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        //console.log(ourData);
      } else {
        console.log("Server returned error.");
      }
      
    };
  
    ourRequest.onerror = function() {
      console.log("Connection error");
    };
  
    ourRequest.send();
  }
  
  // if(pageCounter > 3) {
  //   btn.classList.add("hide-me");
  // }

}


function previousButton() {
  
  if(isAtFirst!=1){
    isAtLast = 0;
    pageCounter--;
    if(pageCounter==0)
      pageCounter = 1;
    
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://xkcd.com/'+pageCounter+'/info.0.json');
    ourRequest.onload = function() {
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        //console.log(ourData);
      } else {
        console.log("Server returned error.");
      }
      
    };
  
    ourRequest.onerror = function() {
      console.log("Connection error");
    };
  
    ourRequest.send();
  }

}

function randomButton() {
  
  isAtLast = 0;
  isAtFirst = 0;
  
  pageCounter = (pageCounter+19)%47;
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://xkcd.com/'+pageCounter+'/info.0.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      console.log(ourData);
    } else {
      console.log("Server returned error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

}

function firstScreen(){
  
  pageCounter = 1;
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://xkcd.com/'+pageCounter+'/info.0.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      console.log(ourData);
    } else {
      console.log("Server returned error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
}


function renderHTML(data) {
  var htmlString = "";
  
  var elem = document.getElementById('pic');
  if(elem)
    elem.parentNode.removeChild(elem);

  htmlString += "<div id = pic><img src = " + "'" + data.img +"'"+ "  ></div>";

  comicsContainer.insertAdjacentHTML('beforeend', htmlString);

}