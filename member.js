funtion skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/skills-member.html'
        Controller:'skillsMemberController'
        ControllerAs:'skillsMemberCtrl'
        bindToController: true
        scope: {
            member: '='
        }
    }