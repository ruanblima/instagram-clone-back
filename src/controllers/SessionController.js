const User = require('../models/User');

module.exports = {

    //Store: Criar uma sessão
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Usuário não existe'})
        }

        return res.json(user);

    }
};