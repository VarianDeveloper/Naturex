'use strict';
eventsApp.controller('EventController', function EventController($scope) {

    $scope.snippet = '<span style="color:red">Hi there</span>';
    $scope.isShow = false;

    $scope.title = 'Event list';
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2017',
        time: '12:40:00 pm',
        location: {
            address: '695 Centennal Street',
            city: 'Winnipeg',
            postal: 'R3N 1R3'
        },
        imageUrl: './img/angularjs-logo.png',
        sessions: [
            {
                name: 'Session 1',
                upVoteCount: 1
            },
            {
                name: 'Session 2',
                upVoteCount: 5
            },
            {
                name: 'Session 3',
                upVoteCount: 21
            }
        ]
    }

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