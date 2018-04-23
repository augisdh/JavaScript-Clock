"use strict";

const secondsHand = document.querySelector(".sec");
const minutesHand = document.querySelector(".min");
const hoursHand = document.querySelector(".hour");

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // Insta transition when arrow is on 12h     
    if(secondsDegrees === 90){
        secondsHand.style.transition = "none";
    } else {
        secondsHand.style.transition = "all 0.2s";
    }

    if(minutesDegrees === 90){
        minutesHand.style.transition = "none";
    } else {
        minutesHand.style.transition = "all 0.2s";
    }
}

setInterval(setDate, 1000);
