import { Request, Response } from "express";
import { queryPrms } from "../database";

export const getInfoUserController = async (req: Request, res: Response) => {
    const params = {
        user_id: req.params.user_id
    }

    const sql = 'SELECT * FROM usuarios WHERE user_id = $1';
    
    const result = await queryPrms(sql, [params.user_id]);

    if (result.length === 0) {
        return res.json({message: false, result})
    }else {
        return res.json({message: true, result})
    }
}