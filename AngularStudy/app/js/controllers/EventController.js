'use strict';
eventsApp.controller('EventController', function EventController($scope, eventData) {

    $scope.snippet = '<span style="color:red">Hi there</span>';
    $scope.isShow = false;

    $scope.title = 'Event list';
    $scope.event = eventData.event;
    

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    }

    $scope.downVoteSession = function (session) {
        if (session.upVoteCount > 0) {
            session.upVoteCount--;
        } else {
            alert("You cannot go lower than zero");
        }

    }
});