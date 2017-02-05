eventsApp.factory('getDefaultNameService', function () {
    return {
        profileDefaultName: function () {
            return { name: 'Your Profile name', pwd: 'default' };
        }
    };
});