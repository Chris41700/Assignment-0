function fizzBuzz(start, end) {
    let multiOfThree = "Fizz";
    let multiOfFive = "Buzz";
    let multiofThreeAndFive = "FizzBuzz";
    let arr = [];

    for (start; start <= end; start++) {
        if (start % 3 === 0 && start % 5 === 0)
            arr.push(multiofThreeAndFive);
        else if (start % 3 === 0)
            arr.push(multiOfThree);
        else if (start % 5 === 0)
            arr.push(multiOfFive)
        else
            arr.push(start);
    }

    return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;