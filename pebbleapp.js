/**
 *
 */
simply.title('Busstidtabell');

ajax({url: 'http://sl.se/#/Travel/SearchTravelById/Slussen%20(Stockholm)/Brunn%20(V%C3%A4rmd%C3%B6)/9192/4300/null/depart/sv/null/null/null/null/null/null/null/null/false/null/0' }, function(data){
	var slussenId = document.getElementById('searchResults');
	var slussen = data.match(/Idag(.*?)<\/h2>/)[1];
	var strippedSlussen = slussen.replace(/(<([^>]+)>)/ig,"");
	simply.subtitle(strippedSlussen);
});

simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    simply.title('Brunn => Slussen');
    simply.vibe('short');
  } else if (e.button === 'down') {
    simply.title('Slussen => Brunn');
    simply.vibe('short');
  }
});