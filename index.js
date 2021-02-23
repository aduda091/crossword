const express = require('express');
const app = express();
const cors = require('cors');
const generateController = require('./controllers/generateController');

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('public'))

app.use('/generate', generateController);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
