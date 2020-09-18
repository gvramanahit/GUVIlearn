var arrayA = [0, 1, 2, 8, 3, 7, 5];
var arrayOne = [0,1,2,3,4,5,6,7,8];


//Function to chunk an array
var chunkArray = function (arrayOne, chunk) {
    var arrayWrap = [];
    for (var i = 0; i < arrayOne.length; i++) {
        //actual implementation(to chunk the array) goes here.
        var arrayTwo = arrayWrap[arrayWrap.length - 1];
        if (!arrayTwo || arrayTwo.length === chunk) {
            arrayWrap[Math.floor(i / chunk)] = [arrayOne[i]];
        }
        else {
            arrayTwo[arrayTwo.length] = arrayOne[i];
        }
    }
    return arrayWrap;
};


//Function to filter out the desired elements from an array and write them into a new array
var filterArray = function (arrayOne) {
    var arrayTwo = [];
    var j = 0;
    for (var i = 0; i < arrayOne.length; i++) {
        //actual implementation goes here.
        if (filterLogic(arrayOne[i])) {
            arrayTwo[j] = arrayOne[i];
            j++;
        }
    }
    return arrayTwo;
};
var filterLogic = function (element) {
    if (element % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};


//Function to perform reduce
var reduceArray = function (arrayOne, acc) {
    for (var i = 0; i < arrayOne.length; i++) {
        //actual implementation(to add all the even numbers) goes here.
        if (reduceLogic(arrayOne[i])) {
            acc = acc + arrayOne[i];
        }
    }
    return acc;
};
var reduceLogic = function (element) {
    if (element % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};


//Function to perform sum of an array
var sumArray = function (arrayOne) {
    var sum = 0;
    for (var i = 0; i < arrayOne.length; i++) {
        //actual implementation(to sum the elements of an array) goes here.
        sum = sum + arrayOne[i];
    }
    return sum;
};


//Function to find out the first element from an array that satisfies the specified condition.
var findArray = function (arrayOne) {
    var searchVal;
    for (var i = 0; i < arrayOne.length; i++) {
        //actual implementation(to sum the elements of an array) goes here.
        if (arrayOne[i] > 5) {
            searchVal = arrayOne[i];
            i = arrayOne.length;
        }
    }
    return searchVal;
};




document.getElementById('a1').onclick = function(){
    let arrayThree = chunkArray(arrayOne,2);
    console.log(arrayThree);
}
document.getElementById('a2').onclick = function(){
    var arrayThree = filterArray(arrayOne);
    console.log(arrayThree);
}
document.getElementById('a3').onclick = function(){
    var acc = reduceArray(arrayOne, 0);
    console.log(acc);
}
document.getElementById('a4').onclick = function(){
    var sum = sumArray(arrayOne);
    console.log(sum);
}
document.getElementById('a5').onclick = function(){
    var foundVal = findArray(arrayA);
    console.log(foundVal);
}
