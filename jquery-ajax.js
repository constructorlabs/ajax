function getData() {
  $.ajax({
    url: 'http://www.omdbapi.com',
    data: {
      s: "batman",
      apikey: "XXX"
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
