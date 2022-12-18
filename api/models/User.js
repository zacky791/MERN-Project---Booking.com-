import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        unique:true,
    },
    // type:{
    //     type: String,
    //     required: true,
    // },
    // city:{
    //     type: String,
    //     required: true,
    // },
    // address:{
    //     type: String,
    //     required: true,
    // },
    // distance:{
    //     type: String,
    //     required: true,
    // },
    // photos:{
    //     type: [String],
    //     required: true,
    // },
    // title:{
    //     type: String,
    //     required: true,
    // },
    // desc:{
    //     type: String,
    //     required: true,
    // },
    // rating:{
    //     type: Number,
    //     min:0,
    //     max:5,
    // },
    // rooms:{
    //     type: [String],
    //     required: true,
    // },
    // cheapestPrice:{
    //     type: String,
    //     required: true,
    // },
    // isAdmin:{
    //     type: Boolean,
    //     default:false,
    // },
},
 {timestamps: true }
 )

export default mongoose.model( "User", UserSchema)