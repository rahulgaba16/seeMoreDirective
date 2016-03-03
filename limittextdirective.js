'use strict';

/**
 * @ngdoc directive
 * @name directive:limitTextDirective
 * @description
 * # limitTextDirective
 */
angular.module('ttsaApp')
  .directive('limitTextDirective', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        limitChar: '=',
        textToLimit: '='
      },
      template: '<div class="limited-text-container" ng-transclude>{{limitedText}}\
                <span ng-if="showSeeMore" class="see-more pointer">See More</span>\
                <div class="hover-text">{{textToLimit}}</div>',
      link: function postLink(scope, element, attrs) {
        scope.showHover = false;
        scope.showSeeMore = scope.textToLimit.length >= scope.limitChar;
        scope.limitedText = scope.showSeeMore ? scope.textToLimit.slice(0, scope.limitChar) : scope.textToLimit;
      }
    };
  });
