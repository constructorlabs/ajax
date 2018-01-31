fetch('http://www.omdbapi.com/?s=batman&apikey=2cda7206', {method: 'GET'})
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    debugger;
  }).catch(function() {
    debugger;
  });
