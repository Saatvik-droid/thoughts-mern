import mongoose from 'mongoose'

const thoughtSchema = mongoose.Schema({
    title: String,
    body: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const ThoughtModel = mongoose.model('ThoughtSchema', thoughtSchema)

export default ThoughtModel