let CountDownDate;
let interval; 

document.addEventListener('DOMContentLoaded', () =>
{
    CountDownDate = new Date("Jul 11, 2019 19:00:0").getTime();
    Timer();
    interval = setInterval(Timer, 1000);
});


function Timer()
{
    var now = new Date().getTime(); 
    var Time = CountDownDate - now; 
    if(Time < 0)
    {
        document.querySelector("#clock").innerHTML = "Expired";
        clearInterval(interval);
    }

    var days = Math.floor(Time / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((Time % (1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((Time % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((Time % (1000 * 60)) / 1000); 

    document.querySelector("#days").innerHTML = `${days}`;
    document.querySelector("#hours").innerHTML = `${hours}`;
    document.querySelector("#minutes").innerHTML = `${minutes}`;
    document.querySelector("#seconds").innerHTML = `${seconds}`;
}