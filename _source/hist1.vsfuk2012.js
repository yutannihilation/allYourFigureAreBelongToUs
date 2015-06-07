var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

var hidcol = {}; 
var hidnum = {}; 

var selectedElement = 0;
var currentX = 0;
var currentY = 0;
var currentMatrix = 0;

// persistent selection or not (default: not persistent)
var persistent = 0;

parent.addEventListener("message", function(e){
	turnbackall();
	for(var i=0;i<hlcount.length;i++) hlcount[i]=0;
	for(var i in e.data){
		hlcount[whichcls[e.data[i]-1]-1]++;
	}
	
	sethlbar();

}, false);

function sethlbar(){
	hidcol = {};
	for(var i=0;i<hlcount.length;i++){
		hlbar = document.getElementById("hlbar.1."+(i+1));
		if(hlcount[i]!=0){
			hlbar.setAttribute("height", grh2[i]*hlcount[i]/count[i]);
			hidcol["hlbar.1."+(i+1)] = "red";
		} else {
			hlbar.setAttribute("height", 0);
			delete hidcol["hlbar.1."+(i+1)];
		}
	}
}

function turnback(pid){
	var p = document.getElementById(pid);
	p.setAttribute("fill", hidcol[pid]);
	delete hidcol[pid];
}

function turnbackall(){
	for(var hid in hidcol){
		turnback(hid);
	}
	hidcol = {};
	hidnum = {};
}

// retrieving parameters of all histogram bars
var gr = document.getElementById("geom_rect.rect.1");

var grchildren = gr.childNodes;
var hlcount = []

var grx = [];
var gry = [];
var grw = [];
var grh = [];

for(var i=0; i<grchildren.length; i++){
	if(grchildren[i].nodeName=='rect'){
		grx.push(parseFloat(grchildren[i].getAttribute('x')));
		gry.push(parseFloat(grchildren[i].getAttribute('y')));
		grw.push(parseFloat(grchildren[i].getAttribute('width')));
		grh.push(parseFloat(grchildren[i].getAttribute('height')));
	}
}

var grx2 = [];
var gry2 = [];
var grw2 = [];
var grh2 = [];

var grxunq = unique(grx);
var grxidx = [];
for(var i=0; i<grxunq.length; i++){
	grxidx.push(grx.indexOf(grxunq[i]));
	hlcount.push(0);
}
grxidx.push(grx.length);

for(var i=0; i<grxidx.length-1; i++){
	grh2.push(0);
	for(var j=grxidx[i]; j<grxidx[i+1]; j++){
		grh2[i] = grh2[i] + grh[j];
	}
	gry2.push(gry[grxidx[i+1]-1]);
	grw2.push(grw[grxidx[i+1]-1]);
}

grx2 = grxunq;

// selection box

function createSelBox(){

	seldefs = document.createElementNS(svgns, 'defs');

	selsymb = document.createElementNS(svgns, 'symbol');
	selsymb.setAttribute('id', 'selsymb');
	selsymb.setAttribute('opacity', '0.5');
	selsymb.setAttribute('viewBox', '0 0 100 100');
	selsymb.setAttribute('preserveAspectRatio', 'none');

	selrect = document.createElementNS(svgns, 'rect');
	selrect.setAttribute('x','0');
	selrect.setAttribute('y','0');
	selrect.setAttribute('id', 'selrect');
	selrect.setAttribute('width','100');
	selrect.setAttribute('height','100');
	selrect.setAttribute('fill', 'grey');
	selrect.setAttribute('style', 'cursor: move');

	selrect.setAttribute('onmousedown', "selectSelBox(evt);");

	selsymb.appendChild(selrect);

	selhandle = document.createElementNS(svgns, 'circle');
	selhandle.setAttribute('cx','100');
	selhandle.setAttribute('cy','100');
	selhandle.setAttribute('r','20');
	selhandle.setAttribute('style', 'cursor: se-resize');
	
	selhandle.setAttribute('onmousedown', "selectHandle(evt);");

	selsymb.appendChild(selhandle);

	seldefs.appendChild(selsymb);

	document.documentElement.appendChild(seldefs);

	selbox = document.createElementNS(svgns, 'use');
	selbox.setAttributeNS(xlinkns, 'xlink:href', '#selsymb');
	selbox.setAttribute('x','0');
	selbox.setAttribute('y','0');
	selbox.setAttribute('width','50');
	selbox.setAttribute('height','50');
	selbox.setAttribute('id', 'selbox');
	selbox.setAttribute('transform', "matrix(1 0 0 1 0 0)");

	selbox.addEventListener("click", function(evt){dblclickSelBox(evt)});

	document.documentElement.appendChild(selbox);

}

