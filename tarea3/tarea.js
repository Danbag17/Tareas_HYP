const arrOriginal = [3, 4, 2, 4, 4, 5, 12, 24, 3, 23, 232, 2, -3, -9, 2, -23, 200, -23, 12, 43, 4, -32, -32, 0, 23, 23];
let el=0;
arrOriginal.map((el) => console.log("En el subsistema de software somos " + el + " miembros"));


//3
const pos=n=> n>0;
let arr2=()=>{ return arrOriginal.filter(pos);};

//4
arrValidos=arr2().filter(x=>x<10);
arrValidos.map(x => console.log(`En el subsistema de software somos ${x} miembros`));

//5
const arrFiltrado =arrOriginal.filter(x=>x%2===0 && x>0 && x<100);

//6
const arrCubos=arrFiltrado.map(x=>x**3);
const arrCubosFiltrados =arrCubos.filter(x=>x % 10 === 0);

//7
const arrFinal =arrCubosFiltrados.push(21);
//8
const arrCopia= [...arrFinal];
