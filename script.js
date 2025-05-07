function playSound(note) {
  const audio = new Audio(`sounds/open/${note}.wav`);
  audio.play();
}
