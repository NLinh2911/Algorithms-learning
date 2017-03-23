/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
  const doSearch = (array, targetValue) => {
    let min = 0;
    let max = array.length - 1;
    let guess;
    let count = 0;
    while(min <= max){
        guess = Math.floor((min + max) / 2);
        count ++;
        //console.log(guess);
        if(array[guess] === targetValue){
            console.log(count);
            return guess;
        }
        else if(array[guess] < targetValue){
            min = guess + 1;
        }
        else{
            max = guess - 1;
        }
    }
    return -1;
};

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const result = doSearch(primes, 73);
console.log("Found prime at index " + result);

console.log(doSearch(primes, 73)); // 20
console.log(doSearch(primes, 3)); // 1
console.log(doSearch(primes, 83)); // 22