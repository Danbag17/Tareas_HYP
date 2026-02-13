class tarea{
    #texto;
    #responsable;
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
        this.#texto=texto;
        this.#responsable=responsable;       
    }

    get Texto(){
        return this.#texto;
    }    

    get Responsable(){
        return this.#responsable;
    }   
    set Texto(texto){
        if (typeof texto !== 'string' || texto.length === 0) {
            throw new Error("El texto esta mal");
        }   

        this.#texto=texto;
    }   
    set Responsable(responsable){
        if (typeof responsable !== 'string' || responsable.length === 0) {
            throw new Error("El responsable esta mal");
        }
        this.#responsable=responsable;
    }
}

const tareas=[];

const input_texto = document.getElementById("texto");
const input_responsable = document.getElementById("responsable");
const botonAgregar = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const lista = document.getElementById("lista");
const btnFiltro = document.getElementById("btnFiltrar");
const inputFiltro = document.getElementById("filtroResponsable");

    
  botonAgregar.addEventListener("click", () => {
    
    agregarTarea();
    });

    btnFiltro.addEventListener("click", () => {
        filtrarTareas();
    });

function agregarTarea(){
    const texto = input_texto.value;
    const responsable = input_responsable.value;
    const nombre = "Tarea " + (tareas.length + 1);
    try {
        const tareaNueva = new tarea(nombre, texto, responsable);
        tareas.push(tareaNueva);

        mostrarTarea(tareaNueva);

    }   
    catch (error) {
        alert(error.message);
    }   

    input_texto.value = "";
    input_responsable.value = "";
}


function eliminarTarea(tr, tareaNueva) {
    tr.remove();
    
    const indice = tareas.indexOf(tareaNueva);
    if (indice > -1) {
        tareas.splice(indice, 1);
    }
}


function editarTarea(tr, tareaObjeto, btnEditar) {
    // cuando guardas los cambios
    if (btnEditar.textContent === "Guardar") {
        const nuevoTexto = tr.children[1].querySelector("input").value;
        const nuevoResponsable = tr.children[2].querySelector("select").value;

        try {
            
            tareaObjeto.Texto = nuevoTexto;
            tareaObjeto.Responsable = nuevoResponsable;
           
            tr.children[1].textContent = nuevoTexto;
            tr.children[2].textContent = nuevoResponsable;
            
            btnEditar.textContent = "Editar";
        } catch (error) {
            alert(error.message);
        }
        return; 
    }

    // cuando editas

    // <input>
    const textoActual = tareaObjeto.texto;
    tr.children[1].innerHTML = ""; 
    const inputTexto = document.createElement("input");
    inputTexto.type = "text";
    inputTexto.value = textoActual;
    inputTexto.style.width = "100%"; 
    tr.children[1].appendChild(inputTexto);

    //  <select>
    const responsableActual = tareaObjeto.Responsable;
    tr.children[2].innerHTML = ""; 
    const selectResponsable = document.createElement("select");
    selectResponsable.style.width = "100%";

    const opciones = ["Software", "Hardware", "Partners", "Otros"];
    
    opciones.forEach(opcion => {
        const opt = document.createElement("option");
        opt.value = opcion;
        opt.textContent = opcion;
        if (opcion === responsableActual) {
            opt.selected = true;
        }
        selectResponsable.appendChild(opt);
    });
    
    tr.children[2].appendChild(selectResponsable);

    btnEditar.textContent = "Guardar";
}



function filtrarTareas() {
    let tablaFiltrada=[];
    const CopiaTabla = tareas;
    const representanteFiltro = inputFiltro.value; 

    tablaFiltrada=CopiaTabla.filter(tarea => tarea.Responsable.includes(representanteFiltro));

    lista.innerHTML = "";
    tablaFiltrada.forEach(tarea => {
        mostrarTarea(tarea);
    });
}

function mostrarTarea(tareaNueva) {
    
        const tr = document.createElement("tr");
        const tdNombre = document.createElement("td");
        tdNombre.textContent = tareaNueva.nombre;
        const tdTexto = document.createElement("td");
        tdTexto.textContent = tareaNueva.Texto;
        const tdResponsable = document.createElement("td");
        tdResponsable.textContent = tareaNueva.Responsable;


        const tdAcciones = document.createElement("td");
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");

        
        btnEliminar.addEventListener("click", () => {
            eliminarTarea(tr, tareaNueva);
        });
        
        tdAcciones.appendChild(btnEliminar);


        // Botón Editar
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.classList.add("btn-editar");
        
        btnEditar.addEventListener("click", () => {
            editarTarea(tr, tareaNueva, btnEditar); 
        });
        
        
        tdAcciones.appendChild(btnEditar);


        //nombre
        tr.appendChild(tdNombre);
        //texto
        tr.appendChild(tdTexto);
        //responsable
        tr.appendChild(tdResponsable);
        //acciones
        tr.appendChild(tdAcciones);
        
        lista.appendChild(tr);

}

