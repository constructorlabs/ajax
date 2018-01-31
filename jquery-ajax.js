function getData() {
  $.ajax({
    url: 'http://www.omdbapi.com',
    data: {
      s: "batman",
      apikey: "2cda7206"
    },
    type: 'GET',
    success( response, textStatus, jqXHR ){
      console.log(response)
    }, error(jqXHR, message, error){
      console.log(message);
    }
  });
}

getData();
