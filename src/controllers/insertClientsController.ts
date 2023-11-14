import { Request, Response } from "express";
import { queryPrms } from "../database";
import { IClients } from "../interfaces/IClientes";

export const insertClientsController = async (req: Request, res: Response) =>{

    const prms:IClients = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        nmr_telefone: req.body.nmr_telefone,
        rua: req.body.rua,
        cidade: req.body.cidade,
        estado: req.body.estado
    }
    const params= [prms.nome, prms.cpf, prms.nmr_telefone, prms.rua, prms.cidade, prms.estado]
    const sql = 'insert into clientes (nome, cpf, nmr_telefone, rua, cidade, estado) values ($1, $2, $3, $4, $5, $6)'
    const result = await queryPrms(sql,params)
    if (result.length != 0) {
        return res.json({message: `${result}`})
    }
    return res.json({message:'Cadastro efetuado com sucesso!'})
    
   
}