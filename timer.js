let CountDownDate;
let interval; 

document.addEventListener('DOMContentLoaded', () =>
{
    CountDownDate = new Date("May 29, 2021 16:00:0").getTime();
    Timer();
    interval = setInterval(Timer, 1000);
});


function Timer()
{
    const now = new Date().getTime(); 
    const Time = CountDownDate - now; 
    if(Time < 0)
    {
        document.querySelector("#clock").innerHTML = "Expired";
        clearInterval(interval);
    }

    const days = Math.floor(Time / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((Time % (1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    const minutes = Math.floor((Time % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((Time % (1000 * 60)) / 1000); 

    document.querySelector("#days").innerHTML = `${days}`;
    document.querySelector("#hours").innerHTML = `${hours}`;
    document.querySelector("#minutes").innerHTML = `${minutes}`;
    document.querySelector("#seconds").innerHTML = `${seconds}`;
}
