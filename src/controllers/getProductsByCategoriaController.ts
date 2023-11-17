import { Request, Response } from "express"
import { queryPrms } from "../database"

export const getProductsByCategoriaController = async (req: Request, res: Response)=>{
    const prms = {
        id: req.params.id
    }
    
    const sql = 'SELECT * FROM produtos WHERE categoria = $1'
    const params = [prms.id]

    const result = await queryPrms(sql, params)

    if (result.length == 0) {
       return res.json({message: false, result})
    }else{
       return res.json({message: true, result})
    }
}