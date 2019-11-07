const User = require('../models/User');

module.exports = {

    //Store: Criar um usuário
    async store(req, res) {
        const { nome, email, senha, telefone } = req.body;
        console.log(`Nome: ${nome} - Email: ${email} - Senha ${senha} - Telefone ${telefone}`);
        const user = await User.create({
            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone
        })

        console.log(user);
        return res.json(user);
        

    },

    //Index: Retorna uma listagem de usuarios
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    //Show: Retorna um único usuário
    async show(req, res) {
        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    //Update: Atualizar um usuário
    async update(req, res) {
        const user = await User.findOneAndUpdate(req.params.id, req.body, { new: true });

        return res.json(user);
    },


    //Destroy: Remove um usuário
    async destroy(req, res) {
        await User.findByIdAndRemove(req.params.id);

        return res.send();
    }

};