const express = require('express');
const app = express();

const generateController = require("./controllers/generateController");

const port = process.env.PORT || 3000;

app.use('/generate', generateController);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
