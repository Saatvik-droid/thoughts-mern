import mongoose from 'mongoose'

import ThoughtModel from '../models/thought.js'

export const getThoughts = async (req, res) => {
    try {
        const thoughts = await ThoughtModel.find()

        res.status(200).json(thoughts)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const createThought = async (req, res) => {
    const thought = req.body
    const newThought = new ThoughtModel({ ...thought, author: { ...thought.author, _id: req.userId }})

    try{
        await newThought.save()

        res.status(201).json(newThought)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateThought = async (req, res) => {
    const { id } = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

        const thought = ThoughtModel.findById(id)
        if (thought.author._id !== req.userId) return res.status(401).json({ message: "Unauthorized" })
        const updatedThought = { ...req.body, _id: id }

        await ThoughtModel.findByIdAndUpdate(id, updatedThought, { new: true })

        res.json(updatedThought)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.'})
    }
}

export const deleteThought = async (req, res) => {
    const { id } = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    
        const thought = await ThoughtModel.findById(id)

        if (thought.author._id !== req.userId) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        await ThoughtModel.findByIdAndDelete(id)

        res.json({ message: 'Deleted Successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.'})
    }
}