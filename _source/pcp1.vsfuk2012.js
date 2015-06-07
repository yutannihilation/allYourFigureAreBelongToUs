var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

var hidcol = {}; // to store the highlighting id and the original color of the points
var hidnum = {}; // to store the highlighting id and its numeric parts of the points

var selectedElement = 0;
var currentX = 0;
var currentY = 0;
var currentMatrix = 0;

// persistent selection or not (default: not persistent)
var persistent = 0;

// retrieving height of SVG
var svgheight = parseFloat(document.documentElement.getAttribute('height').replace("px",""));

parent.addEventListener("message", function(e){

	tmp = [];
	for(var i in e.data){
		tmp.push(e.data[i]);
	}

	for(var i=0;i<gpid.length;i++){
		if(tmp.indexOf(i+1)<0 && hidnum[gpid[i]]>0){
			turnback(gpid[i]);
		} else {
			if(tmp.indexOf(i+1)>=0){
				highlight(gpid[i]);
			}
		}
	}
}, false);

// retrieving coordinates on SVG of all points
var gp = document.getElementById("GRID.polyline.1");

var gpchildren = gp.childNodes;
var gpx = [];
var gpy = new Array(ncol);
var gpid = [];

for(var j=0;j<ncol;j++){
	gpy[j] = new Array();
}

var gpxflg = 0;
for(var i=0; i<gpchildren.length;i++){
	if(gpchildren[i].nodeName=='polyline'){
		gpid.push(gpchildren[i].id);
		points = gpchildren[i].getAttribute('points').split(' ');

		for(var j=0;j<ncol;j++){
			gpy[j].push(parseFloat(points[j].split(',')[1]));
		}

		if(gpxflg==0){
			for(var j=0;j<ncol;j++){
				gpx.push(parseFloat(points[j].split(',')[0]));
			}
			if(gpx.length==ncol) gpxflg++;
		}
	}
}

function seldetect(srx1,sry1,srx2,sry2){
	selrange = gpx.concat([srx1,srx2]).sort(
	function(a,b){
		if(a<b) return -1;
		if(a>b) return 1;
		return 0;
	});
	if(srx2>srx1) {srmin=srx1; srmax=srx2;}
	else {srmin=srx2; srmax=srx1;}
	
	// delete the both ends of selrange when selection area is out of range of x
	if(selrange[0]<gpx[0]) selrange.shift();
	if(selrange[selrange.length-1]>gpx[ncol-1]) selrange.pop();
	
	while(selrange[0]<srmin){
		selrange.shift();
	}
	while(selrange[selrange.length-1]>srmax){
		selrange.pop();
	}
	
	// turnback when selection area is out of parallel coordinates
	if(selrange.length<2 && persistent==0){
		for(var i=0;i<nrow;i++){
			if(hidcol["GRID.polyline.1."+(i+1)]) turnback("GRID.polyline.1."+(i+1));
		}
	}

	sidx=0;
	while(selrange[0]>=gpx[sidx]) sidx++;
	
	for(var sridx=0;sridx<selrange.length-1;sridx++){
		x1 = selrange[sridx];
		x2 = selrange[sridx+1];
		for(var i=0;i<nrow;i++){
			y1 = (gpy[sidx][i]-gpy[sidx-1][i])*(x1-gpx[sidx-1])/(gpx[sidx]-gpx[sidx-1]) + gpy[sidx-1][i];
			y2 = (gpy[sidx][i]-gpy[sidx-1][i])*(x2-gpx[sidx-1])/(gpx[sidx]-gpx[sidx-1]) + gpy[sidx-1][i];
			if((sry1<=y1&&y1<=sry2 || sry2<=y1&&y1<=sry1) || (sry1<=y2&&y2<=sry2 || sry2<=y2&&y2<=sry1)){
				if(!hidcol["GRID.polyline.1."+(i+1)]) highlight("GRID.polyline.1."+(i+1));
			}
			else if(hidcol["GRID.polyline.1."+(i+1)] && persistent==0) turnback("GRID.polyline.1."+(i+1));

		}
		sidx++;
	}
}

function highlight(pid){
	var p = document.getElementById(pid);
	var pcol = p.getAttribute("stroke");
	if(pcol != "red"){
		hidcol[pid] = pcol;
		hidnum[pid] = parseInt(pid.replace("GRID.polyline.1.",""), 10);
	}
	p.setAttribute("stroke", "red");
	p.setAttribute("stroke-opacity", 1);
}

// opacityをどっかで覚えとかんといかん（要修正）
function turnback(pid){
	var p = document.getElementById(pid);
	p.setAttribute("stroke", hidcol[pid]);
	p.setAttribute("stroke-opacity", 0.5);
	delete hidcol[pid];
	delete hidnum[pid];

}

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

	seldetect(currentMatrix[4], svgheight-currentMatrix[5], currentMatrix[4]+currentW, svgheight-currentMatrix[5]-currentH);
	
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

