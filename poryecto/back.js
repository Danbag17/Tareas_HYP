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
    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    agregarTarea();
    });


function agregarTarea(){
    const texto = document.getElementById("texto").value;
    const responsable = document.getElementById("responsable").value;
    const nombre = "Tarea " + (tareas.length + 1);
    try {
        const tareaNueva = new tarea(nombre, texto, responsable);
        tareas.push(tareaNueva);
        document.getElementById("lista_tarea").innerText="Tareas: " + tareas.map(t => t.getTexto).join(", ");
    }   
    catch (error) {
        alert(error.message);
    }   
}