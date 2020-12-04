export class Cliente{
    id : string;
    nome : string;
    email : string;
    telefone : string;
    
    setCliente(obj : any, id : any){
        this.id = id;
        this.nome = obj.nome;
        this.email = obj.email;
        this.telefone = obj.telefone;
    }
}