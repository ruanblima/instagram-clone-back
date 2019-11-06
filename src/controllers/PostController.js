const Post = require('../models/Post');
const User = require('../models/User');

module.exports = {

    //Store: Cria uma postagem 
    async store(req, res){
        const { filename } = req.file;
        const { titulo } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: 'Usuário não existe'})
        }

        const post = await Post.create({
            user: user_id,
            imagem: filename,
            titulo
        })

        return res.json(post) 

    }
};