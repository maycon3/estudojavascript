class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $ ('#valor');
        this._listaNegociacoes = new ListaNegociacoes();        
    }

    adiciona(event) {
        event.preventDefault();
         let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData),
             this._inputQuantidade,
             this._inputValor
         );
        this._listaNegociacoes.adiciona(negociacao);
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
        
    }

    _limpaFormulario(){
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;

      this._inputData.focus();
    }
}