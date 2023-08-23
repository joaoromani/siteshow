// IMPORTANDO SEQUELIZE
const sequelize = require("sequelize");
const connection = require("./database")

// CRIANDO O MODEL (MODELO DA DB)
const Formulario = connection.define("formulario", {
    nomeCompleto: {
        type:sequelize.TEXT,
        allowNull: false
    },
    cpf: {
        type: sequelize.BIGINT,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: sequelize.BIGINT,
        allowNull: false
    },
    endereco: {
        type: sequelize.STRING,
        allowNull:false
    },
    dataNascimento: {
        type: sequelize.DATEONLY,
        allowNull: false
    }
});
// SINCRONIZANDO COM O DB PARA A CRIAÇÃO DA TABELA

module.exports = Formulario;

Formulario.sync({force: false})
.then(() => {
    console.log("Tabela criada")
})