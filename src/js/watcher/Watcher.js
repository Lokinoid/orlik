
export default class Watcher {
    
    constructor() {
    }
    
    httpGetAsync(url, callback) {
        var xmlHttp = new XMLHttpRequest();
        
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.setRequestHeader('Accept', '*/*');
                
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", url, true); // true for asynchronous 
        xmlHttp.send(null);
    }

    Run() {
        var url = 'http://www.ati.su',
            callback = function(response) {
                console.log(response);
            };
        
        this.httpGetAsync(url, callback);
    }

}