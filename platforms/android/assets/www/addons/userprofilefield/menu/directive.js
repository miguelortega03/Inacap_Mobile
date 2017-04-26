// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.userprofilefield_menu')

/**
 * Directive to render a menu user profile field.
 *
 * @module mm.addons.userprofilefield_menu
 * @ngdoc directive
 * @name mmaUserProfileFieldMenu
 */
.directive('mmaUserProfileFieldMenu', function($log) {
    $log = $log.getInstance('mmaUserProfileFieldMenu');

    return {
        restrict: 'A',
        priority: 100,
        templateUrl: 'addons/userprofilefield/menu/template.html',
        link: function(scope, element) {
            var field = scope.field;

            if (field && scope.edit && scope.model) {
                field.modelName = 'profile_field_' + field.shortname;

                // Parse options.
                if (field.param1) {
                    field.options = field.param1.split(/\r\n|\r|\n/g);
                } else {
                    field.options = [];
                }

                // Initialize the value using default data.
                if (typeof field.defaultdata != 'undefined' && typeof scope.model[field.modelName] == 'undefined') {
                    scope.model[field.modelName] = field.defaultdata;
                }
            }
        }
    };
});
