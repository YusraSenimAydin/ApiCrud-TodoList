//Make GET call to DB to fecth item list
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var response = httpGet("http://localhost:3000/api/todoList"); //returns string of array of json
console.log(response);

function newElement(){
	var myNodelist = document.getElementsByTagName("li");
	var item = document.getElementById("item").value;
	if(item ==="");
	else{
		var li = document.createElement("li");
		var txt = document.createTextNode(item);
		li.appendChild(txt);
		li.id = "item"+(myNodelist.length+1); //how often does myNodelist update it value?
		li.onclick=function(){check(li.id)};
		document.getElementById("itemList").appendChild(li);
		document.getElementById("item").value="";
		
		//spwaning close 
		for (i = 0; i < myNodelist.length; i++) {
			var span = document.createElement("SPAN");
			var txt = document.createTextNode("X");
			span.className = "close";
			span.appendChild(txt);
			myNodelist[i].appendChild(span);
		}	
	
		//Coding close
		var close = document.getElementsByClassName("close");
		for(i=0;i<close.length;i++){
			close[i].onclick=function(){
				var div = this.parentElement.style.display = "none"; //Why this? why does close[i].parentElement not work
			}
		}
	}

}