
/*Home Controller, you need to be logged to see this*/

angular.module('AppControllers', [])
    .controller('HomeCtrl', ['$rootScope', 'RestClient', '$scope', '$localStorage', '$window', 'config', '$mdDialog', '$location',
        function($rootScope, RestClient, $scope, $localStorage, $window, config, $mdDialog, $location) {
            $rootScope.auth(function() {
                console.log('ci sono!')

            });
        }
    ]);
