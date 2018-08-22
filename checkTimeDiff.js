// var child_process = require('child_process');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var moment = require('moment');
//below is the local server time
var localServerTime = new Date(Date.now()).toTimeString();

//below is remote server time
var xmlHttp;
function srvTime(){
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err) {
      console.log(err);
    }
    xmlHttp.open('HEAD','https://www.google.com'.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

var st = srvTime();
var rem = new Date(st).toTimeString();
console.log(st);
//for less than 24 hours difference use below:
var timeDiff = moment.utc(moment(localServerTime,"HH:mm:ss.SSSZ").diff(moment(localServerTime,"HH:mm:ss.SSSZ"))).format("HH:mm:ss.SSSZ")
console.log(timeDiff);