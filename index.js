import moment from "https://esm.sh/moment/moment";

alert('¡Bienvenido al restaurante más sabroso de la costa!');

const mainMenu = {
  'DESAYUNO' : {
    'TOSTADA': {precio: 3},
    'TORTILLA': {precio: 3.5},
    'PINCHOS': {precio: 2},
    'BOCADILLO': {precio: 2.25},
  },

  'ALMUERZO' : {
    'PAELLA': {precio: 6},
    'POLLO': {precio: 5},
    'DORADA': {precio: 6.5},
    'CARNE': {precio: 7},
  },

  'CENA' : {
    'PAELLA': {precio: 8},
    'POLLO': {precio: 7},
    'DORADA': {precio: 7.5},
    'CARNE': {precio: 9},
  } 
}

const sidesMenu = {
  segundosPlatos : {
    'ENSALADA': {precio: 3},
    'PIMIENTOS': {precio: 3.5},
    'HUEVOS': {precio: 2},
    'CROQUETAS': {precio: 2.25},
  },

  bebidas : {
    'ZUMO': {precio: 4.5},
    'AGUA': {precio: 2},
    'FANTA': {precio: 3},
    'MOSTO': {precio: 4},
  },

  postres : {
    'TARTA': {precio: 3},
    'HELADO': {precio: 2.5},
    'FLAN': {precio: 2},
    'FRUTAS': {precio: 3.5},
  } 
}

const comentariosComida = [
  '¡Excelente elección! Este plato es delicioso.',
  '¡Muy bien! Te va a encantar este plato.',
  '¡Fantástico! Uno de nuestros platos más populares.',
  '¡Perfecto! Esta opción es una delicia.',
  '¡Qué elección tan sabrosa! Disfrútalo mucho.',
  '¡Bravo! Este plato es una verdadera delicia.',
  '¡Buen provecho! Este plato es exquisito.'
]

const comentarioAleatorio = comentarios => {
  const indexAleatorio = Math.floor(Math.random() * comentarios.length);
  const comentario = comentarios[indexAleatorio];
  return comentario;
}

let total = 0;

let inputComida = false;
let eleccionUsuario;
let preguntaQueComida;
while (!inputComida) {
  const respuestaQueHora = prompt(`Introduce, por favor, la hora en el formato HH:mm`);

  const hora = moment(respuestaQueHora, "HH:mm");

  if (hora.isSameOrAfter(moment("08:00", "HH:mm")) && hora.isSameOrBefore(moment("12:00", "HH:mm"))) {
    preguntaQueComida = 'DESAYUNO';
    eleccionUsuario = mainMenu[preguntaQueComida]; 
    inputComida = true; 
  } else if (hora.isSameOrAfter(moment("12:01", "HH:mm")) && hora.isSameOrBefore(moment("16:00", "HH:mm"))) {
    preguntaQueComida = 'ALMUERZO';
    eleccionUsuario = mainMenu[preguntaQueComida]; 
    inputComida = true; 
  } else if (hora.isSameOrAfter(moment("16:01", "HH:mm")) && hora.isSameOrBefore(moment("20:00", "HH:mm"))) {
    preguntaQueComida = 'CENA';
    eleccionUsuario = mainMenu[preguntaQueComida]; 
    inputComida = true; 
  } else if (hora.isSameOrAfter(moment("20:01", "HH:mm")) || hora.isSameOrBefore(moment("07:59", "HH:mm"))) {
    alert("El restaurante está cerrado en este momento, abrirá de nuevo a las 08:00."); 
  } else {
    alert('¡Oops! Parece que hay un error en el formato de la hora introducida. Por favor, inténtelo de nuevo.');
  }
}

let primerPlato;
let primerPlatoPrecio;
let inputPrimerPlato = false;
while (!inputPrimerPlato) {
  primerPlato = prompt(`Para ${preguntaQueComida.toUpperCase()} le ofrecemos los siguientes PRIMEROS PLATOS:\n\n${Object.keys(eleccionUsuario).map(comida => `${comida} ....... ${eleccionUsuario[comida].precio} €`).join('\n')}\n\nHaga su elección.`);

  if (Object.keys(eleccionUsuario).includes(primerPlato.toUpperCase())) {
    const primerPlatoObject = eleccionUsuario[primerPlato.toUpperCase()];
    primerPlatoPrecio = primerPlatoObject.precio;
    
    alert(`Su elección: ${primerPlato.toUpperCase()} por ${primerPlatoObject.precio} €.\n\n${comentarioAleatorio(comentariosComida)}`);
    total += primerPlatoPrecio;
    inputPrimerPlato = true;

  } else {
    alert('¡Oops! Parece que hay un error en su elección. Por favor, inténtelo de nuevo.');
  }
}

