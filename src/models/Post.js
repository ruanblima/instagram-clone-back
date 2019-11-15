const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    imagem: String,
    titulo: String,
    curtida: Number,
    localizacao: String,
    descricao: String,
    hastags: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }],
}, {
    toJSON: {
        virtuals: true,
    }
});

module.exports = mongoose.model('Post', PostSchema);