console.log('Hola Mundo!')

//Tarea 2 ej 1:

const estudiantes = [

    { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
    { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
    { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
    { nombre: "Pedro", edad: 21, notas: [80, 82, 88, 90, 85] },
    { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
  ];

contador = 0
acumulador = 0
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i]
    for (let n = 0; n < estudiante.notas.length; n++) {
        const nota = estudiante.notas[n]
        contador++
        acumulador += nota
    }   
}
console.log('El promedio total de la clase es ' + acumulador/contador)

//Tarea 2 ej 2:

notaMinima = 100
nombreNota = ''
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i]
    for (let n = 0; n < estudiante.notas.length; n++) {
        const nota = estudiante.notas[n]
        if (nota < notaMinima) {
        notaMinima = nota
        nombreNota = estudiante.nombre
        }
    }
}
console.log('La nota más baja la tiene: ' + nombreNota)

//Tarea 2 ej 3:

notaMaxima = 0
nombreNota = ''
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i]
    for (let n = 0; n < estudiante.notas.length; n++) {
        const nota = estudiante.notas[n]
        if (nota > notaMaxima) {
        notaMaxima = nota
        nombreNota = estudiante.nombre
        }
    }
}
console.log('La nota más alta la tiene: ' + nombreNota)