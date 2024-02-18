function firstLetterName(name) {
    alert(`The name ${name} starts with the letter ${name[0]}`);
}


function divisibleByTwo(number) {
    return number % 2 === 0;
}


function largestNum(arr) {
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    return largest;
}


firstLetterName('Michael'); 
console.log(divisibleByTwo(10)); 
console.log(largestNum([3, 5, 7, 1, 9, 0])); 
