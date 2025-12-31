class Person{
    #name
    #dni
    #letraDni
    constructor(name,dni){
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error("El nombre esta mal");
        }

        if (typeof dni !== 'number' || dni < 0) {
            throw new Error("El dni esta mal");
        }
        this.#name=name;
        this.#dni=dni;
        this.#letraDni=this.letraDni(dni);
    }
    get getName(){
        return this.#name;
    }
    get getDni(){
        return this.#dni;
    }       
    get getLetraDni(){
        return this.#letraDni;
    }   
    set setName(name){  
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error("El nombre esta mal");
        }
        this.#name=name;
    }

    static letraDni(dni){
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const index = dni % 23;
        return letras.charAt(index);
    }
    getInfo(){
        return `Nombre: ${this.#name}, DNI: ${this.#dni}+${this.#letraDni}`;
    }

}

class Member extends Person{
    #department
    #yearsExperience
    static list=["Managment","Operaciones","Avionics","Electromagnetics","Mechanics"]


    constructor(name,dni,department,yearsExperience){
        super(name,dni);
        if(!Member.comprobarDepartamento(department)) throw new Error("El departamento esta mal");
        this.#department=department;
        if(typeof yearsExperience !== 'number' || yearsExperience<0) throw new Error("Los años de experiencia estan mal");
        this.#yearsExperience=yearsExperience;
    }

    get  getDepartment(){
        return this.#department;
    }       
    set setDepartment(department){
       if(!Member.comprobarDepartamento(department)) throw new Error("El departamento esta mal");
        this.#department=department;
    }   

    get getYearsExperience(){
        return this.#yearsExperience;
    }

    getInfo(){
        return `${super.getInfo()}, Departamento: ${this.#department}, Años de experiencia: ${this.#yearsExperience}`;
    }
    
   
     static comprobarDepartamento(department){
        for(let i=0;i<Member.list.length;i++){
            if(department===Member.list[i]){
                return true;    
            } else if(i===Member.list.length-1){
                return false;
            }
        }  
    }

}

class Engineer extends Member{
    #specialty

    constructor(name,dni,department,yearsExperience,specialty){
        super(name,dni,department,yearsExperience);
        if(typeof specialty !== 'string' || specialty.length === 0) {
            throw new Error("La especialidad esta mal");
        }
        this.#specialty=specialty;
    }
    get getSpecialty(){
        return this.#specialty;
    }   
    getInfo(){
        return `${super.getInfo()}, Especialidad: ${this.#specialty}`;
    }

}

class Team{
    #members=[];
    constructor(){
        this.#members=[];
    }   
    addMember(member){
        if(!(member instanceof Member)) throw new Error("No es un miembro valido");
        this.#members.push(member);
    }
    removeMember(dni){  
        this.#members = this.#members.filter(member => member.getDni !== dni);
    }
    listMembers(){
        this.#members.forEach(member => console.log(member.getInfo()));
    }
    
    countMembersByDepartment(department){
        return this.#members.filter(member => member.getDepartment === department).length;
    }   

}

//zona de uso

const  inge1=new Engineer("Daniel",12345678,"Mechanics",5,"Aeroespacial");
const inge2=new Engineer("Laura",87654321,"Avionics",3,"Sistemas Embebidos");
const member1=new Member("Carlos",11223344,"Operaciones",4);
const team=new Team();
team.addMember(inge1);
team.addMember(inge2);
team.addMember(member1);
team.listMembers();
console.log("Número de miembros en Mechanics: " + team.countMembersByDepartment("Mechanics"));
console.log("Número de miembros en Avionics: " + team.countMembersByDepartment("Avionics"));
console.log("Número de miembros en Operaciones: " + team.countMembersByDepartment("Operaciones"));
console.log("Número de miembros en Electromagnetics: " + team.countMembersByDepartment("Electromagnetics"));
console.log("Número de miembros en Managment: " + team.countMembersByDepartment("Managment"));
try {
    const member2=new Member("Carlos",11223344,"tumadre",4);
} catch (error) {
    console.error(error.message);
}