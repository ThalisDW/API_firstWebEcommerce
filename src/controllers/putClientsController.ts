import { Request, Response } from "express";
import { IUpdateClients } from "../interfaces/IUpdateClients";
import { queryPrms } from "../database";

export const putClientsController = async (req: Request, res: Response)=>{

    //pegar cliente
    const Sql = 'select * from clientes where id = $1';
    const SqlPrms = [req.body.filterId]
    const fetchInfos = await queryPrms(Sql, SqlPrms)
    let infosClient= fetchInfos[0]


    let sql =  'UPDATE CLIENTES SET nome = $1 , cpf = $2 , nmr_telefone = $3, rua = $4, cidade = $5, estado = $6 where cpf = $7 and id = $8'

    const prms:IUpdateClients = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        nmr_telefone: req.body.nmr_telefone,
        rua: req.body.rua,
        cidade: req.body.cidade,
        estado: req.body.estado,
        clausulaCPF: req.body.filterCpf,
        clausulaId: req.body.filterId
    }
    

    if (prms.nome == null) {
        prms.nome = infosClient.nome
    }

    if(prms.cpf == null){
        prms.cpf = infosClient.cpf
    }
    if(prms.nmr_telefone == null){
        prms.nmr_telefone = infosClient.nmr_telefone
    }
    if(prms.rua == null){
        prms.rua = infosClient.rua
    }
    if(prms.cidade == null){
        prms.cidade = infosClient.cidade
    }
    if(prms.estado == null){
        prms.estado = infosClient.estado
    }

    const params = [prms.nome, prms.cpf, prms.nmr_telefone, prms.rua, prms.cidade, prms.estado, prms.clausulaCPF, prms.clausulaId]

    const result = queryPrms(sql, params)
    return res.json({result})
}