var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var moment = require('moment');
var request = require('request');


// Below won’t give the actual time that request takes. 
// Below request call is async, and we start measuring time at the time 
// when request was queued, not actually sent.
// let start_time = new Date().getTime();

// request.get('https://google.com', function (err, response) {
//     console.log('Time elapsed since queuing the request:', new Date().getTime() - start_time);
// });

//thus I am using the time parameter
request.get({ url: 'http://www.google.com', time: true }, function (err, response) {
    var remoteServerTime = response.headers.date;
    var requestTime = response.elapsedTime;
    calculateTimeDiff(remoteServerTime, requestTime);
    //console.log('the request headers date ' + response.headers.date);
    //console.log('The actual time elapsed:', response.elapsedTime);
    //console.log(response.timings);
});

function calculateTimeDiff(remoteServerTime, requestTime){
    var localServerTime = new Date(Date.now()).toTimeString();
    var formattedLocal = moment(localServerTime, "HH:mm:ss").format("hh:mm:ss A");
    var formattedRemote = moment(remoteServerTime, "HH:mm:ss").format("hh:mm:ss A");
    //console.log(formattedLocal)
    var timeDiff = moment.utc(moment(formattedLocal,"HH:mm:ss.SSSZ").diff(moment(formattedRemote,"HH:mm:ss.SSSZ"))).format("HH:mm:ss.SSSZ")
    
    var ms = moment(formattedLocal,"DD/MM/YYYY HH:mm:ss").diff(moment(formattedRemote,"DD/MM/YYYY HH:mm:ss"));
    var d = moment.duration(ms);
    var s = d.format("hh:mm:ss");
    console.log(s);
};