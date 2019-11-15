const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    imagem: String,
    titulo: String,
    curtida: Number,
    localizacao: String,
    descricao: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comentarios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    curtidas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }],
}, {
    toJSON: {
        virtuals: true,
    }
});

module.exports = mongoose.model('Post', PostSchema);