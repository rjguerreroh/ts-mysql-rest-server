import dotenv from "dotenv";
import Server from "./models/server";

// Configurar dorenv
dotenv.config();
const server = new Server();
server.listen();
// export const nombre = "Fernando Herrera";
// console.log(nombre);