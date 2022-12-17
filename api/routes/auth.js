import express from 'express'

const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Hello this is from auth endpoint')
})

router.get('/register', (req,res)=>{
    res.send('Hello this is from register endpoint')
})

export default router