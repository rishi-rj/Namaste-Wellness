import express from 'express'
import { signup ,signin,google} from '../controllers/auth.controller.js'

const router = express.Router()

//sign up
router.post("/signup",signup)


//sign in
router.post("/signin",signin)

//
router.post('/google',google)

export default router