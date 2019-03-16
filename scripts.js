var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hoursNow > 18){
    greeting = 'Good evening';
}   else if (hourNow > 12) {
    greeting = 'Good Afternoon';
}   else if (hourNow > 0){
    greeting = 'Good Morning';
}   else{
    greeting = 'Welcome';
}
document.write(greeting);
console.log(hoursNow)