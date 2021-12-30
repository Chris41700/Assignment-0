function frequencyCounter(word) {
    let freq = {};

    for (var i = 0; i < word.length; i++) {
        if (freq[word.charAt(i)])
            freq[word.charAt(i)]++;
        else
            freq[word.charAt(i)] = 1;
    }

    return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;