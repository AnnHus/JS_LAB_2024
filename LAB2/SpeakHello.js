(function (window) {  
  const SpeakHello = {};
  const speakWord = "Hello";
  SpeakHello.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  window.SpeakHello = SpeakHello;
})(window);
