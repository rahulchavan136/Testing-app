 
function findLargestNumber(num1, num2, num3) {
    let largest;
    if (num1 > num2 && num1 > num3) {
        largest = num1;
    } else if (num2 > num1 && num2 > num3) {
        largest = num2;
    } else {
        largest = num3;
    }
    console.log("The largest number is " + largest); 
    return largest;
}

export default findLargestNumber