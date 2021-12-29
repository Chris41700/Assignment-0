function titleCaseEdit(title) {
    const capitalizedWord = title.toLowerCase().split(" ");

    for (var i = 0; i < capitalizedWord.length; i++) {
        capitalizedWord[i] = capitalizedWord[i].replace(capitalizedWord[i].charAt(0), capitalizedWord[i].charAt(0).toUpperCase());
    }

    return capitalizedWord.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;