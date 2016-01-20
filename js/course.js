var course ="";
var i=0;
var previousCode="";
var mainHeading="";
var numberOfHeading = "";

document.getElementById("nxt").addEventListener("click", inc);
document.getElementById("bck").addEventListener("click", dec);

function inc() {
i+=1;
courseJsonChange();
}
function dec() {
i-=1;
courseJsonChange();
}


function courseJson(){
	
	var xhr = new XMLHttpRequest();
	 xhr.onreadystatechange = function(){
	 	if(xhr.readyState === 4){
	 	 	course = JSON.parse(xhr.responseText);

	 	 	mainHeading = course[i].mainHeading;
	 	 	numberOfHeading = course.length;

	 		document.getElementById('mainHeading').innerHTML = course[0].mainHeading;
	 		document.getElementById('heading').innerHTML = course[0].heading;
	 		document.getElementById('content').innerHTML = course[0].content;
	 		document.getElementById('taskContent').innerHTML = course[0].taskContent;
	 		document.getElementById('help').innerHTML = course[0].help;
	 		previousCode = course[0].code;
	 		editor.setValue(previousCode,1);

	 		/*sidebar data loading during body onload*/

	 	}
	 };

	 xhr.open("GET","data/course.json");
	 xhr.send();
}

function courseJsonChange(){
	 		document.getElementById('mainHeading').innerHTML = mainHeading;
	 		document.getElementById('heading').innerHTML = course[i].heading;
	 		document.getElementById('content').innerHTML = course[i].content;
	 		document.getElementById('taskContent').innerHTML = course[i].taskContent;
	 		document.getElementById('help').innerHTML = course[i].help;
	 		previousCode = course[i].code;
	 		editor.setValue(previousCode,1);

};




/* sidebar data loading */

function sidebarData(){
	var sidebarUnorderedList = '<ul class="sidebar-nav">';
	sidebarUnorderedList+='<li class="sidebar-brand">';
	sidebarUnorderedList+='<h3 id="sidebar_brand">'+mainHeading+'</h3>';
	sidebarUnorderedList+='<hr></li>';
	for(var c=0;c<numberOfHeading;c++){
		sidebarUnorderedList+='<li id="sidebar'+c+'"><a href="#">'+course[c].heading+'</a></li>';	
	}
	sidebarUnorderedList+='</ul>';
	document.getElementById('sidebar-wrapper').innerHTML = sidebarUnorderedList; 
}

/* sidebar data loading end */










