// ### VARIABLES ###

// Array de palabras
let palabras = [
  ['touted','promocionada o promocionado'],['aardvark','cerdo hormiguero'],['acorn','bellota'],['acquaintances','conocidos'],['aim','objetivo'],['although','a pesar de que'],['amusement','diversión'],['anguish','angustia'],['awe','temor'],['awestruck','atemorizado'],['awkward','torpe'],['barely','apenas'],['bashfully','encogidamente'],['begrudgingly','a disgusto'],['besides','además'],['betrayal','traición'],['boisterous','bullicioso'],['budget','presupuesto'],['bury','enterrar'],['chagrin','disgusto'],['chamomile','manzanilla'],['choosey','exquisito'],['clueless','despistado'],['clumsy','torpe'],['constable','alguacil'],['croon','canturrear'],['cunning','astuto'],['cushy','fácil'],['dainty','delicado'],['dam','presa'],['dazed','aturdido'],['dazzling','deslumbrante'],['deceitful','engañoso'],['demeanor','comportamiento'],['despondent','abatido'],['disease','enfermedad'],['distraught','loco'],['dodges','esquiva'],['falter','desfallecer'],['farewell','despedida'],['fiends','demonios'],['garland','guirnalda'],['gloomy','melancólico'],['grief','dolor'],['gypped','gypped'],['hideous','horrible'],['iffy','dudoso'],['indeed','en efecto'],['jostling','empujones'],['kindling','astillas'],['lend','prestar'],['likewise','igualmente'],['liminal','liminal'],['ludicrous','ridículo'],['lukewarm','tibio'],['meek','manso'],['mourning','luto'],['muddled','confuso'],['naive','ingenuo'],['nincompoop','bobo'],['nosy','curioso'],['ordeal','prueba'],['outrage','atropello'],['parakeet','perico'],['phonies','farsantes'],['pitiful','lamentable'],['preachy','sermoneador'],['quibble','sutileza'],['quibbles','objeciones'],['quizzically','con curiosidad'],['rapport','compenetración'],['rather','más bien'],['rendezvous','cita'],['rubbish','basura'],['ruthless','implacable'],['scruffy','desaliñado'],['scuttle','escotilla'],['shrugged','se encogió de hombros'],['skittish','asustadizo'],['slab','losa'],['sloth','perezoso'],['snigger','risa disimulada'],['snuggle','acurrucarse'],['sparrow','gorrión'],['spineless','sin carácter'],['splutters','balbucea'],['stag','ciervo'],['stapler','engrapadora'],['stillness','quietud'],"['stubborn','obstinadaobstinado'],"['stubbornness','testarudez'],['succinct','sucinto'],['swaddled','envuelto'],['tarnish','deslustre'],['tattling','chismoso'],['thoughtful','pensativo'],['threat','amenaza'],['through','mediante'],['thud','ruido sordo'],['tittle-tattle','chismorreo'],['togetherness','unión'],['tough','difícil'],['tuff','toba'],['twitch','contracción nerviosa'],['unfaltering','inquebrantable'],['unsettling','inquietante'],['wary','cauteloso'],['wilted','marchito'],['wintry','invernal'],['wispy','tenue'],['wit','ingenio'],['woebegone','desconsolado'],['wreath','guirnalda'],['wuss','cobarde'],['yawn','bostezo'],['apple','manzana'],['cat','gato'],['flag','bandera'],['switch','interruptor'],['spring','primavera'],['break','descanso'],['dish','plato'],['iron','plancha'],['frozen','helado'],['chrysanthemum','crisantemo'],['obsidian','obsidiana'],['stone','piedra'],['butterfly','mariposa'],['moth','polilla'],['stub','colilla'],['plant','planta'],['stem','tallo'],['engineering','ingeniería'],['Entrepreneurship','emprendimiento'],['thought','pensamiento'],['writing','escritura'],['alcohol','alcohol'],['pet','mascota']
];
// Palabra a averiguar
let palabra = "";
// Nº aleatorio
let rand;
// Palabra oculta
let oculta = [];
// Elemento html de la palabra
let hueco = document.getElementById("palabra");
// Contador de intentos
let cont = 6;
// Botones de letras
//var buttons = document.getElementsByClassName('letra');
// Boton de inicio
let btnInicio = document.getElementById("inicio");

// Boton de pista
let btnPista = document.getElementById("pista");

//Boton cambia teclado a pizarra y pizarra a teclado
let tecladoPizarra = document.getElementById("tecladoPizarra")

let teclado;
let pizarra;

// ### FUNCIONES ###
/* let onMayus=false;
function comprobarMayus(){
  document.addEventListener('keyup', (e) => {
    if (e.getModifierState('CapsLock')) {
      onMayus=true;
      console.log("Gracias. Ahora estás usando teclado en mayúsculas");
    }else{
      onMayus=false;
      console.log("Ahora estás usando teclado en minúsculas");
    }
    return onMayus;
  });
}; */

