var xhr = new XMLHttpRequest(); // Won't work in IE
xhr.open('GET', 'http://www.omdbapi.com/?s=batman&apikey=2cda7206');
xhr.responseType = 'json';

xhr.onload = function(event) {
  debugger;
};

xhr.onerror = function(event) {
  debugger;
};

xhr.send();
