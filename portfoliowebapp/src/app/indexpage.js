var app = angular.module("app", []);

app.controller("videoplayer", function($scope){
  $scope.send = function(){
    var video = document.getElementById('video');
    video.play();
  }
})
