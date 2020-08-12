var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Play a specified sound for each button
function specificSound(drumButton) {
  var song, audio;
  switch (drumButton) {
    case "w":
      audio = new Audio((song = `./sounds/tom-1.mp3`));
      audio.play();
      break;
    case "a":
      audio = new Audio((song = `./sounds/tom-2.mp3`));
      audio.play();
      break;
    case "s":
      audio = new Audio((song = `./sounds/tom-3.mp3`));
      audio.play();
      break;
    case "d":
      audio = new Audio((song = `./sounds/tom-4.mp3`));
      audio.play();
      break;
    case "j":
      audio = new Audio((song = `./sounds/snare.mp3`));
      audio.play();
      break;
    case "k":
      audio = new Audio((song = `./sounds/crash.mp3`));
      audio.play();
      break;
    case "l":
      audio = new Audio((song = `./sounds/kick-bass.mp3`));
      audio.play();
      break;
    default:
      console.log("No Matches were made");
      break;
  }
}

// Animate button upon click or key press
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 150);
}

// Play a specific sound when button is pressed
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    specificSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Play a specific sound when corresponding key is pressed
document.addEventListener("keypress", function (event) {
  specificSound(event.key);
  buttonAnimation(event.key);
});
