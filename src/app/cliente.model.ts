export class Cliente{ //27.a
    //27.b
    constructor(
        public email: string,
        public pass: string,
        public nombre: string,
        public apellido: string
    ){}
    //27.c
    static newCliente(): Cliente{
        return new Cliente("","","","");
    }
}