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

//fetch the json object
fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
  return response.json();
})
.then(function(data){
  var trips = document.querySelector("#trips");
  trips.innerHTML = "";
  data.forEach(function(user){
    trips.innerHTML += "<div class='card'><h3>" + user.title + "</h3>" + "<p>" + user.body + "</p></div>";
  });
});
