import { Request, Response } from "express"
import { query, queryPrms } from "../database"
import { IConsultClients } from "../interfaces/IConsultClients"

export const getClientsController = async (req: Request, res: Response)=>{

    const prms:IConsultClients = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        cidade: req.body.cidade,
    }

    let sql = 'select * from clientes'
    let sqlParams:any[]= []
    
    if ( prms.nome != null) {
        let i = 1
        
        sql += ` where nome like $${i} `
        sqlParams.push(`%${prms.nome}%`)
        i += 1

        if ( prms.cidade != null) {
            sql += ` and cidade like $${i} `
            sqlParams.push(`%${prms.cidade}%`)
            i += 1
        }
        if ( prms.cpf != null) {
            sql += ` and cpf = $${i}`
            sqlParams.push(prms.cpf)
        }
        const clientes =  await queryPrms(sql, sqlParams)
        return res.json({clientes})
    }

    
    const clientes =  await query(sql)
    return res.json({clientes})

    
    
}