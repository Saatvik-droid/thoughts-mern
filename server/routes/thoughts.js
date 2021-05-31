import { Router } from 'express'
import { getThoughts, postThought } from '../controllers/thoughts.js'

const router = Router()

router.get('/', getThoughts)
router.post('/', postThought)

export default router