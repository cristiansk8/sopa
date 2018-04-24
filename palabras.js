


var words = ['mar', 'rio'];
var words1 = ['mara', 'rios'];
var words2 = ['marra', 'rosas', 'js'];
var words3 = ['marra', 'rosas', 'js', 'pizzas'];
var words4 = ['marra', 'rosas', 'js', 'pizzas', 'comidas'];
var words5 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta'];
var words6 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta', 'bicicleta'];
var words7 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta', 'bicicleta', 'economista'];
var words8 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta', 'bicicleta', 'economista', 'acartonarse'];
var words9 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta', 'bicicleta', 'economista', 'acartonarse', 'aguardentosa'];
var words10 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta', 'bicicleta', 'economista', 'acartonarse', 'aguardentosa', 'mercantilismo'];
var words11 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta', 'bicicleta', 'economista', 'acartonarse', 'aguardentosa', 'mercantilismo', 'abundantemente'];
var words12 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta', 'bicicleta', 'economista', 'acartonarse', 'aguardentosa', 'mercantilismo', 'abundantemente', 'electrodinàmica'];
var words13 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta', 'bicicleta', 'economista', 'acartonarse', 'aguardentosa', 'mercantilismo', 'abundantemente', 'electrodinàmica'];
var words14 = ['marra', 'rosas', 'js', 'pizzas', 'comidas', 'patineta', 'bicicleta', 'economista', 'acartonarse', 'aguardentosa', 'mercantilismo', 'abundantemente', 'electrodinàmica', 'desproporcionado'];

var t = new Array(15)
t[0] = words;
t[1] = words1;
t[2] = words2;
t[3] = words3;
t[4] = words4;
t[5] = words5;
t[6] = words6;
t[7] = words7;
t[8] = words8;
t[9] = words9;
t[10] = words10;
t[11] = words11;
t[12] = words12;
t[13] = words13;
t[14] = words14;



// start a word find game

// create just a puzzle, without filling in the blanks and print to console
let sub =100;
module.exports = {
  nuevaSopa : sub,
  suma :function(){
console.log("hola putos")
  }
}/*

$('#jugar').click(function() {
  $('#datosIniciales').toggle();
  $('#sopa').show();
  var d = new Date();
                 var fe=(d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();
                 var name=document.getElementById("nombreJugador").value;
                 var n = 0;
                 var l = document.getElementById("number");
                 document.getElementById("fecha").innerHTML=fe;
                 document.getElementById("f").value = fe;
                 document.getElementById("nombre").innerHTML="Bienvenido "+name;
                 document.getElementById("n").value = name;



                 window.setInterval(function () {
                     l.innerHTML = "Tiempo"+ n;
                     n++;
                     document.getElementById("t").value = n;

                 }, 1000);

  var dime = document.getElementById("dimension").value;
  var gamePuzzle = wordfindgame.create(t[dime], '#puzzle', '#words');
  $('#solve').click(function() {
    wordfindgame.solve(gamePuzzle, t[dime]);
  });
  var puzzle = wordfind.newPuzzle(
    t[dime], {
      height: 18,
      width: 18,
      fillBlanks: false
    }
  );
  wordfind.print(puzzle);
});
$('#save').click(function() {



});
