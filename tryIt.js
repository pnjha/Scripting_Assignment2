
function clearCode(){

	document.getElementById("code").value = "";
}

function clearOutput(){
	
	var temp = "";
	var element = document.getElementById("IFrame");
	element.contentWindow.document.write(temp);
	temp = "<html><head></head><body></body></html>";
	element.contentWindow.document.write(temp);

}


function runCode(){

	
	var inputCode = document.getElementById("code").value;
	var Iframe = document.getElementById("IFrame");
	Iframe.contentWindow.document.open();
	Iframe.contentWindow.document.write(inputCode);
	Iframe.contentWindow.document.close();

	
}