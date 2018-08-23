var moment = require('moment');
var request = require('request');

request.get({ url: 'http://localhost:3050/getTime' }, function (err, response) {
    if(response.body){
        var resJson = JSON.parse(response.body);
        var remoteServerTime = resJson.serverTime;
        var networkDelay = resJson.networkDelay;
        calculateTimeDiff(remoteServerTime,networkDelay);
    }
});

function calculateTimeDiff(remoteServerTime, networkDelay){
    //the network delay should be added to the remote server time since the current time 
    //is now and the remote server time is the delay plus the remote server time
    var localServerTime = new Date(Date.now()).toLocaleString();
    var timeDiff = moment.utc(moment(localServerTime,"MM/DD/YYYY HH:mm:ss.SSSZ").diff(moment(remoteServerTime,"MM/DD/YYYY HH:mm:ss.SSSZ"))).format("HH:mm:ss."+networkDelay+"")
    console.log(timeDiff)
};