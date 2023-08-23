// IMPORTANDO SEQUELIZE
const sequelize = require("sequelize");

// CONEXÃO COM MYSQL WORKBENCH INSERINDO QUAL DATABASE IREMOS CONECTAR (NOME DATABASE, USUÁRIO, SENHA)
// USUARIO = LOCAL / ROOT
// SENHA PARA LOGAR NO WORKBENCH
const connection = new sequelize("provasenai_joaoromani","root","admin",{

    //IP
    host: 'localhost',

    //QUAL TIPO DE BANCO (SGBD)
    dialect: 'mysql',

    //LIMPAR CONSOLE AUTOMATICO
    logging:false
})

//EXPORTANDO O MODULO DA CONEXÃO COM MYSQL
module.exports = connection