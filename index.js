const express = require("express");
const app = express();

app.use(express());

app.listen(3001, () => console.log(`Server running at port ${3001}`));