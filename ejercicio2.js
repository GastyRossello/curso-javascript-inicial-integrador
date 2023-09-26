/*
    Crea una página web que muestre una lista de estudiantes y sus promedios. La página debe realizar las siguientes tareas:

    1. Mostrar la lista de 10 estudiantes.
    2. Resaltar en color verde a los estudiantes que tengan un promedio de 10.
    3. Calcular el promedio general de la clase y mostrarlo en algun lugar de la pagina.
*/

const claseJSON = '{"estudiantes":[{"nombre":"Juan","promedio":7},{"nombre":"Pedro","promedio":9},{"nombre":"Maria","promedio":8},{"nombre":"Carlos","promedio":10},{"nombre":"Ana","promedio":7},{"nombre":"Pablo","promedio":10},{"nombre":"Matias","promedio":6},{"nombre":"Ezequiel","promedio":8},{"nombre":"Florencia","promedio":9},{"nombre":"Roxana","promedio":7}]}'
const clase = JSON.parse(claseJSON)
let container = document.querySelector('.container')

clase.estudiantes.forEach(estudiante => {
    const estudianteHTMLString = `<p> ${estudiante.nombre}, y su promedio es ${estudiante.promedio} </p>`
    container.insertAdjacentHTML("afterbegin", estudianteHTMLString)
});