createSelBox();

function selectSelBox(evt){
	selectedElement = document.getElementById("selbox");
	currentX = evt.clientX;
	currentY = evt.clientY;
	currentMatrix = selectedElement.getAttribute("transform").slice(7,-1).split(' ');
	
	for(var i=0; i<currentMatrix.length; i++){
		currentMatrix[i] = parseFloat(currentMatrix[i]);
	}
	
	selectedElement.setAttributeNS(null, "onmousemove", "moveSelBox(evt)");
	selectedElement.setAttributeNS(null, "onmouseout", "deselectSelBox(evt)");
	selectedElement.setAttributeNS(null, "onmouseup", "deselectSelBox(evt)");
	
}

function moveSelBox(evt){
	dx = evt.clientX - currentX;
	dy = evt.clientY - currentY;
	currentMatrix[4] += dx;
	currentMatrix[5] += dy;
	newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
	          
	selectedElement.setAttributeNS(null, "transform", newMatrix);
	currentX = evt.clientX;
	currentY = evt.clientY;

	for(var i=0;i<grx2.length;i++){
		if(grx2[i]+grw2[i]>=currentMatrix[4] && currentMatrix[4]+currentW>=grx2[i]){
			hlcount[i] = count[i];
		} else if(persistent==0) hlcount[i] = 0;
		
		sethlbar();
	}
	
	// retrieving indeices of the observation in the selected class,
	// and post them to the main window
	if(persistent==0) hidnum = {};

	for(var i in hidcol){
		for(var j=0;j<data.length;j++){
			if(whichcls[j]==parseInt(i.replace("hlbar.1.",""))){
				hidnum[j+1] = j+1;
			}
		}
	}

}

function deselectSelBox(evt){
  if(selectedElement != 0){
  	parent.opener.postMessage({'hid':hidnum, 'winname':winname}, "*");
    selectedElement.removeAttributeNS(null, "onmousemove");
    selectedElement.removeAttributeNS(null, "onmouseout");
    selectedElement.removeAttributeNS(null, "onmouseup");
    selectedElement = 0;
  }
}

var currentW = 50;
var currentH = 50;
function selectHandle(evt){
	selectedElement = document.getElementById("selbox");
	currentX = evt.clientX;
	currentY = evt.clientY;

	currentW = parseFloat(selectedElement.getAttributeNS(null, 'width'));
	currentH = parseFloat(selectedElement.getAttributeNS(null, 'height'));

	selectedElement.setAttributeNS(null, "onmousemove", "moveHandle(evt)");
	selectedElement.setAttributeNS(null, "onmouseout", "deselectHandle(evt)");
	selectedElement.setAttributeNS(null, "onmouseup", "deselectHandle(evt)");
	
}

function moveHandle(evt){
	dx = evt.clientX - currentX;
	dy = evt.clientY - currentY;
	
	currentW = currentW + dx;
	currentH = currentH + dy;
	
	selbox = document.getElementById('selbox');

	selbox.setAttributeNS(null, 'width', currentW);
	selbox.setAttributeNS(null, 'height', currentH);
	

	currentX = evt.clientX;
	currentY = evt.clientY;
}

function deselectHandle(evt){
	deselectSelBox(evt);
}

function dblclickSelBox(evt){
	if(evt.detail==2){
		selbox = document.getElementById('selrect');
		if(persistent==0){
			selbox.setAttributeNS(null, 'fill', 'yellow');
			persistent = 1;
		} else {
			selbox.setAttributeNS(null, 'fill', 'grey');
			persistent = 0;
		}
	}
}


function unique(array) {
	var storage = {};
	var uniqueArray = [];
	var i,value;
	for ( i=0; i<array.length; i++) {
		value = array[i];
		if (!(value in storage)) {
			storage[value] = true;
			uniqueArray.push(value);
		}
	}
	return uniqueArray;
}