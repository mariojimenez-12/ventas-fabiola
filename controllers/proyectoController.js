exports.proyectoIndex = (req, res) => {//.use y .send son funciones que existen en express .use va a leer cualquier verbo de HTML, que quiere decir esto, que va a leer GET, POST, PUT, DELETE, PATCH, etc...
    res.render('index');//Todo lo que tengas aqui adentro lo va a imprimir en pantalla
}

exports.proyectoJoyeria = (req, res) => {
    res.render('joyeria');
}

exports.cadenas = (req, res) => {
    res.render('cadenas');
}

exports.aretes = (req, res) => {
    res.render('aretes');
}

exports.anillos = (req, res) => {
    res.render('anillos');
}

exports.letras = (req, res) => {
    res.render('letras');
}

exports.ofertas = (req, res) => {
    res.render('ofertas');
}

exports.contacto = (req, res) => {
    res.render('contacto');
}

exports.preguntas = (req, res) => {
    res.render('preguntas');
}

exports.register = (req, res) => {
    res.render('register');
}

exports.help = (req, res) => {
    res.render('help');
}

exports.login = (req, res) => {
    res.render('login');
}

exports.cart = (req, res) => {
    res.render('cart');
}