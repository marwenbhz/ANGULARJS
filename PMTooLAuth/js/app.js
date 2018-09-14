/**
 * Created by Marwen on 08/05/2016.
 */

// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var PMTooLApp = angular.module('PMTooLApp',  ['ngRoute','ngResource', 'AdalAngular', 'PMTooLApp.controllers','PMTooLApp.services']);

// configure our routes
PMTooLApp.config (['$routeProvider','$httpProvider', 'adalAuthenticationServiceProvider', function($routeProvider, $httpProvider, adalProvider) {


        $routeProvider


            .when("/viewLogin", {
                    controller: "mainController",
                    templateUrl: "partials/login.html",
                }
            )
            .when('/viewTeamMembers/:id',{
                templateUrl:'partials/team-members.html',
                controller:'TeamMembersController',
                requireADLogin: true

            })

            //ViewTaskMembers

            .when('/viewTaskMembers/:id',{
                templateUrl:'partials/task-members.html',
                controller:'TaskMembersController',
                requireADLogin: true

            })

            //ViewTasksProject

            .when('/viewTasksProject/:id',{
                templateUrl:'partials/project-tasks.html',
                controller:'ProjectTasksController',
                requireADLogin: true

            })

            //ViewProjectsCategory

            .when('/viewProjectsCategory/:id',{
                templateUrl:'partials/category-projects.html',
                controller:'CategoryProjectsController',
                requireADLogin: true

            })

            //ViewProjectsCompany

            .when('/viewProjectsCompany/:id',{
                templateUrl:'partials/company-projects.html',
                controller:'CompanyProjectsController',
                requireADLogin: true

            })

            //ViewProjectsBank

            .when('/viewProjectsBank/:id',{
                templateUrl:'partials/banque-projects.html',
                controller:'BankProjectsController',
                requireADLogin: true

            })

            //User

            .when('/users',{
                templateUrl:'partials/users.html',
                controller:'UserListController',
                requireADLogin: true
            })
            .when('/viewUser/:id',{
                templateUrl:'partials/user-view.html',
                controller:'UserViewController',
                requireADLogin: true
            })
            .when('/attributeTask/:id',{
                templateUrl:'partials/attribute-task.html',
                controller:'UserTaskController',
                requireADLogin: true
            })

            //Team

            .when('/teams',{
                templateUrl:'partials/teams.html',
                controller:'TeamListController',
                requireADLogin: true
            })
            .when('/viewTeam/:id',{
                templateUrl:'partials/team-view.html',
                controller:'TeamViewController',
                requireADLogin: true

            })
            .when('/newTeam',{
                templateUrl:'partials/team-add.html',
                controller:'TeamCreateController',
                requireADLogin: true

            })
            .when('/editTeam/:id',{
                templateUrl:'partials/team-edit.html',
                controller:'TeamEditController',
                requireADLogin: true

            })


            //Task

            .when('/tasks',{
                templateUrl:'partials/tasks.html',
                controller:'TaskListController',
                requireADLogin: true

            })
            .when('/viewTask/:id',{
                templateUrl:'partials/task-view.html',
                controller:'TaskViewController',
                requireADLogin: true

            })
            .when('/newTask',{
                templateUrl:'partials/task-add.html',
                controller:'TaskCreateController',
                requireADLogin: true

            })
            .when('/editTask/:id',{
                templateUrl:'partials/task-edit.html',
                controller:'TaskEditController',
                requireADLogin: true

            })


            //Project

            .when('/projects',{
                templateUrl:'partials/projects.html',
                controller:'ProjectListController',
                requireADLogin: true

            })
            .when('/viewProject/:id',{
                templateUrl:'partials/project-view.html',
                controller:'ProjectViewController',
                requireADLogin: true

            })
            .when('/newProject',{
                templateUrl:'partials/project-add.html',
                controller:'ProjectCreateController',
                requireADLogin: true

            }).when('/editProject/:id',{
                templateUrl:'partials/project-edit.html',
                controller:'ProjectEditController',
                requireADLogin: true

            })

            //Company

            .when('/companies',{
                templateUrl:'partials/companies.html',
                controller:'CompanyListController',
                requireADLogin: true

            }).when('/viewCompany/:id',{
                templateUrl:'partials/company-view.html',
                controller:'CompanyViewController',
                requireADLogin: true

            })

            //Catgeory

            .when('/categories',{
                templateUrl:'partials/categories.html',
                controller:'CategoryListController',
                requireADLogin: true

            })
            .when('/viewCategory/:id',{
                templateUrl:'partials/category-view.html',
                controller:'CategoryViewController',
                requireADLogin: true


            })

            //Banque

            .when('/banques',{
                templateUrl:'partials/banques.html',
                controller:'BanqueListController',
                requireADLogin: true

            })
            .when('/viewBanque/:id',{
                templateUrl:'partials/banque-view.html',
                controller:'BanqueViewController',
                requireADLogin: true


            }).otherwise('/viewLogin');

        adalProvider.init(
            {
                instance: 'https://login.microsoftonline.com/',
                //tenant: 'espritnewmind2016.onmicrosoft.com',
                clientId: '9a59c380-025a-4419-8f5f-11c656b23dc7',
                extraQueryParameter: 'nux=1',
                //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
            },
            $httpProvider
        );
    }])
    .run();