// Escoger palabra al azar
function generaPalabra() {
  // se obtiene un numero decimal aleatorio entre 0 - 1 
  // y se multiplica por el numero total de palabras
  // despues se convierte el numero en numero entero
  // y se guarda en la variable rand
  rand = (Math.random() * palabras.length).toFixed(0);
  // se usa la variable rand como indice para obtener un valor del array palabras
  // y se guarda en la variable palabra
  palabra = palabras[rand][0].toUpperCase();
  pintarGuiones(palabra.length);
}


// Funcion para pintar los guiones de la palabra
function pintarGuiones(num) {

  oculta = []; //IMPORTANTE
  // se itera la variable i hasta ser igual a la variable num que es 
  // el numero de caracteres de la palabra
  for (var i = 0; i < num; i++) {
    // al array oculta se le va asignando el valor "_" 
    oculta[i] = "_";
  }
  // imprime todos los valores del array oculta en el objeto hueco
  hueco.innerHTML = oculta.join("");
}

// Chequear intento
function intento(letra) {
  //::: una condicion extra para que intente solo cuando haya dado clic en jugar
  if (document.getElementById(letra).disabled == false){
    // hace que el objeto sea deshabilitado
  document.getElementById(letra).disabled = true;
  // verifica que la variable palabra contenga la letra enviada
  if(palabra.indexOf(letra) != -1) {
    /* ::: si la posición de la letra dentro de la palabra 'no es igual a -1' significa que sí pertenece a la palabra,
    la posición -1 resulta si colocas un número o una letra que no pertenece 
    */ 
    // itera i hasta que sea igual al numero de caracteres de la palabra
    for(var i=0; i<palabra.length; i++) {
      // en caso de haya una concidencia la letra reemplaza "_" 
      // por la letra enviada en el array oculta
      if(palabra[i]==letra) oculta[i] = letra;
    }
    // imprime todos los valores del array oculta en el objeto hueco
    hueco.innerHTML = oculta.join("");
    // imprime un mensaje en el objeto con el id acierto
    document.getElementById("acierto").innerHTML = "Bien!";
    // agrega las clases acierto verde en el objeto con el id acierto
    document.getElementById("acierto").className += "acierto verde";
  }else{
    // disminuye en 1 la variable cont
    cont--;
    // imprime el valor cont en el objeto con el id intentos
    document.getElementById("intentos").innerHTML = cont;
    // imprime un mensaje en el objeto con el id acierto
    document.getElementById("acierto").innerHTML = "Fallo!";
    // agrega las clases acierto rojo en el objeto con el id acierto
    document.getElementById("acierto").className += "acierto rojo";
    // cambia el valor de la propiedad src del objeto con el id image
    document.getElementById("image").src = `img/ahorcado_${cont}.png`;
  }
  // ejecuta la funcion comprueba fin
  compruebaFin();
  // ejecuta una funcion de tiempo de duracion de 800 milisegundos
  setTimeout(function () {
    // imprime un mensaje vacio en el objeto con el id acierto
    document.getElementById("acierto").className = ""; 
  }, 800);
  }
}

// Obtener pista
function pista() {
  // imprime en el objeto con el id hueco-pista el valor de array palabras
  document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
}

// Compruba si ha finalizado
function compruebaFin() {
  // verifica que la variable oculta contenga "_"
  if( oculta.indexOf("_") == -1 ) {
    // imprime un mensaje en el objeto con el id msg-final
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    // agrega la clase zoom-in en el objeto con el id msg-final
    document.getElementById("msg-final").className += " zoom-in";
    // agrega la clase encuadre en el objeto con el id palabra
    document.getElementById("palabra").className += " encuadre";
    // deshabilita todos los botones
    for (var i = 0; i < btnLetra.length; i++) {
      btnLetra[i].disabled = true;
    }
    btnInicio.innerHTML = "Jugar de nuevo :)";
    // asigna la funcion de recarga de pagina al objeto con id reset
    //btnInicio.onclick = function() { location.reload() };
    btnInicio.addEventListener('click',()=>{
      quitarMensajes();
    })
    // verifica que el contador sea igual a cero
  }else if( cont == 0 ) {
    // imprime un mensaje en el objeto con el id msg-final
    document.getElementById("msg-final").innerHTML = "Has perdido<br>La palabra era "+palabra;
    // agrega la clase zoom-in en el objeto con el id msg-final
    document.getElementById("msg-final").className += "zoom-in";
    // deshabilita todos los botones
    for (var i = 0; i < btnLetra.length; i++) {
      btnLetra[i].disabled = true;
    }
    // cambia el valor de innerHTML del objeto con el id reset
    document.getElementById("inicio").innerHTML = "Intentar de nuevo"; //que es esto
    // asigna la funcion de recarga de pagina al objeto con id reset
    btnInicio.addEventListener('click',()=>{
      quitarMensajes();
    })
  }
}


function quitarMensajes(){
  btnInicio.innerHTML = 'Otra palabra'
  document.getElementById("msg-final").innerHTML = "";
  cont=6;
  document.getElementById("palabra").className = "palabra";
  document.getElementById("hueco-pista").innerHTML = "";
  pizarra.focus();
}


