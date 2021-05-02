

const express = require("express");
const bodyParser= require("body-parser");
const cors = require("cors");

const app = express();



var corsOptions = {
    origin:"localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}))

const db= require("./app/models");

db.sequelize.sync({force:true}).then(()=>{
    console.log("drop and resync");
    initial();
});

app.get("/", (req, res)=>{
    res.json({message: "welcome to api"});
})

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT|| 8080;

app.listen(PORT, ()=>{
    console.log("server is running on port"+PORT);
});

function initial(){
    
}