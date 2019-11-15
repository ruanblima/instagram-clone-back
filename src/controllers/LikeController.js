const Like = require('../models/Like');

module.exports = {

    //Store: Criando um like 
    async store(req, res){
        const { post} = req.body;
        const { user_id } = req.headers;

        const Like = await Like.create({
            user: user_id,
            post: post
        })

        return res.json(post) 

    },

};