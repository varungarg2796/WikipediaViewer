var obj;
var results;
var desc;
var link;


$("#butt").click(function() {
	 $.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $('#search').val() + '&limit=5&namespace=0&format=json', function( data ) {
	  	console.log(data);
	  	obj=data;
	  	results=obj[1];
	  	desc=obj[2];
	  	link=obj[3];
	  	appendResults(obj,results,desc,link);

	      //make tags the correct array
	      //tags = data[1];
	      //update source
	      //$('#search').autocomplete( "option", { source: tags } );
	    //search to refresh autocomplete
	      //$('#search').autocomplete( "search");
	      
	}, "jsonp" );
   
 })

function appendResults(obj,results,desc,link)
{
	document.getElementById("divID").innerHTML = "";
	for (var i=0; i<5; i++) 
	{
		var div = document.getElementById('divID');
		console.log(results[i]);
		div.innerHTML = div.innerHTML + 
		'<a target="_blank" href='+link[i]+'><div class="infoDiv container-fluid text-center"><b>'+results[i]+'</b><br>'+ desc[i] +        '</div></a>';
	}
}



    
  