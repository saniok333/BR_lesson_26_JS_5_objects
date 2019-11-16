// 1. Создать объект, описывающий автомобиль(производитель, модель, год выпуска, средняя скорость),
//     и следующие функции для работы с этим объектом:

//     Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function Car(brand, model, yearOfIssue, averageSpeed) {
    this.brand = brand;
    this.model = model;
    this.yearOfIssue = yearOfIssue;
    this.averageSpeed = averageSpeed;
}

function showCarInform(carObj) {
    alert(`Brand: ${carObj.brand}\nModel: ${carObj.model}\nYear Of Issue: ${carObj.yearOfIssue}\nAverage Speed: ${carObj.averageSpeed}`);
}

function calcTime(carObj, distance) {
    let time = +distance / (carObj.averageSpeed);
    let bonusTime = time / 4 - ((((time / 4) * 10) % 10) / 10);
    if (!(time % 4)) bonusTime--;
    console.log(bonusTime);
    time += bonusTime;
    alert(`Time to overcome the distance: ${time}`);
}

let car1 = new Car("ZAZ", 965, 1960, 10);

showCarInform(car1);
calcTime(car1, 85);