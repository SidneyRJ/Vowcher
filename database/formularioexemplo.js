const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('formulario',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//exemplo.sync({force: false}).then(() => {});

//module.exports = exemplo