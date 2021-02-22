var mongoose = require('mongoose')

var Schema = mongoose.Schema
var commentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    creatTime: {
        type: Date,
        default: Date.now
    },
    editTime: {
        type: Date,
        default: Date.now
    },
    like: {
        type: Number,
        default: 0
    }
})
const CommentModel = mongoose.model('Comment', commentSchema);
module.exports = CommentModel;