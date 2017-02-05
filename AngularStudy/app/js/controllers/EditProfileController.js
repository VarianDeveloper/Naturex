'use strict';

eventsApp.controller('EditProfileController', function EditProfileController($scope, getDefaultNameService) {

    $scope.title = 'Create new profile';

    $scope.user = getDefaultNameService.profileDefaultName();

    $scope.saveProfile = function (user, newProfileForm) {
        console.log(newProfileForm);
        if (newProfileForm.$valid) {
            window.alert('Saved!');
        } else {
            window.alert('Check your data...')
        }

    };

    $scope.cancelProfile = function (user) {
        window.location = 'EventDetails.html';
    };


});