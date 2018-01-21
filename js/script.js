$(function () {
	
	var url = 'https://restcountries.eu/rest/v2/name/';
	var countriesList = $('#countries');

	$('#search').click(searchCountries);

	function searchCountries() {
  		var countryName = $('#country-name').val();

  		if (!countryName.length) {
  			countryName = "Poland";
  		}

  		$.ajax ({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}

	function showCountriesList(resp) {
		countriesList.empty();

		resp.forEach(function(item) {
			var code = item.alpha3Code.toLowerCase();
			var flagURL = "https://restcountries.eu/data/" + code +".svg";
			var box = $('<div>').addClass(code);
			var boxProp = $('<div>').addClass(code + "-prop");
			box.appendTo(countriesList);
			$('<img>').attr("src", flagURL).appendTo(box);
			$('<h4>').text(item.name).appendTo(box);
			boxProp.appendTo(countriesList);
			$('<p>').text("Capital:").appendTo(boxProp).css({"width": "30%"});
			$('<p>').text(item.capital).appendTo(boxProp).css({"width": "70%"});
			$('<h6>').appendTo(boxProp).css("width", "100%");
			$('<p>').text("Land Area [sq.km]:").appendTo(boxProp).css({"width": "30%"});
			$('<p>').text(item.area).appendTo(boxProp).css({"width": "70%"});
			$('<h6>').appendTo(boxProp).css("width", "100%");
			$('<p>').text("Language(s):").appendTo(boxProp).css({"width": "30%"});
			$('<p>').text(item.languages[0].name).appendTo(boxProp).css({"width": "70%"});
			$('<h6>').appendTo(boxProp).css("width", "100%");
			$('<p>').text("Population:").appendTo(boxProp).css({"width": "30%"});
			$('<p>').text(item.population).appendTo(boxProp).css({"width": "70%"});
			$('<h6>').appendTo(boxProp).css("width", "100%");
			$('<p>').text("Currencies:").appendTo(boxProp).css({"width": "30%"});
			$('<p>').text(item.currencies[0].name).appendTo(boxProp).css({"width": "70%"});

		});
		
	}
});