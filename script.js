// exercise 1 ////////////////////////////
console.log('exercise 1');

var arr = [1, 2, 3, 4];

function getFirstValue(arr) {
    return arr[0];
}

console.log(getFirstValue(arr));

// exercise 2 ////////////////////////////
console.log('\nexercise 2');

arr = [1, 2, 3];

function drop(arr, value) {
    return arr.slice(value, arr.length);
}

console.log(drop(arr, 1));

// exercise 3 ////////////////////////////
console.log('\nexercise 3');

function concat(...arrs) {
    return [arrs.reduce((accu, item) => accu.concat(item))];
}

console.log(...concat([1, 2], [3, 4], [5, 6]));

// exercise 4 ////////////////////////////
console.log('\nexercise 4');

function arrayOfMultiples(num, length) {
    myArr = new Array(length).fill(0);
    return myArr.reduce((_, item) => myArr.map(_ => item += num));
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));

// exercise 5 ////////////////////////////
console.log('\nexercise 5');

function sevenBoom(arr) {
    return `${arr.toString().includes('7') ? 'Boom' : 'there is no 7 in the array'}`;
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));

//exercise 6 ////////////////////////////
console.log('\nexercise 6');

function getLengths(...arrs) {
    return arrs.toString().split(',').length;
}

console.log(getLengths([1], [2, 3]));
console.log(getLengths([1], [2, [3, 4]]));
console.log(getLengths([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLengths([1, [2], 1, [2], 1]));

// exercise 7 ////////////////////////////
console.log('\nexercise 7');

function getValue(str) {
    var newStr = '';
    str.split('').forEach(x => { x != '[' && x != ']' ? newStr += x : null });
    return newStr == '' ? 'no string was found' : newStr;
}

console.log(getValue('[[[[[[[[[[Hello, World!]]]]]]]]]]]]]'));
console.log(getValue('[[[[[[[[[[]]]]]]]]]]]]]'));

// exercise 8 ////////////////////////////
console.log('\nexercise 8');

function zerosToEnd(arr) {
    var newArr = [], zeros = [];
    arr.forEach(item => item == 0 ? zeros.push(item) : newArr.push(item));
    return newArr.concat(zeros);
}

console.log(zerosToEnd([1, 2, 0, 0, 4, 0, 5]));
console.log(zerosToEnd([0, 0, 2, 3, 5]));
console.log(zerosToEnd([4, 4, 5]));
console.log(zerosToEnd([0, 0]));

// exercise 9 ////////////////////////////
console.log('\nexercise 9');

Array.prototype.fill((char, start = 0, end = this.length) => {
    return this.splice(start, end, char);
});

console.log([1, 2, 3].fill('a'));
console.log([1, 2, 3].fill(2));
console.log([4, 6, 8, 10].fill('*', 1, 3));