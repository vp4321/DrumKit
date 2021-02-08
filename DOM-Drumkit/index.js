
var n = document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{

  document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event)
{
  makeSound(event.key);
  btnanimation(event.key);
}
);
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {
    makeSound(this.innerHTML);
      btnanimation(this.innerHTML);
  }
  );



}

function makeSound(key)
{

  switch (key)
  {
    case "w":
      var cr = new Audio("sounds/tom-2.mp3");
      cr.play();
      break;

    case "a":
      var kb = new Audio('sounds/kick-bass.mp3');
      kb.play();
      break;


    case "s":
      var sn = new Audio('sounds/snare.mp3');
      sn.play();
      break;


    case "d":
      var t1 = new Audio('sounds/tom-1.mp3');
      t1.play();
      break;


    case "j":
      var t2 = new Audio('sounds/crash.mp3');
      t2.play();
      break;


    case "k":
      var t3 = new Audio('sounds/tom-3.mp3');
      t3.play();
      break;


    case "l":
      var t4 = new Audio('sounds/tom-4.mp3');
      t4.play();
      break;

      default:  console.log();

    }

}

function btnanimation(key)
{

  var activebtn =document.querySelector("."+key);
  activebtn.classList.add("pressed");

  setTimeout(function(){
    activebtn.classList.remove("pressed")
  },100);
}
