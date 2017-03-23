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
