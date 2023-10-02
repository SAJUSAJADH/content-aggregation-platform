const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true 
    },
    content: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
})

const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

module.exports = Post;