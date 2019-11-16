// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.


function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

function calcGreatestCommonFactor(first, second) {
    let gcf = 1;
    for (let i = 2;
        ((i <= Math.abs(first)) && (i <= Math.abs(second))); i++)
        if ((!(first % i)) && (!(second % i))) gcf = i;
    return gcf;
}

function calcFractAddition(component1, component2, component3) {
    let sumNumerator = component1.numerator * component2.denominator + component2.numerator * component1.denominator;
    let sumDenominator = component1.denominator * component2.denominator;
    component3.numerator = sumNumerator / (calcGreatestCommonFactor(sumNumerator, sumDenominator));
    component3.denominator = sumDenominator / (calcGreatestCommonFactor(sumNumerator, sumDenominator));
}

function calcFractSubstraction(component1, component2, component3) {
    let subNumerator = component1.numerator * component2.denominator - component2.numerator * component1.denominator;
    let subDenominator = component1.denominator * component2.denominator;
    component3.numerator = subNumerator / (calcGreatestCommonFactor(subNumerator, subDenominator));
    component3.denominator = subDenominator / (calcGreatestCommonFactor(subNumerator, subDenominator));
}

function calcFractMultiplication(component1, component2, component3) {
    let mulNumerator = component1.numerator * component2.numerator;
    let mulDenominator = component1.denominator * component2.denominator;
    component3.numerator = mulNumerator / (calcGreatestCommonFactor(mulNumerator, mulDenominator));
    component3.denominator = mulDenominator / (calcGreatestCommonFactor(mulNumerator, mulDenominator));
}

function calcFractDividing(component1, component2, component3) {
    let divNumerator = component1.numerator * component2.denominator;
    let divDenominator = component1.denominator * component2.numerator;
    component3.numerator = divNumerator / (calcGreatestCommonFactor(divNumerator, divDenominator));
    component3.denominator = divDenominator / (calcGreatestCommonFactor(divNumerator, divDenominator));
}

let fraction1 = new Fraction(3, 5);
let fraction2 = new Fraction(7, 9);
let fraction3 = new Fraction();

calcFractAddition(fraction1, fraction2, fraction3);

console.log(fraction3);

calcFractSubstraction(fraction1, fraction2, fraction3);

console.log(fraction3);

calcFractMultiplication(fraction1, fraction2, fraction3);

console.log(fraction3);

calcFractDividing(fraction1, fraction2, fraction3);

console.log(fraction3);