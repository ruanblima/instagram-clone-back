const User = require('../models/User');

//Index: Retorna uma listagem de session
//Show: Retorna uma única sessão
//Update: Atualizar uma sessão
//Destroy: Remover uma sessão

module.exports = {

    //Store: Criar uma sessão
    async store(req, res){
        const { email } = req.body;

        let user = await user.findOne({ email });

        if(!user){
            user = await user.create({ email });
            //return res.status(400).json({ error: 'Usuário não existe'})
        }
        
        return res.json(user);

    }
};