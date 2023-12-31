import { Express } from "express";
import { getClientsController } from "./controllers/getClientsController";
import { insertClientsController } from "./controllers/insertClientsController";
import { putClientsController } from "./controllers/putClientsController";
import { getPedidosController } from "./controllers/getPedidosController";
import { loginController } from "./controllers/loginController";
import { validaTokenController } from "./controllers/validaTokenController";
import { getAllCategoriasController } from "./controllers/getCategoriasController";
import { getProductsByCategoriaController } from "./controllers/getProductsByCategoriaController";

export function registerRoutes(app: Express){
    
    app.get("/clients", getClientsController)

    app.post("/clients", insertClientsController)

    app.put("/clients", putClientsController)

    app.get("/pedidos", getPedidosController)

    app.post("/login", loginController)

    app.post("/token", validaTokenController)

    app.get("/categorias", getAllCategoriasController)

    app.get("/productsByCategoria/:id", getProductsByCategoriaController)






}