console.log('task 1 ---------------------');
//Найти все простые числа до заданного n.
//Простые числа - это те числа, которые делятся
//только на себя и на 1. 1 <= n 1 000 000 000
function task1(n) {
    var i;
    var summ = 0;
    for (i = 1; i < n; i++) {
        for (m = 1; m < i; m++) {
            if (i % m == 0)
                i++;
        }
        summ++;
    }
    console.log("The number of prime numbers from 1 to " + n + " is " + summ);
}
task1(100);
console.log('task 2 ---------------------');
//Найти первые n простых чисел.
//1 =< n <= 1000000
function task2(n) {
    arr = [];
    var i;
    var count = 0;
    console.log('First ' + n + ' prime numbers:');
    for (i = 1; i < n; i++) {
        for (m = 1; m < i; m++) {
            if (i % m == 0)
                i++;
        }
        count++;
        console.log(count + " : " + i);
    }
}
task2(20);
console.log('task 3 ---------------------');
//Найти сумму первых n четных чисел фибоначчи. 
//Числа фибоначчи - первые два числа равны 1 и 1,
//а каждое последующее число равно сумме
//двух предыдущих чисел. 1 <= n <= 100000
function task3(d) {
    var myArr = new Array(d);
    var summ = 0;
    for (var i = 2; i <= myArr.length - 1; i++) {
        myArr[0] = myArr[1] = 1;
        myArr[i] = myArr[i - 2] + myArr[i - 1];
        if (myArr[i] % 2 == 0 && myArr[i] !== 1) {
            summ += myArr[i];
        }
    }
    console.log('Первые ' + d + ' чисел фибоначи: ' + myArr);
    console.log('Сумма четных из них = ' + summ);
}
task3(8);
console.log('task 4 ---------------------');
// Серия чисел, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317 
// (^ - степень числа). Найдите 10 последних цифр
//  результата такой последовательности, для заданного n. 
//  1 <= n <= 1000
function task4(n) {
    var summ = 0;
    var i = 1;
    for (i = 1; i <= n; i++) {
        var mult = Math.pow(i, i);
        summ += mult;
    }
    console.log("Сумма: " + summ);
    var s = '' + summ;
    var stroka = s.substring(s.length - 10);
    console.log('10 последних цифр суммы: ' + stroka);
}
task4(15);
console.log('task 5 ---------------------');

function task5() {
    // Найти среднее арифметическое чисел из массива.
    // [1, 2, 3, 4, 5]
    var summ = 0;
    for (var i = 0; i <= arguments.length - 1; i++) {
        summ += arguments[i];
    }
    var result = summ / arguments.length;
    console.log('Среднее арифметическое:' + result);
}
task5(1, 2, 3, 4, 5);
console.log('task 6 ---------------------');
// Найти максимальное число в массиве.
// [1, 2, 3, 4, 5]
function task6() {
    var i = 0;
    for (i = 0; i <= arguments.length - 1; i++) {
        console.log('Элемент ' + i + ': ' + arguments[i]);
    }
    var max = arguments[0];
    for (i = 0; i <= arguments.length - 1; i++) {
        if (arguments[i] > arguments[0]) {
            arguments[0] = arguments[i];
        }
    }

    console.log('Максимальное:' + arguments[0]);
}
task6(1, 2, 3, 4, 5);
console.log('task 7 ---------------------');
// Найдите все уникальные строки в массиве.
// [1, 'word', 1, 'word', 'word', 'word1']
// [1, 'word', 'word1']
function task7() {
    var myArray = [];
    for (var i = 0; i < arguments.length; i++) {
        if (myArray.indexOf(arguments[i]) == -1)
            myArray.push(arguments[i]);
    }
    console.log(myArray);
}
task7(1, 'word', 1, 'word', 'word', 'word1');
console.log('task 8 ---------------------');
// Определить, является ли фраза/слово палиндромом
// ДОХОД
// ИСТИНА
function task8(word) {
    var wordSplit = word.split('');
    var wsr = wordSplit.reverse().join('');
    //alert( str.split('') ); // т,е,с,т
    console.log(word == wsr);
}
task8('доход');
console.log('task 9 ---------------------');
// Найти сумму цифр данного числа
// "564674474"
// 47
function task9(n) {
    var stroka = String(n).split('');
    var summ = 0;
    for (i = 0; i <= stroka.length - 1; i++) {
        summ += Number(stroka[i]);
    }
    console.log(summ);
}
task9(564674474);