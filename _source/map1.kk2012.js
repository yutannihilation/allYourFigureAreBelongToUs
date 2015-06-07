var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

var hidnum = {}; // highlighting polygon id => its numer
var mousedown = 0; // flag for mouse dragging

// retrieving all polygons and setting event listener

var polcol = {}; // polygon id => color

for(var i=0;i<polnum.length;i++){
	pol = document.getElementById("GRID.polygon."+polnum[i]);
	col = document.getElementById("GRID.polygon."+polnum[i]+".1").getAttribute('fill');
	polcol[pol.id] = col;

	pol.addEventListener("mousemove", function(evt){
		if(mousedown==1){
			highlight(evt.target.parentNode.id);
		}
	}, false);
}

document.documentElement.addEventListener("mousedown", function(evt){
	evt.preventDefault();
	mousedown=1;
}, false);

document.documentElement.addEventListener("mouseup", function(evt){
	mousedown=0;
	parent.opener.postMessage({'hid':hidnum, 'winname':winname}, "*");

}, false);

document.documentElement.addEventListener("dblclick", function(evt){
	turnbackall();
	parent.opener.postMessage({'hid':hidnum, 'winname':winname}, "*");
}, false);

document.documentElement.addEventListener("mousemove", function(evt){
}, false);

parent.addEventListener("message", function(e){
	tmp = [];
	for(var i in e.data){
		tmp.push(dtom[e.data[i]]);
	}

	turnbackall();
	for(var i=1;i<=polnum.length;i++){
		if(tmp.indexOf(i)>=0){
			highlight("GRID.polygon."+i);
		}
	}

}, false);

function highlight(pid){
	if(!hidnum[pid]){
		paintSubPolygons(document.getElementById(pid), 'red');
		hidnum[pid] = parseInt(pid.replace("GRID.polygon.",""),10);
	}
	
}

function turnbackall(){
	for(var pol in polcol){
		paintSubPolygons(document.getElementById(pol), polcol[pol]);
	}
	hidnum = {};
}

function paintSubPolygons(node, col){
	pol = node.childNodes;
	for(var i=0;i<pol.length;i++){
		if(pol[i].nodeName=='polygon'){
			pol[i].setAttribute('fill', col);
		}
	}
}