const router = require('express').Router();
const findWords = require('../util/findWords');

router.get('/:word', (req, res) => {
    const targetWord = req.params.word;
    if (!targetWord) {
        return res.status(422).send('Missing word');
    }
    const result = findWords(targetWord);

    if (result.length === 0) {
        return res.status(404).send('No matching words found');
    }

    res.send(result);
});

module.exports = router;
