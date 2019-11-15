const Like = require('../models/Like');
// const Post = require('../models/Post');

module.exports = {

    //Store: Criando um like 
    async store(req, res){
        const { post} = req.body;
        const { user_id } = req.headers;

        const like = await Like.create({
            user: user_id,
            post: post
        })

        // const post = await Post.update({
        //     likes = like,
        // })

        return res.json(like) 

    },

};