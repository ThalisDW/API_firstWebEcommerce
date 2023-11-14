import { Request, Response } from "express";
import { query, queryPrms } from "../database";

export const getPedidosController = async (req: Request, res: Response)=>{
    
    
    
    let sql = 'SELECT * from pedidos '
    let sqlParams:any[] = []

    if (req.body.data_inicial != null && req.body.data_final != null) {
        sql += ' WHERE DT_PEDIDO BETWEEN $1 AND $2 '
        sqlParams.push(req.body.data_inicial)
        sqlParams.push(req.body.data_final)

        if (req.body.id_produto != null) {
            sql += ' AND ID_PRODUTO = $3 '
            sqlParams.push(req.body.id_produto)
        }
        let pedidos = await queryPrms(sql, sqlParams)
        return res.json({pedidos})
    }
    
    let pedidos = await query(sql)
    return res.json({pedidos})
}