//::::: for each se usa en arrays, como es string no
function generarTeclado (){

  let tecladoJS = document.querySelector('#teclado');
  usarAlfabeto(alfabetoMayus);
  document.querySelectorAll('.letra').forEach(item => {
    item.disabled=true
  })  

  function usarAlfabeto(alfabeto){
    for (let i=0;i<alfabeto.length;i++){
      let spancito = document.createElement('button');
        
        spancito.id = alfabeto[i];
        spancito.innerHTML = alfabeto[i];
        spancito.value = alfabeto[i];
        spancito.className = 'letra'
        //if (spancito.innerHTML.toUpperCase == spancito.innerHTML){
        if (alfabetoMayus.includes(spancito.value)){
          spancito.className += ' mayus' // espacio
        } else{
          spancito.className += ' minus'
        }    
        tecladoJS.appendChild(spancito);
      }
  };
};


btnInicio.addEventListener('click',()=>{
  btnInicio.innerHTML = 'Otra palabra'
  btnPista.classList.remove('oculto');
  tecladoPizarra.classList.remove('oculto');
  quitarMensajes();
})



// Restablecer juego
function inicio() {
  
  // ejecuta funcion generaPalabra
  generaPalabra();
  console.log(palabra,palabra.length)
  // ejecuta funcion pintarGuiones con el parametro del numero de caracteres
  // de la variable palabra
  // lo movi a generar palabra pintarGuiones(palabra.length);
  // asigna el valor cont en 6
  cont = 6;
  // imprime la variable cont en el objeto con el id intentos
  document.getElementById("intentos").innerHTML=cont;
  // habilita todos los botones al hacer clic en jugar
  document.querySelectorAll('.letra').forEach(item => {
    item.disabled=false;
  })  
}

// itera todos los elementos con la clase letras
document.querySelectorAll('.letra').forEach(item => {
  // asigna eventos click a cada elemento
  item.addEventListener('click', event => {
    // funcion que se asocia al elemento
    intento(event.target.value);
  })
})

//POR CADA LETRA PRESIONADA CLICKEE
// Le agregue esto para que no necesite clickear los botones para intentar, ahora tmb puede hacerlo con solo su teclado
//estando en cualquier parte de la página cuando presiones una tecla, se fija si se encuentra en el array alfabeto (si no, manda un aviso)(si sí es letra, busca si es igual al valor de alguno de los botoncitos (tiene que ser A, B,C... en mayus) cuando encuentre uno, Intenta)

let alfabetoMayus = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
/* let alfabetoMinus = alfabeto.join('|').toLowerCase().split('|');
console.log(alfabetoMinus) */
let alfabetoMinus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let alfabeto = alfabetoMayus.concat(alfabetoMinus);
//alfabetoMayus+alfabetoMinus;  haciendo esto dejaba de ser String
console.log({alfabeto})


//:::

teclado = document.getElementById("teclado");
pizarra = document.querySelector('#pizarra');

tecladoPizarra.addEventListener('click',()=>{
  if(tecladoPizarra.innerHTML=='Usar pizarra'){
    pizarra.classList.remove('oculto');
    pizarra.focus();
    teclado.classList.add('oculto');
    tecladoPizarra.innerHTML = 'Usar teclado'
  }else{
    teclado.classList.remove('oculto');
    pizarra.classList.add('oculto');
    tecladoPizarra.innerHTML ='Usar pizarra';
  }
})  


enviarLetra(pizarra);
enviarLetra(document);
/* function enviarLetra(fuente){
  fuente.addEventListener('keydown', e =>{
    console.log(e)
    if (alfabeto.includes(e.key)||e.key=='CapsLock'){ //keyCode: '20'
      document.querySelectorAll('.letra').forEach(item => {
        //console.log({e},{item})
        if(item.value==e.key){ //item son button#A,button#B,... Pero item.value son A,B,C,...
          intento(item.value);
          console.log({e})
        }
      });    
    }else{
      console.log(`${e.key} <${e.code}> no es una letra`); 
      e.preventDefault();
    };
  });
} */

function enviarLetra(fuente){
  fuente.addEventListener('keydown', e =>{
    //console.log(e)
    if (alfabetoMayus.includes(e.key)){ 
      document.querySelectorAll('.letra').forEach(item => {
        //console.log({e},{item})
        if(item.value==e.key){ //item son button#A,button#B,... Pero item.value son A,B,C,...
          intento(item.value);
          //console.log({e})
        }
      });    
    }else if(alfabeto.includes(e.key)||(isFinite(e.key))){
      console.log(`${e.key} <${e.code}> es letra minúscula o numero`); 
      e.preventDefault();
    };
  });
}




//Puedes usar queryselectall.for each....

let btnLetra = document.querySelectorAll('.letra')  //ya no es buttons




btnInicio.addEventListener('click', function(){
  inicio();
});

btnPista.addEventListener('click', function(){
  pista();
});

// Iniciar
window.onload = inicio();
window.onload = generarTeclado();