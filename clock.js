
var id = "clock";

function AnalogClock() {


	var dateTimeFormat = function (time) {
		
		var str = "";
		str +=  time.getDate() + "-";
		str +=  time.getMonth() + 1 + "-";
		str +=  time.getYear() + (time.getYear() > 1900 ? 0 : 1900) + "<br/> ";
		str += time.getHours() + ":";
		str += time.getMinutes() + ":";
		str += time.getSeconds();
		return str;
	}
	
	
	this.foreColor = "#000";
	this.bgColor =  "#046380";
	this.width = 400;
	
	this.container = document.getElementById(id);
	if (!this.container)
		return;


	this.container.style.fontcolor = this.foreColor;
	this.panel = document.createElement("div");
	this.panel.style.borderRadius = "50%";
	this.panel.style.backgroundColor = this.bgColor;
	this.panel.style.border = "solid 1px #ccc";
	this.panel.style.width = this.width + "px";
	this.panel.style.height = this.width + "px";
	this.panel.style.position = "relative";
	this.container.appendChild(this.panel);

	
	var digitalTimeFormat = document.createElement("h4");
	digitalTimeFormat.style.width = "100%";
	digitalTimeFormat.style.textAlign = "center";
	digitalTimeFormat.style.fontWeight = "normal";
	digitalTimeFormat.style.fontSize = this.width / 15 + "px";
	digitalTimeFormat.style.marginTop = this.width * 0.6 + "px";
	digitalTimeFormat.style.color = this.foreColor;
	digitalTimeFormat.innerHTML = dateTimeFormat(new Date());
	this.panel.appendChild(digitalTimeFormat);

	
	var hourListing = document.createElement("ul");            
	hourListing.style.height = "100%";

	hourListing.style.padding = "0";
	hourListing.style.margin = "0";
	hourListing.style.listStyle = "none";
	hourListing.style.position = "absolute";
	hourListing.style.width = 40 + "px";
	hourListing.style.top = 0;
	hourListing.style.left = this.width / 2 - 20 + "px";
	hourListing.style.color = this.foreColor;
	this.panel.appendChild(hourListing);

	for (var i = 0; i <= 11; i++) {
		
		var list = document.createElement("li"); 
		list.style.padding = "0";
		list.style.margin = "0";
		list.style.position = "absolute";
		list.style.textAlign = "center";
		list.style.width = "40px";
		list.style.height = this.width + "px";
		list.style.fontSize = this.width / 10 + "px";
		hourListing.appendChild(list);


		list.style.transform = "rotate(" + 360 / 12 * (i + 1) + "deg)";
		//list.style.transform = "rotate(" + 30*(i+1) + "deg)";

		var numTop = document.createElement("div");
		numTop.style.width = "100%";
		numTop.style.position = "absolute";
		numTop.style.textAlign = "center";
		numTop.innerHTML = i + 1;
		list.appendChild(numTop);

		numTop.style.transform = "rotate(" + -360 / 12 * (i + 1) + "deg)";
	}

	//rotate hours arm
	var hourArm = document.createElement("div");  
	var hourWidth = this.width * 0.02;
	var hourTop = this.width * 0.25 
	var hourleft = this.width * 0.5 
	hourArm.style.width = hourWidth + "px";
	hourArm.style.height = hourWidth + "px";
	hourArm.style.position = "absolute";
	hourArm.style.border = "solid 0px transparent";
	hourArm.style.left = hourleft + "px";
	hourArm.style.top = hourTop + "px";
	hourArm.style.borderTop = "solid " + (this.width * 0.5 - hourTop) + "px #f60";
	hourArm.style.borderBottomWidth = (this.width * 0.5 - hourTop) + "px";
	this.panel.appendChild(hourArm);

	//rotate minutes arm
	var minArm = document.createElement("div");  
	var minWidth = this.width * 0.01;
	var minTop = this.width * 0.1 ;
	var minleft = this.width * 0.5 ;
	minArm.style.width = minWidth + "px";
	minArm.style.height = minWidth + "px";
	minArm.style.position = "absolute";
	minArm.style.border = "solid 0px transparent";
	minArm.style.left = minleft + "px";
	minArm.style.top = minTop + "px";
	minArm.style.borderTop = "solid " + (this.width * 0.5 - minTop) + "px #09f";
	minArm.style.borderBottomWidth = (this.width * 0.5 - minTop) + "px";
	this.panel.appendChild(minArm);

	//rotate seconds arm
	var secArm = document.createElement("div");  
	var secWidth = 1;
	var secTop = this.width * 0.05;
	var secleft = this.width * 0.5 ;
	secArm.style.width = secWidth + "px";
	secArm.style.height = secWidth + "px";
	secArm.style.position = "absolute";
	secArm.style.border = "solid 0px transparent";
	secArm.style.left = secleft  + "px";
	secArm.style.top = secTop + "px";
	secArm.style.borderTop = "solid " + (this.width * 0.5 - secTop) + "px " + this.foreColor;
	secArm.style.borderBottomWidth = (this.width * 0.5 - secTop) + "px";
	this.panel.appendChild(secArm);

	
	var centerPoint = document.createElement("div"); 
	var pointWidth = this.width * 0.05;
	centerPoint.style.width = pointWidth + "px";
	centerPoint.style.height = pointWidth + "px";
	centerPoint.style.position = "absolute";
	centerPoint.style.backgroundColor = this.foreColor;
	centerPoint.style.left = this.width * 0.5 - (pointWidth * 0.5) + "px";
	centerPoint.style.top = this.width * 0.5 - (pointWidth * 0.5) + "px";
	centerPoint.style.borderRadius = "50%";
	this.panel.appendChild(centerPoint);


	this.loop = setInterval(function () {
		
		this.container.parentElement.style.backgroundColor = "#999";
		
		var now = new Date();
		digitalTimeFormat.innerHTML = dateTimeFormat(now);

		var roS = 360 / 60 * now.getSeconds();
		var roM = 360 / 60 * now.getMinutes();
		var roH = 360 / 12 * (now.getHours() % 12) + 360 / 12 * (now.getMinutes() / 60);

		secArm.style.transform = 'rotate(' + roS + 'deg)';
		minArm.style.transform = 'rotate(' + roM + 'deg)';
		hourArm.style.transform = 'rotate(' + roH + 'deg)';

	}, 1000);

}
