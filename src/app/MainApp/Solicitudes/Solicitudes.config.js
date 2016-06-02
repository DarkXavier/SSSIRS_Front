/**
 * Created by Francisco Cerda on 10/17/15.
 */
(function() {
    'use strict';

    angular
        .module('app.mainApp.Solicitudes')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/mainApp/Solicitudes');

        $stateProvider
            .state('triangular.Solicitudes', {
                url: '/solicitudes',
                templateUrl: 'app/mainApp/Solicitudes/index.tmpl.html',
                controller: 'indexSolicitudesController',
                controllerAs: 'vm'
            });

        // add menu to triangular
        triMenuProvider.addMenu({
            name: 'MENU.SOLICITUDES.SOLICITUDES',
            type: 'dropdown',
            icon: 'zmdi zmdi-money-box',
            priority: 2.1,
            children:[
                {
                    name: 'Solicitudes',
                    state: 'triangular.solicitudes',
                    type: 'link'

                }

            ]
        });




    }
})();