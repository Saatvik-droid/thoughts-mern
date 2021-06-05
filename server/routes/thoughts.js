import { Router } from 'express'
import { getThoughts, createThought, updateThought, deleteThought } from '../controllers/thoughts.js'

const router = Router()

router.get('/', getThoughts)
router.post('/', createThought)
router.patch('/:id', updateThought)
router.delete('/:id', deleteThought)

export default router