let inputSegundoPlato = false;
let segundoPlato;
let segundoPlatoPrecio;
while (!inputSegundoPlato) {
  segundoPlato = prompt(`Le ofrecemos los siguientes SEGUNDOS PLATOS:\n\n${Object.keys(sidesMenu.segundosPlatos).map(comida => `${comida} ....... ${sidesMenu.segundosPlatos[comida].precio} €`).join('\n')}\n\nHaga su elección.`);

  if (Object.keys(sidesMenu.segundosPlatos).includes(segundoPlato.toUpperCase())) {
    const segundoPlatoObject = sidesMenu.segundosPlatos[segundoPlato.toUpperCase()];
    segundoPlatoPrecio = segundoPlatoObject.precio;
    
    alert(`Su elección: ${segundoPlato.toUpperCase()} por ${segundoPlatoObject.precio} €.\n\n${comentarioAleatorio(comentariosComida)}`);
    total += segundoPlatoPrecio;
    inputSegundoPlato = true;

  } else {
    alert('¡Oops! Parece que hay un error en su elección. Por favor, inténtelo de nuevo.');
  }
}

let inputBebida = false;
let bebida;
let bebidaPrecio;
while (!inputBebida) {
  bebida = prompt(`Le ofrecemos las siguientes BEBIDAS:\n\n${Object.keys(sidesMenu.bebidas).map(bebida => `${bebida} ....... ${sidesMenu.bebidas[bebida].precio} €`).join('\n')}\n\nHaga su elección.`);

  if (Object.keys(sidesMenu.bebidas).includes(bebida.toUpperCase())) {
    const bebidaObject = sidesMenu.bebidas[bebida.toUpperCase()];
    bebidaPrecio = bebidaObject.precio;
    
    alert(`Su elección: ${bebida.toUpperCase()} por ${bebidaObject.precio} €.\n\n${comentarioAleatorio(comentariosComida)}`);
    total += bebidaPrecio;
    inputBebida = true;

  } else {
    alert('¡Oops! Parece que hay un error en su elección. Por favor, inténtelo de nuevo.');
  }
}

let inputPostre = false;
let postre;
let postrePrecio;

const preguntaPostres = confirm('¿Le gustaría añadir algún postre a su pedido?');

if (preguntaPostres) {
  while (!inputPostre) {
  postre = prompt(`Le ofrecemos los siguientes POSTRES:\n${Object.keys(sidesMenu.postres).map(postre => `${postre} ....... ${sidesMenu.postres[postre].precio} €`).join('\n')}\n\nHaga su elección.`);

  if (Object.keys(sidesMenu.postres).includes(postre.toUpperCase())) {
    const postresObject = sidesMenu.postres[postre.toUpperCase()];
    postrePrecio = postresObject.precio;
    
    alert(`Su elección: ${postre.toUpperCase()} por ${postresObject.precio} €.\n\n${comentarioAleatorio(comentariosComida)}`);
    total += postrePrecio;
    inputPostre = true;
    alert(`Su pedido:\n\n${primerPlato.toUpperCase()} ....... ${primerPlatoPrecio} €\n${segundoPlato.toUpperCase()} ....... ${segundoPlatoPrecio} €\n${bebida.toUpperCase()} ....... ${bebidaPrecio} €\n${postre.toUpperCase()} ....... ${postrePrecio} €\n\nTOTAL ....... ${total} €`);

  } else {
    alert('¡Oops! Parece que hay un error en su elección. Por favor, inténtelo de nuevo.');
  }
}
} else {
  alert(`Su pedido:\n\n${primerPlato.toUpperCase()} ....... ${primerPlatoPrecio} €\n${segundoPlato.toUpperCase()} ....... ${segundoPlatoPrecio} €\n${bebida.toUpperCase()} ....... ${bebidaPrecio} €\n\nTOTAL ....... ${total} €`);
}
