import { Sequelize } from "sequelize";

const db = new Sequelize('ts-rest-node','root','',{
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;