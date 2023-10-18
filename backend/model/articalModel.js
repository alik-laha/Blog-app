const mongoose = require('mongoose');

const articalSchema = new mongoose.Schema({

    header: {
        type: String,
        uppercase: true,
        required: [true, "Please provide the heading of your Artical"]
    },
    writer: {
        type: String,
        required: [true, "Please provide your name"]
    },
    content: {
        type: String,
        required: [true, "Plese tye your content"]
    },
    subject: {
        type: String,
        required: [true, "provide the subject of your artical"]
    },
    writerId:{
      type:String,
      required:[true,"provide the writer id"]
    },
    image: {
       type:String,
        // required:[true,"povide a image"]
    },
    date: {
        type: Date,
        default: Date.now
    },
    like: {
        type: Number
    },
    dislike: {
        type: Number
    },
    coment: {
        type: String
    }
})
module.exports = mongoose.model("artical", articalSchema)