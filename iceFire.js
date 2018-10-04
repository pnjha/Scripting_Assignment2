
var searchContainer = document.getElementById("searchResult");
var searchText = document.getElementById("inputText");
var selection = document.getElementById("category");
var textInput = document.getElementById("inputText");
var counter = 0;

function searchCharName() {
  
  counter++;

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://www.anapioficeandfire.com/api/characters/?name='+textInput.value);
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTMLCharName(ourData);
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


function renderHTMLCharName(data) {
  
  var htmlString = "";
  var elem = document.getElementById('result');
  if(elem)
    elem.parentNode.removeChild(elem);


  htmlString += "<div id = result>";

  if(data[0].name.length>0){
    htmlString += "<label>Character Name: "+data[0].name+"</label><br>";   
  }    
  if(data[0].born.length>0){
    htmlString += "<label>Born: "+data[0].born+"</label><br>";   
  }
  if(data[0].died.length>0){
    htmlString += "<label>Died: "+data[0].died+"</label><br>";   
  }
  if(data[0].gender.length>0){
    htmlString += "<label>Gender: "+data[0].gender+"</label><br>";   
  }
  if(data[0].playedBy[0].length>0){
    htmlString += "<label>Played By: "+data[0].playedBy+"</label><br>";   
  }
  if(data[0].father.length>0){
    htmlString += "<label>Father: "+data[0].father+"</label><br>";   
  }
  if(data[0].mother.length>0){
    htmlString += "<label>Mother: "+data[0].mother+"</label><br>";   
  }
  if(data[0].culture.length>0){
    htmlString += "<label>Culture: "+data[0].culture+"</label><br>";   
  }
  if(data[0].aliases[0].length>0){
    htmlString += "<label>Aliases: "+data[0].aliases+"</label><br>";   
  }
  if(data[0].titles[0].length>0){
    htmlString += "<label>Titles: "+data[0].titles+"</label><br>";   
  }
  if(data[0].tvSeries[0].length>0){
    htmlString += "<label>TvSeries: "+data[0].tvSeries+"</label><br>";   
  }
  
  
  searchContainer.insertAdjacentHTML('beforeend', htmlString);

}


function searchHouseName() {
  
  counter++;

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://www.anapioficeandfire.com/api/houses/?name='+textInput.value);
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTMLHouseName(ourData);
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


function renderHTMLHouseName(data) {
  
  var htmlString = "";
  var elem = document.getElementById('result');
  if(elem)
    elem.parentNode.removeChild(elem);


  htmlString += "<div id = result>";

  if(data[0].name.length>0){
    htmlString += "<label>House Name: "+data[0].name+"</label><br>";   
  }    
  if(data[0].founded.length>0){
    htmlString += "<label>Founded: "+data[0].founded+"</label><br>";   
  }
  if(data[0].diedOut.length>0){
    htmlString += "<label>Died Out: "+data[0].diedOut+"</label><br>";   
  }
  if(data[0].founder.length>0){
    htmlString += "<label>Founder: "+data[0].founder+"</label><br>";   
  }
  // if(data[0].currentLord.length>0){
  //   htmlString += "<label>Current Lord: "+data[0].currentLord+"</label><br>";   
  // }
  // if(data[0].overlord.length>0){
  //   htmlString += "<label>Overlord: "+data[0].overlord+"</label><br>";   
  // }
  // if(data[0].heir.length>0){
  //   htmlString += "<label>Heir: "+data[0].heir+"</label><br>";   
  // }
  if(data[0].coatOfArms.length>0){
    htmlString += "<label>Coat Of Arms: "+data[0].coatOfArms+"</label><br>";   
  }
  if(data[0].region.length>0){
    htmlString += "<label>Region: "+data[0].region+"</label><br>";   
  }
  if(data[0].seats[0].length>0){
    htmlString += "<label>Seats: "+data[0].seats+"</label><br>";   
  }
  if(data[0].titles[0].length>0){
    htmlString += "<label>Titles: "+data[0].titles+"</label><br>";   
  }
  if(data[0].ancestralWeapons[0].length>0){
    htmlString += "<label>Ancestral Weapons: "+data[0].ancestralWeapons+"</label><br>";   
  }
  
  searchContainer.insertAdjacentHTML('beforeend', htmlString);

}


function renderHTMLRandomCharName(data) {
  
  var htmlString = "";
  var elem = document.getElementById('result');
  if(elem)
    elem.parentNode.removeChild(elem);


  htmlString += "<div id = result>";

  if(data.name.length>0){
    htmlString += "<label>Character Name: "+data.name+"</label><br>";   
  }    
  if(data.born.length>0){
    htmlString += "<label>Born: "+data.born+"</label><br>";   
  }
  if(data.died.length>0){
    htmlString += "<label>Died: "+data.died+"</label><br>";   
  }
  if(data.gender.length>0){
    htmlString += "<label>Gender: "+data.gender+"</label><br>";   
  }
  if(data.playedBy[0].length>0){
    htmlString += "<label>Played By: "+data.playedBy+"</label><br>";   
  }
  // if(data.father.length>0){
  //   htmlString += "<label>Father: "+data.father+"</label><br>";   
  // }
  // if(data.mother.length>0){
  //   htmlString += "<label>Mother: "+data.mother+"</label><br>";   
  // }
  if(data.culture.length>0){
    htmlString += "<label>Culture: "+data.culture+"</label><br>";   
  }
  if(data.aliases[0].length>0){
    htmlString += "<label>Aliases: "+data.aliases+"</label><br>";   
  }
  if(data.titles[0].length>0){
    htmlString += "<label>Titles: "+data.titles+"</label><br>";   
  }
  if(data.tvSeries[0].length>0){
    htmlString += "<label>TvSeries: "+data.tvSeries+"</label><br>";   
  }
  
  
  searchContainer.insertAdjacentHTML('beforeend', htmlString);

}


function searchRandomCharacter(charCount) {

  var ourRequest = new XMLHttpRequest();

  if(charCount==0){
    counter = (++counter)%191;
    ourRequest.open('GET', 'https://www.anapioficeandfire.com/api/characters/'+counter);  
  }
  else{
    ourRequest.open('GET', charCount);
  }

  
  
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTMLRandomCharName(ourData);
      //console.log(ourData.name);
    } else {
      console.log("Server returned error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  
}


function renderHTMLRandomHouseName(data) {
  
  var htmlString = "";
  var elem = document.getElementById('result');
  if(elem)
    elem.parentNode.removeChild(elem);


  htmlString += "<div id = result>";

  if(data.name.length>0){
    htmlString += "<label>House Name: "+data.name+"</label><br>";   
  }    
  if(data.founded.length>0){
    htmlString += "<label>Founded: "+data.founded+"</label><br>";   
  }
  if(data.diedOut.length>0){
    htmlString += "<label>Died Out: "+data.diedOut+"</label><br>";   
  }
  // if(data.founder.length>0){
  //   htmlString += "<label>Founder: "+data.founder+"</label><br>";   
  // }
  // if(data.currentLord.length>0){
  //   htmlString += "<label>Current Lord: "+data.currentLord+"</label><br>";   
  // }
  // if(data.overlord.length>0){
  //   htmlString += "<label>Overlord: "+data.overlord+"</label><br>";   
  // }
  // if(data.heir.length>0){
  //   htmlString += "<label>Heir: "+data.heir+"</label><br>";   
  // }
  if(data.coatOfArms.length>0){
    htmlString += "<label>Coat Of Arms: "+data.coatOfArms+"</label><br>";   
  }
  if(data.region.length>0){
    htmlString += "<label>Region: "+data.region+"</label><br>";   
  }
  if(data.seats[0].length>0){
    htmlString += "<label>Seats: "+data.seats+"</label><br>";   
  }
  if(data.titles[0].length>0){
    htmlString += "<label>Titles: "+data.titles+"</label><br>";   
  }
  if(data.ancestralWeapons[0].length>0){
    htmlString += "<label>Ancestral Weapons: "+data.ancestralWeapons+"</label><br>";   
  }
  
  searchContainer.insertAdjacentHTML('beforeend', htmlString);

}



function searchRandomHouse() {
  
  counter++;

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://www.anapioficeandfire.com/api/houses/'+(counter)%191);
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourData);
      renderHTMLRandomHouseName(ourData);
      
    } else {
      console.log("Server returned error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  
}


function searchRandomCharFrmHouse() {
  
  counter++;

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://www.anapioficeandfire.com/api/houses/?name='+textInput.value);
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      
      var ourData = JSON.parse(ourRequest.responseText);
      
      console.log(ourData);

      var randomIndex = ourData[0].swornMembers.length;
      randomIndex = (randomIndex+41)%randomIndex;

      searchRandomCharacter(ourData[0].swornMembers[randomIndex]);

      
    } else {
      console.log("Server returned error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  
}



function searchInit(){

  if(selection.value == "charName"){
    searchCharName();
  }else if(selection.value == "houseName"){
    searchHouseName();
  }else if(selection.value == "randomChar"){
    searchRandomCharacter(0);
  }else if(selection.value == "randomHouse"){
    searchRandomHouse();
  }else if(selection.value == "randomCharFrmHouse"){
    searchRandomCharFrmHouse(); 
  }

}