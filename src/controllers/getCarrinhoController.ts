import { Request, Response } from "express";
import { fetchQuery, queryPrms } from "../database";

export const getCarrinhoController = async (req: Request, res: Response) => {
    const params = {
        idUser: req.params.id
    }

    const sql = 'select * from carrinhos where crr_user_id = $1 and crr_status = 1'
    const prms = [params.idUser]

    const result = await queryPrms(sql, prms)

    if (result.length === 0) {
        return res.json({message: false, result})
    }else {
        return res.json({message: true, result})
    }
}