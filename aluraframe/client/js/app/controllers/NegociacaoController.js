class NegociacaoController {

    //now this set of code will do the query only once
    constructor() {
        let $=document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        //tres metodos de converter a data de string para formato correto
        //1 - como parametros de date (*mes 0-11)   
            // let data = new Date(...this._inputData // ... spread operator
            //     .value.split('-')
            //     .map((item, indice) => item - indice % 2;)
            //);
        //2 - como array ano, mes, dia    
            //let data = new Date(this._inputData.value.split('-'));
        //3 - como uma string com  ',' em vez de '-'
            let data = new Date(this._inputData.value.replace(/-/g, ','));
        
        console.log(data);

        // //this set of code will have to do a query each time the event is trigged - poor for performance
        // let $=document.querySelector.bind(document); //criando uma variável que se mantém conectada com o DOM através do "bind"
        // let inputData = $('#data');
        // let inputQuantidade =  $('#quantidade');
        // let inputValor = $('#valor');

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
          );
    
          console.log(negociacao);
    }
}