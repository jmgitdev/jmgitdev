if ("webkitSpeechRecognition" in window) {

  console.log("Speech Recognition available")
  let speech_recognizer = new webkitSpeechRecognition();
  
  speech_recognizer.continuous = false;
  
  speech_recognizer.interimResults = true;
  
  speech_recognizer.lang = "es-ES"
  
  speech_recognizer.onstart = () => 
  {
    console.log("Escuchando...");
  };
  
  speech_recognizer.onend = () => 
  {
    console.log("Finalizado.");
  };
  
  
  speech_recognizer.onresult = (event) => 
  {
    // Create the interim transcript string locally because we don't want it to persist like final transcript
    let interim_transcript = "";

    // Loop through the results from the speech recognition object.
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    
    console.log(final_transcript);
  };
  
  speech_recognizer.start();
} else {
  console.log("Speech Recognition Not Available")
}
