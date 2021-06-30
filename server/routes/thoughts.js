import { Router } from 'express'

import { getThoughts, createThought, updateThought, deleteThought } from '../controllers/thoughts.js'
import auth from '../middleware/auth.js'

const router = Router()

router.get('/', getThoughts)
router.post('/', auth, createThought)
router.patch('/:id', auth, updateThought)
router.delete('/:id', auth, deleteThought)

export default router