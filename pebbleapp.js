(function($) {

  simply.title('Hello World!');
  
	ajax({ url: 'http://www.arvsfonden.se/' }, function(data){
	  var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
	  simply.title(headline);
	});

	simply.on('singleClick', function(e) {
	  simply.subtitle('You pressed the ' + e.button + ' button!');
	  simply.vibe('short');
	});

	simply.on('longClick', function(e) {
	  simply.subtitle('You held the ' + e.button + ' button!');
	});
});