import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js"
import  jwt  from "jsonwebtoken"

export const register = async(req,res,next)=>{

    try {
        // syntax to encrypted password in mongoDB
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        //why not req.body ? (cause we only need username,email
        //password instead of all data)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })

        await newUser.save()
        res.status(200).send("User has been created")

    }catch (err) {
        next(err)
    }
}

export const login = async(req,res,next)=>{

    try {

        const user = await User.findOne({
            username:req.body.username
        })
        if(!user) return next(createError( 404,"User not found !"))

        const isPasswordCorrect = 
        await bcrypt.compare(req.body.password, user.password) //to compare hash and password
        if(!isPasswordCorrect) return next(createError( 400,"Password or username incorrect !"))

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.Jwt)

        const{password,isAdmin, ...otherData} = user._doc

        res.cookie("access_token", token, {
            httpOnly: true
        })

        res.status(200).json({...otherData})
    }catch (err) {
        next(err)
    }
}