import express from 'express'
import { login, register } from '../controller/auth.js'

const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Hello this is from auth endpoint')
})

router.post('/register', register )
router.post('/login', login )


export default router