const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//Register
const registerUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body
        const existUser = await User.findOne({ $or: [{ username, email }] })
        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "User already exist with same username or MailID try with different username or MailID "
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            username,
            email,
            password: hashpassword,
            role: role || 'user'
        })
        await newUser.save()
        if (newUser) {
            res.status(201).json({
                success: true,
                message: "User registered succesfully"
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: "unable to register please try again"
            })
        }

    }

    catch (error) {
        console.log("error in registerUser", error);
        res.status(500).json({
            success: false,
            message: "some error occured ! please try again"
        })

    }
}
//login
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const checkUser = await User.findOne({ username });
        if (!checkUser) {
            return res.status(400).json({
                success: false,
                message: "User Doesn't exist"
            })
        }
        const passwordMatch = await bcrypt.compare(password, checkUser.password)
        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }
        //Token
        const accessToken = jwt.sign({
            userId: checkUser._id,
            username: checkUser.username,
            role: checkUser.role
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '15m'
        })
        res.status(200).json({
            success: true,
            message: "Login successful",
            accessToken
        })

    }
    catch (error) {
        console.log("error in loginUser", error);
        res.status(500).json({
            success: false,
            message: "some error occured ! please try again"
        })

    }
}
//change password
const changePassword = async (req, res) => {
    try {

        const result = req.userInfo.userId
        const { oldPassword, newPassword } = req.body
        //current login user
        const currentUser = await User.findById(result)
        if (!currentUser) {
            res.status.json({
                success: false,
                message: "user not found"
            })
        }
        //old password validate

        const isPassword = await bcrypt.compare(oldPassword, currentUser.password)
        if (!isPassword) {
            return res.status(400).json({
                success: false,
                message: "old password is not correct!please try again"
            })
        }
        //hash password
        const salt = await bcrypt.genSalt(10)
        const newHashedPassword = await bcrypt.hash(newPassword, salt)
        currentUser.password = newHashedPassword
        await User.findByIdAndUpdate({ _id: result }, { password: newHashedPassword })
        res.status(200).json({
            success: true,
            message: "Password Change Successfully"

        })

    } catch (error) {
        console.log("error in change password", error);
        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}
module.exports = { registerUser, loginUser, changePassword }