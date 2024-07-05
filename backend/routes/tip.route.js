import express from 'express'
import {addTip, fetchTip} from '../controllers/tip.controller.js'
import {authValidator} from '../middleware/auth.middleware.js'

const router = express.Router()

// * Create a new Tip
// * Fetch Tips
router.route('/').post(authValidator, addTip).get(fetchTip)

export default router
