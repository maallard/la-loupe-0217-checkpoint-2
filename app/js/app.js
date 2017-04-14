angular.module('app', ['ui.router', 'ui.bootstrap', 'hc.marked']).config(['markedProvider', function (markedProvider) {
  markedProvider.setOptions({gfm: true});
}]);
