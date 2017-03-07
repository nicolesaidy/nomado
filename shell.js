function offlineMode(){
  document.querySelector("body").classList.add("offline");
}

window.addEventListener('offline', offlineMode);

window.addEventListener('online', function(){
  document.querySelector("body").classList.remove("offline");
});

if (!navigator.onLine){
  offlineMode();
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
  return response.json();
})
.then(function(users){
  var listUsers = document.querySelector("#trips");
  listUsers.innerHTML = "";
  users.forEach(function(user){
    listUsers.innerHTML += "<div class='card'> <h3>" + user.name + "</h3> <p>" + user.address.city + "</p> </div>";
  })
});
