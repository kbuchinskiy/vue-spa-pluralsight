const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const innerHTML = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
const port = process.env.PORT || 3000;

app.use('/dist', express.static(path.resolve(__dirname, "./dist")));

require('./build/dev-server')(app);

app.get('*', (req, res) => {
    res.write(innerHTML);
    res.end();
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});