const Comment = require('../models/Comment');
//const Post = require('../models/Post');

module.exports = {

    //Store: Cria uma postagem 
    async store(req, res){
        const { comment} = req.body;
        const { user_id, post } = req.headers;

        const comment = await Comment.create({
            author: user_id,
            comment: comment,
            post: post
        })

        // const post = await Post.update({
        //     comments = comment,
        // })

        return res.json(post) 

    },

};