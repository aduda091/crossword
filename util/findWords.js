const shuffle = require('./shuffle');
const allWords = require('../assets/wordlist');
const filteredWords = allWords.filter(el => el.length > 3);

module.exports = targetWord => {
    const targetLength = targetWord.length;
    // shuffle wordlist so each time we get different words
    const shuffledWords = shuffle([...filteredWords]);

    const foundWords = [];

    // start from begginning of shuffled words and try to find if they contain the letters, if so - add them to an
    // array of objects which have word and index pairs (and more)

    for (let i = 0; i < targetLength; i++) {
        const letterToFind = targetWord[i];

        //shuffledWords.forEach(word => {
        for (let j = 0; j < shuffledWords.length; j++) {
            const word = shuffledWords[j];
            // skip target word
            if (word === targetWord) {
                continue;
            }

            // skip already found words
            if (foundWords.findIndex(el => el.word == word) > -1) {
                continue;
            }


            if (word.includes(letterToFind)) {
                const foundIndex = word.indexOf(letterToFind);
                const result = {
                    letter: letterToFind,
                    word,
                    originalIndex: i,
                    indexInWord: foundIndex,
                };

                foundWords.push(result);
                break;
            }
        }
    }

    return foundWords;
};
