// window.addEventListener('keydown', function(e) {
//   console.log('e',e);
// })
window.addEventListener("keydown", e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log("audio", audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // this is to trigger the class of 'key' for css effects
  console.log('key',key);
  if (!audio) return; //if the key you press is null (isn't the ones specified), it won't run the function
  audio.currentTime = 0; //have to do this bc it rewinds to the start of each sound so you can keep pressing same button without having to wait til audio file finishes
  audio.play();
  key.classList.add('playing');
  // above is same as -- key.addClass('playing'); -- in jQuery
  // also have classList.Remove() and classList.toggle();
});
