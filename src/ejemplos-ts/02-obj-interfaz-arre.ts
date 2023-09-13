
interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;
}

const alumno:Alumno={
    nombre: "juan",
    email: "juan@gmail.com",
}


console.log(alumno.nombre)

let mascotas=["Perro","Gato","Perico"]

mascotas[1]="perico verde";

mascotas.push("Gato dos");
console.table(mascotas);

let tem: (string | number)[] = [];
tem.push("RCR");
tem.push(34);
