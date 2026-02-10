class tarea{
    
    constructor(nombre,texto, responsable){
        if (typeof nombre !== 'string' || nombre.length === 0) {
            throw new Error("El nombre esta mal");
        }
        if (typeof texto !== 'string' || texto.length === 0) {
            throw new Error("El texto esta mal");
        }   
        if (typeof responsable !== 'string' || responsable.length === 0) {
            throw new Error("El responsable esta mal");
        }
        this.nombre=nombre;
        this.texto=texto;
        this.responsable=responsable;       
    }

    get getTexto(){
        return this.texto;
    }    

    get getResponsable(){
        return this.responsable;
    }   
    set setTexto(texto){
        if (typeof texto !== 'string' || texto.length === 0) {
            throw new Error("El texto esta mal");
        }   

        this.texto=texto;
    }   
    set setResponsable(responsable){
        if (typeof responsable !== 'string' || responsable.length === 0) {
            throw new Error("El responsable esta mal");
        }
        this.responsable=responsable;
    }
}

const tareas=[];
//document.getElementById("lista_tarea").innerText="Tareas: " + tareas[0].getTexto ;

const input = document.getElementById("texto");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

 

  const lista = document.getElementById("lista");
    
  boton.addEventListener("click", () => {
    
    agregarTarea();
    });


function agregarTarea(){
    const texto = document.getElementById("texto").value;
    const responsable = document.getElementById("responsable").value;
    const nombre = "Tarea " + (tareas.length + 1);
    try {
        const tareaNueva = new tarea(nombre, texto, responsable);
        tareas.push(tareaNueva);
        const li = document.createElement("li");
        li.textContent = tareaNueva.getTexto;
        lista.appendChild(li);
    }   
    catch (error) {
        alert(error.message);
    }   
}

function agregarTarea(){
    const texto = document.getElementById("texto").value;
    const responsable = document.getElementById("responsable").value;
    const nombre = "Tarea " + (tareas.length + 1);
    try {
        const tareaNueva = new tarea(nombre, texto, responsable);
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = tareaNueva.getTexto;
        tr.appendChild(td);
        lista.appendChild(tr);
    }   
    catch (error) {
        alert(error.message);
    }   
}