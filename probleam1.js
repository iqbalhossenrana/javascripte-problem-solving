// Remove duplicate number form array 


const numbers = ['a', 'b', 'c', 'd', 'c', 'b', 'd', 'a'];



function removeDuplicate(numbers) {
    let newNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (newNumber.includes(number) === false) {
            newNumber.push(number);
        }


    }
    return newNumber;
}

const uniqueNumber = removeDuplicate(numbers);
console.log(uniqueNumber);


