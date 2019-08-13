  var a=new Array(0);
  var b=new Array(0);
  var c;
  var d;
  var f=false;
  var pause=true;
    $(document).keypress(function(){
      if(!f){
        c=-1;
        d=0;
        nextLevel();
    f=true;}});


 $(".btn").click(function(e){
   b.push($(this).attr('id'));
   console.log(b);
   var audio= new Audio("sounds/" + $(this).attr('id') + ".mp3");
   e.target.classList.add("pressed");
   setTimeout(function(){
    e.target.classList.remove("pressed");},100);
    if(b[d]==a[d]&&b.length==a.length){
      audio.play();
      nextLevel();
    }
    else if(a[d]==b[d]){
      audio.play();
      d++;
    }
    else{
      gameOver();
    }
 });
function nextLevel(){
  b=[];
  d=0;
    var r=Math.floor(Math.random()*4)+1;
  $("#level-title").text("Level " + (c+2));
  switch(r){
    case 1:
      a.push("green");
      break;
      case 2:
      a.push("red");
      break;
      case 3:
      a.push("yellow");
      break;
      case 4:
      a.push("blue");
      break;
}
c++;
var audio= new Audio("sounds/" + a[c] + ".mp3");

setTimeout(function(){
  $('#' + a[c]).animate({opacity:0},100);
  audio.play();
  $('#' + a[c]).animate({opacity:100},100);
},1000);
}
function gameOver(){
  var audio= new Audio("sounds/wrong.mp3");
  audio.play();

  $("#level-title").text("Game Over, Press Any Key to Restart");
  f=false;
  $("body")[0].classList.add("game-over");
  setTimeout(function(){
    $("body")[0].classList.remove("game-over");
  },200);
  a=[];
  b=[];
}
