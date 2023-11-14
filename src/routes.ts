import { Express } from "express";
import { getClientsController } from "./controllers/getClientsController";
import { insertClientsController } from "./controllers/insertClientsController";
import { putClientsController } from "./controllers/putClientsController";
import { getPedidosController } from "./controllers/getPedidosController";

export function registerRoutes(app: Express){
    
    app.get("/clients", getClientsController)

    app.post("/clients", insertClientsController)

    app.put("/clients", putClientsController)

    app.get("/pedidos", getPedidosController)







}