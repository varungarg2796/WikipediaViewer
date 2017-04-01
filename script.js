 
$("#butt").click(function() {
	 $.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $('#search').val() + '&limit=5&namespace=0&format=json', function( data ) {
	  	console.log(data);


	      //make tags the correct array
	      //tags = data[1];
	      //update source
	      //$('#search').autocomplete( "option", { source: tags } );
	    //search to refresh autocomplete
	      //$('#search').autocomplete( "search");
	      
	}, "jsonp" );
   
 })



    
  