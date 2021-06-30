import mongoose from 'mongoose'

const thoughtSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    author: {
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ThoughtModel = mongoose.model('ThoughtSchema', thoughtSchema)

export default ThoughtModel