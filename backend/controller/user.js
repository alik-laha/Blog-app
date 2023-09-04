const User = require('../model/userModel')


//create user--(evryone)
exports.creatUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
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
            if (user) {
                if (user.password === password) {
                    res.json('success')
                }
                else {
                    res.json("check the password")
                }
            }
            else {
                res.json("check the email")
            }
        })
}