export interface IPedidos{
    id_pedido: number,
    id_produto: number,
    id_cliente: number,
    nome_cliente: string,
    cpf_cliente: string,
    tele_entrega: string,
    endereco_entrega: string,
    valor: number,
    mtd_pagamento: string,
    dt_cadastro: string
}