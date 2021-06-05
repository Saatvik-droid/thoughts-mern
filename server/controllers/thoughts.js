import { Router } from 'express'
import mongoose from 'mongoose'

import ThoughtModel from '../models/thought.js'

const router = Router()

export const getThoughts = async (req, res) => {
    try {
        const thoughts = await ThoughtModel.find()

        res.status(200).json(thoughts)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const createThought = async (req, res) => {
    const newThought = new ThoughtModel(req.body)

    try{
        await newThought.save()

        res.status(201).json(newThought)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateThought = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const updatedThought = { ...req.body, _id: id }

    await ThoughtModel.findByIdAndUpdate(id, updatedThought, { new: true })

    res.json(updatedThought)
}

export default router