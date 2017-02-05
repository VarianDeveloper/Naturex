'use strict';
eventsApp.controller('EditEventController', function EditEventController($scope) {

    $scope.title = 'Create new event';

    $scope.saveEvent = function (event, newEventForm) {
        console.log(newEventForm);
        if (newEventForm.$valid) {
            window.alert('Saved!');
        } else {
            window.alert('Check your data...')
        }

    };

    $scope.cancelEvent = function (event) {
        window.location = '../app/EventDetails.html';
    };


});