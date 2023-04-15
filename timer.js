var countdate = new Date("April 5, 2023 15:37:25").getTime();
 
var a = setInterval(function() {
 
  var current = new Date().getTime();
 
  var differ = countdate - current;
 
  var days = Math.floor(differ / (1000 * 60 * 60 * 24));
  var hours = Math.floor((differ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((differ % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((differ % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (differ < 0) {
    clearInterval(a);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 2000); 
