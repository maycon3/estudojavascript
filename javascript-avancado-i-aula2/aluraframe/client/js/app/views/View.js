class View {

    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new ('O metodo template deve ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}