const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const connection = require("./database/database");
// Constante se necesserio formulario => const Pergunta = require("./database/Pergunta");
// Database
//connection
//    .authenticate()
//    .then(() =>{
//        console.log("Conexão feita com o banco de dandos")
//    })
//    .catch((msgErro) => {
//        console.log(msgErro);
//    })
// Estou dizendo para o Express usar o HTML como view engine
app.set('view engine','html');
app.use(express.static('public'));
// Body Parser
app.use (express.urlencoded ({ extended: false }))
app.use (express.json());
// Rotas
app.get("/",(req, res) => {
    res.render("index");//pega o endereço direta da view
});

// Se necessario colocar formulario
// app.post("/salvarformulario", (req,res) =>{
    
//  var titulo = req.body.titulo;
//  var descricao = req.body.descricao;
    
//  Pergunta.create({
//      titulo: titulo,
//      descricao: descricao
//  }).then(() => {
//      res.redirect("/");
//      });
//}); 
//Coneção da porta
app.listen(8081,()=>{
    console.log("App rodando!");
});