(function (window) {
  const SpeakGoodBye = {};
  const speakWord = "Good Bye";
  SpeakGoodBye.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  window.SpeakGoodBye = SpeakGoodBye;
})(window);
