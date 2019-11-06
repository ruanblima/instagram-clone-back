const User = require('../models/User');

module.exports = {

    //Store: Criar um usuário
    async store(req, res){
        const { nome, email, senha, telefone } = req.body;

        const user = await User.create({
            // nome: nome,
            email: email,
            // senha: senha,
            // telefone: telefone
        })
    
        return res.json(user);

    }
};