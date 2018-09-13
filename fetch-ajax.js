fetch('https://swapi.co/api/people')
  .then(function(response) {
    return response.json();
  }).then(function(body){
    console.log(body);
  }).catch(function(error) {
    console.log(error);
  });
