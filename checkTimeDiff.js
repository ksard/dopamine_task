var moment = require('moment');
var request = require('request');

//thus I am using the time parameter
request.get({ url: 'http://localhost:3050/getTime' }, function (err, response) {
    if(response.body){
        var resJson = JSON.parse(response.body);
        var remoteServerTime = resJson.serverTime;
        var networkDelay = resJson.networkDelay;
        calculateTimeDiff(remoteServerTime,networkDelay);
    }
});

function calculateTimeDiff(remoteServerTime, networkDelay){
    var localServerTime = new Date(Date.now()).toLocaleString();
    var timeDiff = moment.utc(moment(localServerTime,"MM/DD/YYYY HH:mm:ss.SSSZ").diff(moment(remoteServerTime,"MM/DD/YYYY HH:mm:ss.SSSZ"))).format("HH:mm:ss.SSSZ")
    console.log(timeDiff)
};