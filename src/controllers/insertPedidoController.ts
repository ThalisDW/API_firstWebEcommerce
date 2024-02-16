import { Request, Response } from "express";
import { formatQuery, queryPrms } from "../database";
import { IPedidos } from "../interfaces/IPedidos";

export const insertPedidoController = async (req: Request, res: Response)=>{
    
    const params:IPedidos = {
        idUser : req.body.idUser,
        nomeUser : req.body.nomeUser,
        cpfUser : req.body.cpfUser,
        numTelefoneUser : req.body.numTelefoneUser,
        valorTotal : req.body.valorTotal,
        metodoPag : req.body.metodoPag,
        teleEntrega : req.body.teleEntrega,
        enderecoTele : req.body.enderecoTele
    }

    const sql = 'INSERT INTO pedidos (pdd_user_id, pdd_user_nome, pdd_user_cpf, pdd_user_nmr_telefone, pdd_valor_total, pdd_mtd_pagamento, pdd_tele_entrega, pdd_endereco_entrega) values ($1, $2, $3, $4, $5, $6, $7, $8)';
    
    const prms = []
    prms.push(params.idUser)
    prms.push(params.nomeUser)
    prms.push(params.cpfUser)
    prms.push(params.numTelefoneUser)
    prms.push(params.valorTotal)
    prms.push(params.metodoPag)
    prms.push(params.teleEntrega)
    prms.push(params.enderecoTele)

    let result = await queryPrms(sql, prms);

    if (result.length !== 0) {
        return res.json({message: false, result})
    }

    const getIdPdd = 'SELECT * FROM PEDIDOS WHERE PDD_USER_ID = $1 ORDER BY pdd_id DESC LIMIT 1'
    const prmsIdPdd = [params.idUser]
    const getID = await queryPrms(getIdPdd, prmsIdPdd)
    const idPdd = getID[0].pdd_id

    const sqlitems = 'INSERT INTO ITEMS_PEDIDOS (ITP_ID_PEDIDO, ITP_ID_PRODUTO, ITP_NOME_PRODUTO, ITP_CATEGORIA_PRODUTO, ITP_VALOR_PRODUTO) VALUES ($1, $2, $3, $4, $5)'
    
    const items = req.body.items
    for (const e of items) {

        if (e.quantidade > 1) {
            let i = 1
            while (i <= e.quantidade) {
                const prmsItems = [];
                prmsItems.push(idPdd);
                prmsItems.push(e.id_produto);
                prmsItems.push(e.nome);
                prmsItems.push(e.categoria);
                prmsItems.push(e.valor);
            
                await queryPrms(sqlitems, prmsItems);
                i++
            }
        }else{

            const prmsItems = [];
            prmsItems.push(idPdd);
            prmsItems.push(e.id_produto);
            prmsItems.push(e.nome);
            prmsItems.push(e.categoria);
            prmsItems.push(e.valor);
        
            await queryPrms(sqlitems, prmsItems);
        }
    }
    


    if (result.length !== 0) {
        return res.json({message: false, result})
    } else {
        return res.json({message: true, idPdd})
    }

}