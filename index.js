const express = require("express");
const app = express();

app.use(express());

app.get('/', (req, res) => {
    res.send('Prisma Tutorial');
  });

app.listen(3000, () => console.log(`Server running at port ${3000}`));