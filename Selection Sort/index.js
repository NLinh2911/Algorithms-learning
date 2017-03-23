/**
 * Created by Linh Ngo in 18/03/2017
 */
//==================================
// SELECTION SORT WITH JAVASRIPT
//==================================
const testArr = [34, 23, 12, 45, 9, 1, -24];
// Sort in ascending order
const selectionSort = (arr) => {
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        let minNum = arr[i];
        // run through Arr to find if any num is smaller than minNum
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < minNum) {
                minNum = arr[j];
            }
        }
        // after finish checking through the subarray
        // change the position of the minNum 
        if (arr.indexOf(minNum) !== i) {
            arr[arr.indexOf(minNum)] = arr[i];
            arr[i] = minNum;
        };
    }
    return arr;
}
console.log(selectionSort(testArr));

// sorting in descending order
const selectionDesSort = (arr) => {
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        let maxNum = arr[i];
        // get a copy of the array from the second num to the last one
        //let checkArr = arr.slice(1);
        // run through checkArr to find if any num is bigger than maxNum
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > maxNum) {
                maxNum = arr[j];
            }
        }
        // after finish checking through the subarray
        // change the position of the maxNum 
        if (arr.indexOf(maxNum) !== i) {
            arr[arr.indexOf(maxNum)] = arr[i];
            arr[i] = maxNum;
        };
    }
    return arr;
}
console.log(selectionDesSort(testArr));

// Another way to write algorithm; break the algorithm into separate functions
const swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

const indexOfMinimum = (array, startIndex) => {
    let minValue = array[startIndex];
    let minIndex = startIndex;
    for (let i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

const selectionSort2 = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }
};

const testArr2 = [22, 11, 99, 88, 9, 7, 42];
selectionSort2(testArr2);
console.log(testArr2);

const testArr3 = [22, 11, 99, 0, 9, 7, -42, 99, 7];
selectionSort2(testArr3);
console.log(testArr3);

// SORTING ARRAY OF OBJECTS BY A PROPERTY
const persons = [
    {
        "name": "john",
        "age": "23"
    },
    {
        "name": "harry",
        "age": "21"
    },
    {
        "name": "jack",
        "age": "25"
    }
];
const selectionSort3 = (arr, testProp) => {
    // loop through the array of objects
    for (let i = 0; i < arr.length; i++) {
        let minObj = arr[i];
        let minValue = minObj[testProp];
        // run through arr to find if any obj has smaller value of testProp than minObj
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j][testProp] < minValue) {
                minObj = arr[j];
            }
        }
        // after finish checking through the subarray
        // change the position of the minNum 
        if (arr.indexOf(minObj) !== i) {
            arr[arr.indexOf(minObj)] = arr[i];
            arr[i] = minObj;
        };
    }
    return arr;
}
console.log(selectionSort3(persons, "age"));