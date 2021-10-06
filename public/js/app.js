const CARRITO = document.querySelector('#carrito');
const CONTENEDOR_CARRITO = document.querySelector('#lista-carrito tbody');
const VACIAR_CARRITO = document.querySelector('#vaciar-carrito');
const LISTA_CURSOS = document.querySelector('.lista-productos');
let articulos = [];

eventos();
function eventos() {
    if(LISTA_CURSOS){
        LISTA_CURSOS.addEventListener('click', agregar);
    }

    CARRITO.addEventListener('click', eliminarCurso);

    document.addEventListener('DOMContentLoaded', () => {
        articulos = JSON.parse( sessionStorage.getItem('articulos')) || [];
        carritoC();
    }); 
}

function agregar(e) {
    e.preventDefault();
    
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSelect = e.target.parentElement.parentElement.parentElement;
        leerDatos(cursoSelect);
        sincronizar();
    }
}

//Eliminar un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('delete')) {
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulos por el data-id
        articulos = articulos.filter( curso => {
            if(curso.id === cursoId){
                if(curso.cantidad > 1 ) {
                    curso.cantidad--;
                    return curso;
                }else {
                    delete curso;
                }
            } else {
                return curso;
            }
        });

        carritoC(); //Iterar sobre el carrito
    }
}

//Lee el contenido del HTML al que dimos click y extrae la informacion el curso
function leerDatos(curso)
{
    //crear objeto con el contenido actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulos.some( curso => curso.id === infoCurso.id);
    // console.log(existe);
    if( existe ) {
        //Actualizamos la cantidad
        const cursos = articulos.map( curso => {
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso;   //Retorna el objeto actualizado
            }else {
                return curso;   //retorna los objetos que no son los duplicados
            }
        });
        articulos = [...cursos];
    }else {
        //Agregar el cusro al carrito
        //Enviar elementos al areglo
        articulos = [...articulos, infoCurso];
    }

    // console.log(articulos);
    carritoC();
}


//Muestra el carrito de compras en el HTML
function carritoC() {
    //Limpiar el HTML
    clear();
    //Recorre el carrito y genera el HTML
    articulos.forEach( (curso) => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" class="img-small">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#"><i class="delete bi bi-x-circle-fill" style="color: #d00000; font-size: 2.5rem;" data-id="${id}"></i></a>
            </td>
        `;
        //Agregar el html del carrito en el tbody
        CONTENEDOR_CARRITO.appendChild(row);

    });

    sincronizar();
}

//Llamar funcion de sessionstorage
function sincronizar()
{
    sessionStorage.setItem('articulos', JSON.stringify(articulos));
    // sessionStorage.setItem('contador', JSON.stringify(contador));
}

//Eliminar articulos del html
function clear() {
    //Forma lenta
    // CONTENEDOR_CARRITO.innerHTML = '';

    while(CONTENEDOR_CARRITO.firstChild){
        CONTENEDOR_CARRITO.removeChild(CONTENEDOR_CARRITO.firstChild);
    }
}