(function () {
    const API_URL = 'http://localhost:3000/generate';
    const targetWordInput = document.getElementById('targetWord');
    const wordInputForm = document.getElementById('wordInputForm');
    const resultContainer = document.getElementById('resultContainer');
    let matchingWords;

    const handleWordInputFormSubmit = async event => {
        event.preventDefault();

        const targetWord = targetWordInput.value?.trim();
        if (!targetWord) return;

        try {
            matchingWords = (await axios.get(`${API_URL}/${targetWord}`)).data;
            matchingWords.forEach(wordEntry => {
                appendWord(wordEntry);
            })
        } catch (e) {
            console.error(e);
        }
    };

    const appendWord = wordEntry => {
        const wordWrapper = document.createElement("div");
        wordWrapper.textContent = wordEntry.word;
        resultContainer.appendChild(wordWrapper);
    }

    wordInputForm.addEventListener('submit', handleWordInputFormSubmit);
})();
