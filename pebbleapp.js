/**
 *
 */
// https://api.trafiklab.se/sl/reseplanerare.json?key=SLukjHHJSY0z6E8tF4RJJYiSkHgIrC0J&S=4300&Z=9192&journeyProducts=8
var url;
var url2;

simply.on('singleClick', function(e) {
  if (e.button === 'up') {
    url = 'https://api.trafiklab.se/sl/reseplanerare.json?key=SLukjHHJSY0z6E8tF4RJJYiSkHgIrC0J&S=4300&Z=9192&journeyProducts=8';
        
    ajax({ url: url, type: 'json' }, function(data) {
      simply.text({
        title: data.CurrentQuery.Summary.Origin,
         //subtitle: data.Departure.Metros.Metro[1].DisplayRow1,
         //body: data.Departure.Metros.Metro[1].DisplayRow2,
        });
    });

  } else if (e.button === 'down') {
  
    url = 'https://api.trafiklab.se/sl/realtid/GetDepartures.json?key=SLukjHHJSY0z6E8tF4RJJYiSkHgIrC0J&siteId=9192';
    
  ajax({ url: url, type: 'json' }, function(data) {
    simply.text({
      title: data.Departure.Metros.Metro[0].StationName,
       subtitle: data.Departure.Metros.Metro[0].DisplayRow1,
       body: data.Departure.Metros.Metro[0].DisplayRow2,
    });
    
});
    
  } else {
url = 'https://api.trafiklab.se/sl/realtid/GetDepartures.json?key=SLukjHHJSY0z6E8tF4RJJYiSkHgIrC0J&siteId=4300';
    
ajax({ url: url, type: 'json' }, function(data) {
  simply.text({
    title: 'Test' + data.Departure.Metros.Metro[1].StationName,
     subtitle: data.Departure.Metros.Metro[1].DisplayRow1,
     body: data.Departure.Metros.Metro[1].DisplayRow2,
    });
});
  }
});

simply.on('longClick', function(e) {
  if (e.button === 'up') {
    url2 = 'https://api.trafiklab.se/sl/realtid/GetDpsDepartures.json?key=SLukjHHJSY0z6E8tF4RJJYiSkHgIrC0J&siteId=[id]&timeWindow=10';
        
    ajax({ url: url2, type: 'json' }, function(data) {
      simply.text({
        title: data.DPS.Trams.DpsTram[1].StopAreaName,
        subtitle: data.DPS.Trams.DpsTram[1].Destination + ' ' + data.DPS.Trams.DpsTram[1].DisplayTime,
       body: data.DPS.Trams.DpsTram[0].Destination + ' ' + data.DPS.Trams.DpsTram[0].DisplayTime
        });
    });

  } else if (e.button === 'down') {
  
    url2 = 'https://api.trafiklab.se/sl/realtid/GetDpsDepartures.json?key=SLukjHHJSY0z6E8tF4RJJYiSkHgIrC0J&siteId=[id]&timeWindow=10';
    
  ajax({ url: url2, type: 'json' }, function(data) {
    simply.text({
      title: data.DPS.Trams.DpsTram[1].StopAreaName,
      subtitle: data.DPS.Trams.DpsTram[0].Destination + ' ' + data.DPS.Trams.DpsTram[0].DisplayTime,
       body: data.DPS.Trams.DpsTram[1].Destination + ' ' + data.DPS.Trams.DpsTram[1].DisplayTime
    });
    
});
    
  }
});

url = 'https://api.trafiklab.se/sl/realtid/GetDepartures.json?key=SLukjHHJSY0z6E8tF4RJJYiSkHgIrC0J&siteId=[id]';
    
ajax({ url: url, type: 'json' }, function(data) {
  simply.text({
    title: data.Departure.Metros.Metro[1].StationName,
     subtitle: data.Departure.Metros.Metro[1].DisplayRow1,
     body: data.Departure.Metros.Metro[1].DisplayRow2
    });
});