const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//Conexão online com o banco MongoDB
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb+srv://instagram:instagram@instagramclone-drqkh.mongodb.net/instagram?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((s) => {
    console.log('sucesso');
}).catch((e) => {
    console.log(e);
})



app.use(routes);

app.listen(3333, () => {
console.log('Servidor rodando')
}
); 