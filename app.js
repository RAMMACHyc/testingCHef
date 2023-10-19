const express = require('express')
const { authenticateToken } = require('./middlewares/authenticate');  

const indexRoute = require('./routes/index')


const app = express();
const port = 2000;

app.use(express.json())


 app.use(indexRoute);







app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});

