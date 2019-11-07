const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    imagem: String,
    titulo: String,
    curtida: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

PostSchema.virtual('imagem_url').get(function(){
    return `http://localhost:3333/files/${this.imagem}`
})

module.exports = mongoose.model('Post', PostSchema);