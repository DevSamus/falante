// # .Env variables
require("dotenv").config();
import express from "express";
import config from "config";
import rotas from "./router";
import {planilha} from "../bdl/Table";

const app = express();

//* JSON middleware
app.use(express.json());
console.log("Hello Word!");
app.use(rotas);
//const port: number = config.get('port')

const dado = planilha()


//console.log(dado!);



const port = config.get<number>("port");
app.listen(port, "localhost", async () => {
  console.log(`http://localhost:${port}/`);
});


