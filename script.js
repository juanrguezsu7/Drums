var all_drums = document.querySelectorAll(".drum");
for (var i = 0; i < all_drums.length; ++i) {
  all_drums[i].addEventListener("click", function() {
    makeSound(this.innerText);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
});

function makeSound(type) {
  makeAnimation(type);
  var audio;
  switch (type) {
    case 'q':
      audio = new Audio("./assets/sounds/crash.mp3");
      break;
    case 'w':
      audio = new Audio("./assets/sounds/kick-bass.mp3");
      break;
    case 'e':
      audio = new Audio("./assets/sounds/snare.mp3");
      break;
    case 'r':
      audio = new Audio("./assets/sounds/tom-1.mp3");
      break;
    case 't':
      audio = new Audio("./assets/sounds/tom-2.mp3");
      break;
    case 'y':
      audio = new Audio("./assets/sounds/tom-3.mp3");
      break;
    case 'u':
      audio = new Audio("./assets/sounds/tom-4.mp3");
      break;
    default:
  }
  audio.volume = 0.2;
  audio.play();
}

function makeAnimation(type) {
  var drum = document.querySelector("." + type);
  drum.classList.add("pressed");
  setTimeout(function() {
    drum.classList.remove("pressed");
  }, 50);
}