import express from 'express'
import Hotel from '../models/Hotel.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//CREATE
router.post('/' , verifyAdmin , async (req,res)=>{

    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put('/:id', verifyAdmin , async (req,res)=>{

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set:req.body },
            {new:true})

        res.status(200).json(updatedHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE

router.delete('/:id' , verifyAdmin , async (req,res)=>{

    try {
        await Hotel.findByIdAndDelete(
            req.params.id
            )
            
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET

router.get('/:id' , async (req,res)=>{

    try {
        const hotel = await Hotel.findById(
            req.params.id
            )
        res.status(200).json(hotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL

router.get('/' , async (req,res,next)=>{

    try {
        const hotels = await Hotel.find()  
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
})

export default router