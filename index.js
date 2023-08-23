const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const formularios = require("./database/Resposta")
const sequelize = require('sequelize');
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/home", (req, res) => {
    res.render("./perguntas.ejs")
})

app.get("/finalizar", (req, res) => {
    res.render("./finalizar.ejs")
})

app.post("/finalizar", (req, res) => {
    let nomeCompleto = req.body.nomeCompleto;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let telefone = req.body.telefone;
    let endereco = req.body.endereco;
    let dataNascimento = req.body.dataNascimento;

    formularios.create({
        nomeCompleto: nomeCompleto,
        cpf: cpf,
        email: email,
        telefone: telefone,
        endereco: endereco,
        dataNascimento: dataNascimento
    }).then(() => {
        res.send("Dados cadastrados com sucesso!");
    }).catch(error => {
        console.error("Erro ao cadastrar os dados:", error);
        res.send("Erro ao cadastrar os dados.");
    });
});



app.listen(8080, (error) => {
    if (error) {
        console.log("Erro ao conectar com o servidor 8080!")
    } else {
        console.log("Conexão extabelecida com sucesso no servidor 8080!")
    }
});

function submitinfo() {
    alert("Seus dados foram cadastrados no site!")
}


