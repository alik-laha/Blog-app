const User = require('../model/userModel')
const bcrypt = require('bcryptjs')


//create user--(evryone)
exports.creatUser = async (req, res, next) => {
    try {
        const { name, email, phoneno, password } = req.body;
        if (!(email, phoneno, name, password)) {
            res.status(400).send("all input is required")
        }
        const old = await User.findOne({ email })
        if (old) {
            return res.status(409).send("user already exist try with other email")
        }
        const pass = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name,
            phoneNo: phoneno,
            email: email.toLowerCase(),
            password: pass
        })
        res.status(201).json({
            sucess: true,
            masage: 'your profile hs been created'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the Profile",
            error: error.message
        });
    }
}

//update user details--(only user)
exports.updateUser = async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id)
    if (!user) {
        user
    }
}
//for login
exports.Login = async (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then((user) => {

            if (!user) {
                return res.json('check the email')
            }
            bcrypt.compare(password, user.password, (err, data) => {
                if (err) {
                    throw err
                }
                if (data) {
                    res.json('success')
                }
                else {
                    res.json("check the password")
                }
            })

        })
}
