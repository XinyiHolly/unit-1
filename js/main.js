/* JSsheet by Xinyi Liu, 2017 */

//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    //add another column of city size
    addColumns(cityPop);
		//add an event to the html page
    addEvents();
};

//function to create another column of city size
function addColumns(cityPop){

		//loop to append one more element to each row of the table
    $('tr').each(function(i){

			//to the header row
    	if (i == 0){

				//append "City Size" column
    		$(this).append('<th>City Size</th>');
			//to other rows
    	} else {

				//define a variable for city size
    		var citySize;

				//if the population in this row is less than 100000
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

				//if the population in this row is more than 100000, and less than 500000
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

				//if the population in this row is more than 500000
    		} else {
    			citySize = 'Large';
    		};

				//add the city size's html string to the row
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//function to add an event to the table
function addEvents(){

	//define the way to activate the event is to roll the mouse
	$('table').mouseover(function(){

    //define to use rgb color model
		var color = "rgb(";

    //loop to assign number for each column of the rgb color model
		for (var i=0; i<3; i++){

      //produce a random number
			var random = Math.round(Math.random() * 255);

			//assign the random numer just produced to each column of the color model
			color += random;

			if (i<2){
				color += ",";

			} else {
				color += ")";
		  }

      //assign the random color just produced to the table
			$(this).css('color', color);
		}
	});

  //function to pop out a string
	function clickme(){

		alert('Hey, you clicked me!');
	};

	//activate the event when the table is clicked
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
