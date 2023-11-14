import { Cliente } from "./class/Cliente";

const cliente = new Cliente(
        'Jacinto',
        'Chite',
        'jacinto@gmail.com',
        '12345678',
        10,
        true
    );

cliente.create();

cliente.updatePassword('12345678910111213141516')

// console.log(cliente.nomeCompleto());
