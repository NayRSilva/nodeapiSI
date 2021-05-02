const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op= db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) =>{
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(()=>{
        res.send({message: "user registered"})
    }).catch(err =>{
        res.status(500).send({message: err.message})
    });
}

exports.signin = (req, res)=>{
    User.findOne({
        where:{
            username: req.body.username
        }
    }).then(user=>{
        if(!user){
            return res.status(404).send({message: "User not found"});
        }

        var passwordisValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordisValid){
            return res.status(401).send({
                accessToken:null,
                message: "wrong password"
            })
        }

        var token = jwt.sign({id: user.id}, config.secret,{
            expiresIn: 86400
        })

        res.status(200).send({
            id: user.id,
            username: user.username,
            emails: user.email,
            accessToken: token
        })
    }).catch(err =>{
        res.status(500).send({message: err.message})
    })
}