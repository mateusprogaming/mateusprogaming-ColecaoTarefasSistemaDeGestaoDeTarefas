// criamos um classe ListaItem dentro dessa classe chamamos ela no index e na colecaoLista
// a colecao lista nada menos nada mais e um album de figurinhas;
// cada pagina tem suas figurinhas
// e dentro da colecao existem os items, sao as figurinhas
// a programacao dos items esta listamo abaixo 
export class ListaItem {
    public constructor(public id: number, public tarefa: string, public completo: boolean = false) {
            //nao precisa preencher
    }

    public mostrarDetalhes() : void {
        console.log(`${this.id}\t${this.tarefa}${this.completo ? "\t(completo)": ""}`);
    }
}
