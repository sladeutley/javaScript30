// window.addEventListener('keydown', function(e) {
//   console.log('e',e);
// })

  function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log("audio", audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // this is to trigger the class of 'key' for css effects
  console.log("key", key);
  if (!audio) return; //if the key you press is null (isn't the ones specified), it won't run the function
  audio.currentTime = 0; //have to do this bc it rewinds to the start of each sound so you can keep pressing same button without having to wait til audio file finishes
  audio.play();
  key.classList.add("playing");
  // above is same as -- key.addClass('playing'); -- in jQuery
  // also have classList.Remove() and classList.toggle();

  // ** Below, could use a setTimeout to remove class, but not as good bc things could get out of wack if someone changes the 'transition' time in css
  const keys = document.querySelectorAll(".key"); //querySelectorAll bc need to listen for all the keys
  console.log("keys", keys);
  // Below, make function to remove transition
  function removeTransition(e) {
    console.log("e", e); // here we get a whole bunch of things that have transformed, so only need to listen for propertyName of 'transform'
    if (e.propertyName !== "transform") return; //skip if no property name of transform
    console.log("this", this);
    this.classList.remove("playing"); //this refers to key bc of event listener.
  }
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
};

window.addEventListener("keydown", playSound);
