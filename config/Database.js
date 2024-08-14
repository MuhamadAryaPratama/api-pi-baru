import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize("data_barang", "root", "a", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
});

export default db;
