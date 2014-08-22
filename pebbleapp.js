/**
 *
 */
simply.title('Hello World!');

ajax({ url: 'http://www.arvsfonden.se/' }, function(data){
	var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
	simply.subtitle(headline);
});