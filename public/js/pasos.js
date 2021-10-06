const ENLACES = document.querySelectorAll('.tabs button');

let PAGINA = 1;

document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

    paginador();
});

function iniciarApp(){
    //Paginador
    cambiar();
}

function paginador(){
    const SECCION = document.querySelector('.mostrar-seccion');
    if( SECCION ){
        SECCION.classList.remove('mostrar-seccion');
    }

    const actual = document.querySelector(`#paso-${PAGINA}`);
    actual.classList.add('mostrar-seccion');
    
    const tabs = document.querySelector('.tabs .actual');
    if( tabs ){
        tabs.classList.remove('actual');
    }

    const tab = document.querySelector(`[data-paso="${PAGINA}"]`);
    tab.classList.add('actual');
}

function cambiar(){
    ENLACES.forEach( enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();

            PAGINA = parseInt( e.target.dataset.paso);

            paginador();
        });
    });
}