const User = require('../models/User');

module.exports = {

    //Store: Criar uma sessão
    async store(req, res) {
        const { email, senha } = req.body;

        let user = await User.findOne({ email, senha});

        if (!user) {
            return res.status(400).json({ error: 'Usuário não existe'})
        }

        return res.json(user);

    }
};