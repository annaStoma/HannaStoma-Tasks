console.log('task 1 ---------------------');
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
function firstSimpleNumbers(n) {
    numbers = []; 
    var count = 1;
    if (count <= n) {
        for ( var i = 1; i < 10; i++) {
            for (m = 1; m < i; m++) {
                if (i % m == 0)
                    i++;
            }
            count++;
        } 
        return numbers;
    }
}
console.log('First 20 prime numbers:');
console.log(firstSimpleNumbers(20));

console.log('task 3 ---------------------');
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
function lastTenNumbers(n) {
    var summ = 0;
    var i = 1;
    for (i = 1; i <= n; i++) {
        var mult = Math.pow(i, i);
        summ += mult;
    }
    var s = '' + summ;
    var stringOfNumbers = s.substring(s.length - 10);
    return stringOfNumbers;
}
console.log('10 последних цифр суммы: ' + lastTenNumbers(10));

console.log('task 5 ---------------------');
function Average(a,b,c,d,e) {
    var summ = 0;
    for (var i = 0; i <= arguments.length - 1; i++) {
        summ += arguments[i];
    }
    var result = summ / arguments.length;
    return result;
}
console.log('Среднее арифметическое:' + Average(1, 2, 3, 4, 5));

console.log('task 6 ---------------------');
function maxNumber(myArr) {
    for ( var i = 0; i <= myArr.length - 1; i++) {
    }
    var max = myArr[0];
    for (i = 0; i <= myArr.length - 1; i++) {
        if (myArr[i] > myArr[0]) {
            myArr[0] = myArr[i];
        }
    }
    return myArr[0];
}
console.log('Max is :' +  maxNumber([1, 2, 3, 4, 5]));

console.log('task 7 ---------------------');
function uniqueString(arr) {
    var myArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (myArray.indexOf(arr[i]) == -1)
            myArray.push(arr[i]);
    }
    return myArray;
}
console.log("уникальные строки в массиве: [1, 'word', 1, 'word', 'word', 'word1']  это " + uniqueString([1, 'word', 1, 'word', 'word', 'word1']));

console.log('task 8 ---------------------');
function isPalindrome(word) {
    var wordSplit = word.split('');
    var wsr = wordSplit.reverse().join('');
    if (word == wsr)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
console.log('Слово полином: ' + isPalindrome('доход'));
console.log('task 9 ---------------------');
function summOfNumbers(n) {
    var stroka = String(n).split('');
    var summ = 0;
    for (i = 0; i <= stroka.length - 1; i++) {
        summ += Number(stroka[i]);
    }
    return summ;
}
console.log('сумма цифр = ' + summOfNumbers(564674474));
 
 
