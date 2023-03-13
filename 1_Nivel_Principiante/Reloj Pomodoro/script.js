//VARIABLES

const workTittle = document.getElementById("work");
const breakTittle = document.getElementById("break");
const audio = document.getElementById("audio");

let workTime = 25;
let breakTime = 5;
let seconds = "00";

//DISPLAY

window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTittle.classList.add("active");
};

//START TIMER

function start() {
  //change buttom
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  //change the time
  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  //contdown
  const timerFuntion = () => {
    //change display
    document.getElementById("minutes").innerHTML = workMinutes < 10 ? `0${workMinutes}`: workMinutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    //start
    seconds = seconds - 1;
    

    if (seconds === 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          //start break
          workMinutes = breakMinutes;
          breakCount++;

          //change the panel
          workTittle.classList.remove("active");
          breakTittle.classList.add("active");
        } else {
          //continue work
          workMinutes = workTime;
          breakCount++;

          //change the panel
          breakTittle.classList.remove("active");
          workTittle.classList.add("active");
        }
        //play audio
        audio.play();
      }
      seconds = 59;
    }
  };

  //start countdown
  setInterval(timerFuntion, 1000);
}
