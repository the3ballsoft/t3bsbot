var statements = [
  'Esa gente que se toma selfies en las busetas que o que... Por esa corronchera es que Trump los saca de EEUU',
  'Ya lo dice le viejo refrán... quieren que las traten como las princesas de Disney, pero beben como los piratas del caribe.',
  'Si usted se queja por que no puede matener a sus hijos... No debió reproducirse como conejo ;)',
  'Fin del experimento...',
  'Estoy harto de ver el corto del niño y su perro en cinemark...',
  'Don\'t believe in hollow words',
  'Para que seguir insistiendo en pedirle peras a un olmo. Tendré que segir buscando un nuevo arbol',
  'Deberíamos empezar a cojer gente y quemarla en hogueras por brujería, por que como hace 500 lo hacíamos... Por aquello de la tradición',
  'Me voy a comprar el iPhone 7... Cuando salga el iPhone 15',
  'Digan lo que quieran, pero estoy de acuerdo con las políticas de Donal Trump. Un pais es para sus ciudadanos.',
  'Si usted esta harto de ver venezolanos trabajando en Santa Marta y no le gustan las políticas de Donald Trump para los inmigrantes , felicidades es usted un mamerto...',
  'Ya puedo tachar otra casa de mi lista',
  'Y eso te pasa cuando le colocas una cinta blanca a la luz roja que titila en tu cerebro y qu te indica que algo va mal',
  'Lo quiero',
  'Jajajaj',
  'Pruebalo la musica es un remedio para el alma',
  'Gente vendiendo un s3 mini, eso ya sale gratis en lo paquetes de zucaritas',
  'La libra de lomo fino a $16000, santos lo que quiere es volvernos vegetarianos, se preocupa por nuestra salud quien lo iba a pensar',
  'Definitivamente soy un faker...  *contexto de fate',
  'Y mi festivo, donde esta mi festivo?  😶',
  'Por fin termine de llamar a todo el mundo. Debería mandarse un mensaje por radio y que todos sintonicen para ahorrar tiempo.',
  'Que sueño tan h... Me va a matar algún dia',
  'Nunca me gustó de la guerra de las galaxias que el imperio logrará hacerse con el poder con montón de soldados idiotas que parecen no tener la menor idea de combate y armas que parecen de lego.',
  'Se cayo un avión en Pakistán con 47 personas. A ver, los veo, empiecen a marchar por las calles, prender velas, hacer homenajes y llenar estadios... A nooo, verdad que los del otro lado del mundo son "otros de muy lejos". Partida de hipocritas',
  '#NowPlaying Estoy Contigo de La Oreja de Van Gogh',
  'Es tan raro ser feliz solo por hacer a otros felices?',
  'Increíble que existan hombres que no valoren a la mujer que esta a su lado.'
]

function proccessLoop(msg, arr){
  for(var i = 0; i < arr.length; i++){
    var res = arr[i](msg);
    if(!res.next){
      return res
    }
    msg = res.msg;
  }
}

//on messages offensive
function lenguegeParser(msg){
  var words  = ['monda', 'marica', 'gay', 'chupa']
  for(var i = 0; i < words.length; i++){
    console.log(words[i], msg)
    if(msg.indexOf(words[i]) !== -1){
      return  'Que grocero'
    }
  }
  return nextLoop(msg)
}

//random sentense 
function randomStatements(){
  var ind = _getRandomInt(0, statements.length-1)
  return statements[ind]
}

function nextLoop(msg){
  return {next: true, msg: msg}
}

function _getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//main function
function GENERICFN(msg) {

  return proccessLoop(msg, [
    lenguegeParser,
    randomStatements
  ])
}

//var s = GENERICFN('marica e mierda ')
//console.log(s);


module.exports = { generic: GENERICFN }
