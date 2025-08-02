const express = require("express");
const connectedDB = require("./Utils/DB");
const user=require('./Model/UserSchema')
const app = express();
const cors=require('cors')
const port = 4000;
const userrouter=require("./Routes/UserAuthRoutes")
app.use(express.json()); // parse JSON
app.use(cors())
// Connect to the Database
connectedDB();
// user router
app.use('/Registration',userrouter)
app.use('/Login',userrouter)
// Define routes
app.get('/', (req, res) => {
    res.send("Thank you");
});

// Start the server
app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
});
