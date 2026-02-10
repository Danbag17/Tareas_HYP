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

const input_texto = document.getElementById("texto");
const input_responsable = document.getElementById("responsable");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const lista = document.getElementById("lista");
    
  boton.addEventListener("click", () => {
    
    agregarTarea();
    });


function agregarTarea_lista(){
    const texto = input_texto.value;
    const responsable = input_responsable.value;
    const nombre = "Tarea " + (tareas.length + 1);
    try {
        
        const li = document.createElement("li");
        li.textContent = tareaNueva.getTexto;
        lista.appendChild(li);
    }   
    catch (error) {
        alert(error.message);
    }   
}

function agregarTarea(){
    const texto = input_texto.value;
    const responsable = input_responsable.value;
    const nombre = "Tarea " + (tareas.length + 1);
    try {
        const tareaNueva = new tarea(nombre, texto, responsable);
        tareas.push(tareaNueva);
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = tareaNueva.getTexto;
        const td2 = document.createElement("td");
        td2.textContent = tareaNueva.getResponsable;
        const td3 = document.createElement("td");
        td3.textContent = tareaNueva.nombre;

        const tdAcciones = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");

        btnEliminar.addEventListener("click", () => {
            eliminarTarea(tr, tareaNueva);
        });
        
        tdAcciones.appendChild(btnEliminar);

        //nombre
        tr.appendChild(td3);
        //texto
        tr.appendChild(td);
        //responsable
        tr.appendChild(td2);
        lista.appendChild(tr);


         
    }   
    catch (error) {
        alert(error.message);
    }   
}


function eliminarTarea(tr, tareaNueva) {
    tr.remove();
    
    // Eliminar del array
    const indice = tareas.indexOf(tareaNueva);
    if (indice > -1) {
        tareas.splice(indice, 1);
    }
}