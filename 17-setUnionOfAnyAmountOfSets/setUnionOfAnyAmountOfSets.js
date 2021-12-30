function setUnionOfAnyAmountOfSets(...args) {
    let union = new Set();

    for (let i of args)
        union.add(i);

    return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;