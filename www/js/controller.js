$scope.recognizedText = "";

$scope.record = function() {
    //var recognition = new webkitSpeechRecognition(); //To Computer
    var recognition = new SpeechRecognition(); // To Device
    recognition.lang = 'es-ES';

    recognition.onresult = function(event) {
        if (event.results.length > 0) {
            $scope.recognizedText = event.results[0][0].transcript;
            $scope.$apply();
        }
    };

    recognition.start();
};