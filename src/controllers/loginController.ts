import { Request, Response } from "express";
import { queryPrms } from "../database";
import {ILogin} from "../interfaces/ILogin"

export const loginController = async (req: Request, res: Response)=> {
    const prms: ILogin = {
        username: req.body.username,
        password: req.body.password
    }

    const sql = 'select * from usuarios where user_username = $1 and user_userpassword = $2'
    const params = [prms.username, prms.password]

    const result = await queryPrms(sql, params)

    if (result.length === 0) {
        return res.json({message: false, result})
    }
    if (result.length == 1) {
        res.json({message: true, result})
    }else{res.json({message: false, result})}
}