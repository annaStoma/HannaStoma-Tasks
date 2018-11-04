console.log('task 1 ---------------------');
//Найти все простые числа до заданного n.
//Простые числа - это те числа, которые делятся
//только на себя и на 1. 1 <= n 1 000 000 000  \
function simpleNumbers(n) {
    var summ = 0;
    for ( var i = 1; i < n; i++)
    {
        for (m = 1; m < i; m++)
        {
            if (i % m == 0)
                i++;
        }
        summ++; 
    }
    return summ;
}
console.log("The number of prime numbers is " + simpleNumbers(50));
   
console.log('task 2 ------------------');
//Найти первые n простых чисел.
//1 =< n <= 1000000
function firstSimpleNumbers(n) {
    numbers = []; 
    var count = 1;
    if (count <= n) {
        for ( var i = 1; i < 10; i++) {
            for (m = 1; m < i; m++) {
                if (i % m == 0)
                    i++;
            }
            console.log(count + " : " + i);
            count++;
        } 
        return numbers;
    }
}
console.log('First 20 prime numbers:');
console.log(firstSimpleNumbers(20));

console.log('task 3 ---------------------');
//Найти сумму первых n четных чисел фибоначчи. 
//Числа фибоначчи - первые два числа равны 1 и 1,
//а каждое последующее число равно сумме
//двух предыдущих чисел. 1 <= n <= 100000
function fibSumm(d) {
    var fibNumbers = new Array(d);
    var summ = 0;
    for (var i = 2; i <= fibNumbers.length - 1; i++) {
        fibNumbers[0] = fibNumbers[1] = 1;
        fibNumbers[i] = fibNumbers[i - 2] + fibNumbers[i - 1];
        if (fibNumbers[i] % 2 == 0 && fibNumbers[i] !== 1) {
            summ += fibNumbers[i];
        }
    }
    return summ;
}
console.log('Сумма четных  = ' + fibSumm(10));

console.log('task 4 ---------------------');
// Серия чисел, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317 
// (^ - степень числа). Найдите 10 последних цифр
//  результата такой последовательности, для заданного n. 
//  1 <= n <= 1000
function lastTenNumbers(n) {
    var summ = 0;
    var i = 1;
    for (i = 1; i <= n; i++) {
        var mult = Math.pow(i, i);
        summ += mult;
    }
    console.log("Сумма: " + summ);
    var s = '' + summ;
    var stringOfNumbers = s.substring(s.length - 10);
    return stringOfNumbers;
}
console.log('10 последних цифр суммы: ' + lastTenNumbers(10));
console.log('task 5 ---------------------');

function Average(a,b,c,d,e) {
    // Найти среднее арифметическое чисел из массива.
    // [1, 2, 3, 4, 5]
    var summ = 0;
    for (var i = 0; i <= arguments.length - 1; i++) {
        summ += arguments[i];
    }
    var result = summ / arguments.length;
    return result;
}
console.log('Среднее арифметическое:' + Average(1, 2, 3, 4, 5));
console.log('task 6 ---------------------');
// Найти максимальное число в массиве.
// [1, 2, 3, 4, 5]
function maxNumber(a,b,c,d,e) {
    var i = 0;
    for (i = 0; i <= arguments.length - 1; i++) {
    }
    var max = arguments[0];
    for (i = 0; i <= arguments.length - 1; i++) {
        if (arguments[i] > arguments[0]) {
            arguments[0] = arguments[i];
        }
    }
    return arguments[0];
}
console.log('Max is :' +  maxNumber(1, 2, 3, 4, 5));
console.log('task 7 ---------------------');
// Найдите все уникальные строки в массиве.
// [1, 'word', 1, 'word', 'word', 'word1']
// [1, 'word', 'word1']
function uniqueString(a,b,c,d,e,s) {
    var myArray = [];
    for (var i = 0; i < arguments.length; i++) {
        if (myArray.indexOf(arguments[i]) == -1)
            myArray.push(arguments[i]);
    }
    return myArray;
}
console.log("уникальные строки в массиве: [1, 'word', 1, 'word', 'word', 'word1']  это " + uniqueString(1, 'word', 1, 'word', 'word', 'word1'));
console.log('task 8 ---------------------');
// Определить, является ли фраза/слово палиндромом
// ДОХОД
// ИСТИНА
function isPalindrome(word) {
    var wordSplit = word.split('');
    var wsr = wordSplit.reverse().join('');
    if (word == wsr)
    {
        return true;
        console.log("dfdfdf");
    }
    else 
    {
        return false;
    }
}
console.log('Слово полином: ' + isPalindrome('доход'));
 

console.log('task 9 ---------------------');
// Найти сумму цифр данного числа
// "564674474"
// 47
function summOfNumbers(n) {
    var stroka = String(n).split('');
    var summ = 0;
    for (i = 0; i <= stroka.length - 1; i++) {
        summ += Number(stroka[i]);
    }
    return summ;
}
console.log('сумма цифр = ' + summOfNumbers(564674474));
 
 
