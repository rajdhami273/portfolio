const synth = window.speechSynthesis;
function speak() {
  const voices = synth?.getVoices();
  if (!voices.length || !voices) {
    return;
  }
  let voice;
  for (const voiceT of voices) {
    if (voiceT.lang === "en-IN") {
      voice = voiceT;
    }
  }
  const content = new SpeechSynthesisUtterance("Hi, I am Rajendra Dhami.");
  content.voice = voice;
  synth.speak(content);
}
