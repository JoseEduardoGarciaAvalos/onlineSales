export class Cliente{
    constructor(
        public email: string,
        public pass: string,
        public nombre: string,
        public apellido: string
    ){}

    static newCliente(): Cliente{
        return new Cliente("","","","");
    }
}