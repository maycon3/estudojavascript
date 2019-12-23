class MensagemView {

    constructor(elemente){
        this._elemente = elemente;
    }

    _template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

    update(model){
        this._elemente.innerHTML = this._template(model);
    }
}