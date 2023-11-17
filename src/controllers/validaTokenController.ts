import { Request, Response } from "express";
import { queryPrms } from "../database";

export const validaTokenController = async (req: Request, res: Response) => {
    const prms = {
        token : req.body.storedToken
    }

    const sql = 'select * from usuarios where user_token = $1'
    const params = [prms.token]
    const result = await queryPrms(sql, params)

    if (result.length === 1) {
        return res.json({message: true})
    }else {
        return res.json({message: false})
    }
}