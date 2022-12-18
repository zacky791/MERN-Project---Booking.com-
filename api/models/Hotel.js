import mongoose from 'mongoose';

//schema are we set all the requirement (format) needed
// when accesing the api 
const HotelSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    distance:{
        type: String,
        required: true,
    },
    photos:{
        type: [String],
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        min:0,
        max:5,
    },
    rooms:{
        type: [String],
        required: true,
    },
    cheapestPrice:{
        type: String,
        required: true,
    },
    featured:{
        type: Boolean,
        default:false,
    },  
})

export default mongoose.model( "Hotel", HotelSchema)