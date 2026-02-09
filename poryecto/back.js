class tarea{
    #texto
    #responsable
    constructor(nombre,texto, responsable){
    }

get getTexto(){
    return this.#texto;
}   
get getResponsable(){
    return this.#responsable;
}   
set setTexto(texto){
    if (typeof texto !== 'string' || texto.length === 0) {
        throw new Error("El texto esta mal");
    }   

    this.#texto=texto;
}   
set setResponsable(responsable){
    if (typeof responsable !== 'string' || responsable.length === 0) {
        throw new Error("El responsable esta mal");
    }
    this.#responsable=responsable;
}
}

const tareas=[];
document.getElementById("lista_tarea").innerText="Tareas: " + tareas[0].getTexto ;
