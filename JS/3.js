// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной 
// части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, 
// то должно получиться «20:31:15», а не «20:30:75».

function Time(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
}

function displayTimeHMS(timeObj) {
    let h = timeObj.hours;
    let m = timeObj.minutes;
    let s = timeObj.seconds;
    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    alert(`${h}:${m}:${s}`);
}

function getTimeInSeconds(timeObj) {
    let h = timeObj.hours;
    let m = timeObj.minutes;
    let s = timeObj.seconds;
    return h * 3600 + m * 60 + s;
};

function getTimeInHMS(s, timeObj) {
    let h = (s - s % 3600) / 3600;
    s -= h * 3600;
    let m = (s - s % 60) / 60;
    s -= m * 60;
    timeObj.hours = h;
    timeObj.minutes = m;
    timeObj.seconds = s;
};

function changeTimeInSeconds(timeObj, changeInSeconds) {
    let s = getTimeInSeconds(timeObj) + changeInSeconds;
    getTimeInHMS(s, timeObj);
};

function changeTimeInMinutes(timeObj, changeInMinutes) {
    let s = getTimeInSeconds(timeObj) + (changeInMinutes * 60);
    getTimeInHMS(s, timeObj);
};

function changeTimeInHours(timeObj, changeInHours) {
    let s = getTimeInSeconds(timeObj) + (changeInHours * 3600);
    getTimeInHMS(s, timeObj);
};



let time1 = new Time(3, 6, 6);

// changeTimeInSeconds(time1, -55);
// changeTimeInMinutes(time1, 55);
changeTimeInHours(time1, 5);
displayTimeHMS(time1);