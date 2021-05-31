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

export const postThought = async (req, res) => {
    // const thought = req.body
    const newThought = new ThoughtModel(req.body)

    try{
        await newThought.save()

        res.status(201).json(newThought)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export default router