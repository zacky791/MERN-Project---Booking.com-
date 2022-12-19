import express from 'express'
import User from '../models/User.js'
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//middleware
// router.get("/checkauthentication", verifyToken , (req,res,next)=>{
//     res.send("Hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser , (req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin , (req,res,next)=>{
//     res.send("hello admin, you are logged in and you can delete all account")
// })

//CREATE
router.post('/' , async (req,res)=>{

    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put('/:id' , verifyUser , async (req,res)=>{

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set:req.body },
            {new:true})

        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE

router.delete('/:id' , verifyUser , async (req,res)=>{

    try {
        await User.findByIdAndDelete(
            req.params.id
            )
            
        res.status(200).json("User has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET

router.get('/:id' , verifyUser , async (req,res)=>{

    try {
        const User = await User.findById(
            req.params.id
            )
        res.status(200).json(User)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL

router.get('/' , verifyAdmin , async (req,res,next)=>{

    try {
        const Users = await User.find()  
        res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
})

export default router
