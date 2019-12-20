class DateHelper {

    constructor() {
        throw new ('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto.value))
            throw new Error('Deve esta no formato aaaa-mm-dd');
        
        return new Date(... texto.value.split('-').map( (item,indice) => item - indice % 2));
    }
}