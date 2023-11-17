import { Request, Response} from "express";
import { fetchQuery } from "../database";

export const getAllCategoriasController = async (req: Request, res: Response)=>{

    const sql = 'select * from categoria'

    const result = await fetchQuery(sql)

    if (result.length === 0) {
        res.json({message: false, result})
    }else{
    res.json({message: true, result})}
}