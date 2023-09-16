const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const dotenv = require('dotenv')


//create user--(evryone)
exports.creatUser = async (req, res) => {
    try {
        const { name, email, phoneNo, password } = req.body;
        if (!(email, phoneNo, name , password)) {
            res.status(400).send("all input is required")
        }
        const old = await User.findOne({ email })
        if (old) {
            return res.status(409).send("user already exist try with other email")
        }
        const pass = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name,
            phoneNo: phoneNo,
            email: email.toLowerCase(),
            password: pass
        })

        const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
            expiresIn: "5h"
        }
        );

        user.token = token;

        res.status(201).send(user)

    } catch (error) {
        res.status(403).json({
            success: false,
            message: "An error occurred while creating the Profile",
            error: error.message
        });
    }
}

//update user details--(only user)
exports.updateUser = async (req, res, next) => {
    let { name, email, phoneNo, oldPassword,password } = req.body;

    const old=await User.findOne({email});

    if(old){
       return res.status(409).send("user already exist")
    }
    const find=await User.findById(req.params.id)

    let pas;
    if(oldPassword && password) {
        if (find && (await bcrypt.compare(oldPassword, find.password))) {
            pas = await bcrypt.hash(password, 10);
            password=pas;
        } else {
            return res.status(409).send("check the password")
        }
    }
    else if(oldPassword && !password){
        return res.status(405).send("plz include newPassword")
    }
    else{
        return res.status(405).send("plz include oldPassword")
    }
    const user = await User.findByIdAndUpdate(req.params.id,{name,email,phoneNo,password})
    if (!user) {
       return res.status(404).json({
            message:"no user found"
        })
    }
    else{
        res.status(200).json({
            message:"done updating"
        })
    }
}
//for login
exports.Login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!(email && password)){

        res.status(400).send("need all information")
    }
    const user =await User.findOne({email})

    if (user &&(await bcrypt.compare(password,user.password))){

        const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {

                expiresIn: "5h"
            }
        );

        user.token = token

        return res.status(200).send(user)

    }
    else{

        return res.status(400).json("invalid cradentials")
    }
}
