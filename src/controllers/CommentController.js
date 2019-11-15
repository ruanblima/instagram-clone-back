const Comment = require('../models/Comment');

module.exports = {

    //Store: Cria uma postagem 
    async store(req, res){
        const { comment, post} = req.body;
        const { user_id } = req.headers;

        const comment = await Comment.create({
            author: user_id,
            comment: comment,
            post: post
        })

        return res.json(post) 

    },

};