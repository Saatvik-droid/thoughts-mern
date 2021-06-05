import { Router } from 'express'
import { getThoughts, createThought, updateThought } from '../controllers/thoughts.js'

const router = Router()

router.get('/', getThoughts)
router.post('/', createThought)
router.patch('/:id', updateThought)

export default router