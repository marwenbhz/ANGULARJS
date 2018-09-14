/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('PMTooLApp.services',["ngResource",'AdalAngular'])

    .factory('TeamMembers',function($resource, $routeParams, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Team/GetMembers/:id?tenant_id='+idteanant, { id: '@TeamID' }, {

        });

    })

    .factory('TaskMembers',function($resource, $routeParams, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Task/GetMembers/:id?tenant_id='+idteanant, { id: '@TaskID' }, {

        });

    })

    .factory('ProjectTasks',function($resource, $routeParams, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Project/GetTasks/:id?tenant_id='+idteanant, { id: '@ProjectID' }, {

        });

    })

    .factory('CategoryProjects',function($resource, $routeParams ,adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Category/GetProjects/:id?tenant_id='+idteanant, { id: '@CategoryID' }, {

        });

    })

    .factory('CompanyProjects',function($resource, $routeParams,adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Company/GetProjects/:id?tenant_id='+idteanant, { id: '@CompanyID' }, {

        });

    })

    .factory('Projects',function($resource, $routeParams, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Banque/GetProjects/:id?tenant_id='+idteanant, { id: '@ID' }, {

        });

    })

    .factory('Banque',function($resource, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Banque/:id?tenant_id='+idteanant, { id: '@ID' }, {
            update: {
                method: 'PUT'
            }
        });

    })

    .factory('Company',function($resource, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Company/:id?tenant_id='+idteanant, { id: '@CompanyID' }, {
            update: {
                method: 'PUT'
            }
        });

    })

    .factory('User',function($resource, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/User/:id?tenant_id='+idteanant, { id: '@UserID' }, {
            update: {
                method: 'PUT'
            }
        });

    })

    .factory('Team',function($resource, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Team/:id?tenant_id='+idteanant, { id: '@TeamID' }, {
            update: {
                method: 'PUT'
            }
        });

    })

    .factory('Task',function($resource, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Task/:id?tenant_id='+idteanant, { id: '@TaskID' }, {
            update: {
                method: 'PUT'
            }
        });

    })

    .factory('Project',function($resource, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Project/:id?tenant_id='+idteanant, { id: '@ProjectID' }, {
            update: {
                method: 'PUT'
            }
        });

    })

    .factory('Category',function($resource, adalAuthenticationService){

        var idteanant = adalAuthenticationService.userInfo.profile.tid ;
        return $resource('http://134.168.51.184:8080/PMTool_M/Category/:id?tenant_id='+idteanant, { id: '@CategoryID' }, {
            update: {
                method: 'PUT'
            }
        });

    })

    .service('popupService',function($window){
        this.showPopup=function(message){
            return $window.confirm(message);
        }
    });