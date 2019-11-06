const Post = require('../models/Post');

module.exports = {
    //Lista as postagens do usuário
    async show(req, res) {

        const posts = await Post.find({ user: user_id});

        return res.json(posts);
    }
}