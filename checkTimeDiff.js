// var child_process = require('child_process');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var moment = require('moment');
//below is the local server time
var localServerTime = new Date(Date.now()).toString();

//below is remote server time
var xmlHttp;
function srvTime(){
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                console.log("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD','https://www.google.com'.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

var st = srvTime();
var remoteServerTimeFormated = moment().format(st);
//var localServerTimeFormated = moment().format(localServerTime);
var dateNow = new Date(Date.now()).toTimeString();
console.log(dateNow);
//for less than 24 hours difference use below:
var timeDiff = moment.utc(moment(localServerTime,"DD/MM/YYYY HH:mm:ss").diff(moment(localServerTime,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")
console.log(timeDiff);
//var date = new Date(st);
//console.log('Remote Server time is:   ' + st);
//console.log(localServerTime - st);