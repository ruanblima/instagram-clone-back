const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    imagem: String,
    titulo: String,
    curtida: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('Post', PostSchema);