const SENHA = "1234"

const listaDeCliente: Cliente[] = []

export class Cliente {
    // public nome: string
    // public sobrenome: string
    // public email: string
    // public senha: string
    // public idade: number


    constructor(
       private nome: string,
       private sobrenome: string,
       private email: string,
       private senha: string,
       private idade: number,
       private admin: boolean
    ){
        if (senha.length < 8) throw new Error('Minimo de 8 caracteres na senha');
        // this.nome = nome
        // this.sobrenome = sobrenome
        // this.email = email
        // this.senha = senha
        // this.idade = idade
    }

    setName(nome: string): string{
        this.nome = nome.toUpperCase()
        return `Novo nome de usuário: $${this.nome}`
    }

    getNome(){
        return this.nome
    }

    updatePassword(senha: string){
        if (senha.length < 8) throw new Error('Minimo 8 caracteres')
        console.log(listaDeCliente);
        
       const userIndex = listaDeCliente.findIndex((cliente)=>cliente.email === this.email)
        listaDeCliente[userIndex].senha = senha
        
        return console.log(listaDeCliente);
        
    }

    getPassword(){
        if (this.admin) {
            return console.log(this.senha);
        }else throw new Error('Sem permissão.')
    }

    login() : void{
        if (this.senha === SENHA) {
            console.log("logado com sucesso");
            
        }else{
            console.log("senha incorreta");
            
        }
    }

    create(): void{
        listaDeCliente.push(this)
        console.log(listaDeCliente);
        
    }

    nomeCompleto(): string{
        return `${this.nome} ${this.sobrenome}`
    }
}