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

    },

    //Index: Retorna uma listagem de postagens
    async index(req, res) {
        const posts = await Post.find();

        return res.json(posts);
    },

    //Show: Retorna uma única postagem
    async show(req, res) {
        const post = await Post.findById(req.params.id);

        return res.json(post);
    },

    //Update: Atualizar uma postagem
    async update(req, res) {
        const post = await Post.findOneAndUpdate(req.params.id, req.body, { new: true });

        return res.json(post);
    },


    //Destroy: Remove uma postagem
    async destroy(req, res) {
        await Post.findByIdAndRemove(req.params.id);

        return res.send();
    }
};