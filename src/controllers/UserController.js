const User = require('../models/User');

module.exports = {

    //Store: Criar um usuário
    async store(req, res) {
        const { nome, email, senha, telefone } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: 'Email já cadastrado.'})
        }else{
            const user = await User.create({
                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone
            })
            return res.json(user);
        }
    
        

    },

    //Index: Retorna uma lista de usuarios
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