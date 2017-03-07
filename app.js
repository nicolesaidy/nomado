fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
  return response.json();
}).then(function(data){
  var trips = document.querySelector('#trips');
  trips.innerHTML = '';
  data.forEach(function(user){
    trips.innerHTML += "<div class='card'><h3>" + user.name + "</h4>" +
    "<p>" + user.address.street + "</p></div>";
  });
});
