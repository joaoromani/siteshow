const sequelize = require("sequelize");
const connection = require("./database");


// CONSTRUÇÃO DO MODEL
const Pergunta = connection.define("pergunta", {
    titulo:{
        type:sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: sequelize.TEXT,
        allowNull: false
    }
    
});

Pergunta.sync({force: false})
.then(() => {
    console.log("Tabela criada")
})

module.exports = Pergunta