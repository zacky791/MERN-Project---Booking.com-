import { createError } from "./error.js"
import jwt from "jsonwebtoken"


export const verifyToken = (req,res,next)=>{

    const token = req.cookies.access_token
    
    //to check when login does the user have the
    //token or not ? 
    if(!token){ 
        return next (createError(401, "You does not have token !"))
    }

    // to check does the token match with
    // jwt secret key ? token = jwt secret key
    jwt.verify(token, process.env.JWT, (err,user)=>{
        if(err) return next(createError(403, "Token are not valid !"))
        req.user = user
        next()
    })
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next , ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        } else {
            if(err) return next(createError(403, "You are not authorized !"))
        }
    })
   
}


export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next , ()=>{
        if( req.user.isAdmin){
            next()
        } else {
            if(err) return next(createError(403, "You are not authorized !"))
        }
    })
}


