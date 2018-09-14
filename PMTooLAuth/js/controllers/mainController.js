/**
 * Created by Marwen on 01/05/2016.
 */

// create the controller and inject Angular's $scope
angular.module('PMTooLApp.controllers',  [])
    .controller('mainController', ['$scope', 'adalAuthenticationService','$location', function($scope, adalService, $location) {
    // create a message to display in our view
        $scope.login = function () {
            adalService.login();
        };

    //$scope.Idteanant = $scope.userInfo.profile.tid ;
//console.log(Idteanant);
        $scope.logout = function () {
            adalService.logOut();
        };
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }])
    .controller('TeamMembersController',function($scope, $location, popupService, $routeParams, $window, TeamMembers){

        $scope.teammembers=TeamMembers.query({id:$routeParams.id});
        $scope.teammembers=TeamMembers.query({id:$routeParams.id});
        $scope.teammembers=TeamMembers.query({id:$routeParams.id});
        $scope.teammembers=TeamMembers.query({id:$routeParams.id});
        $scope.teammembers=TeamMembers.query({id:$routeParams.id});

    })

    //TaskMembers

    .controller('TaskMembersController',function($scope, $location, popupService, $routeParams, $window, TaskMembers){

        $scope.taskmembers=TaskMembers.query({id:$routeParams.id});})

    //CategoryProjects

    .controller('ProjectTasksController',function($scope, $location, popupService, $routeParams, $window, ProjectTasks){

        $scope.projecttasks=ProjectTasks.query({id:$routeParams.id});})

    //CategoryProjects

    .controller('CategoryProjectsController',function($scope, $location, popupService, $routeParams, $window, CategoryProjects){

        $scope.categoryprojects=CategoryProjects.query({id:$routeParams.id});})

    //BankProjects

    .controller('CompanyProjectsController',function($scope, $location, popupService, $routeParams, $window, CompanyProjects){

        $scope.companyprojects=CompanyProjects.query({id:$routeParams.id});})

    //BankProjects

    .controller('BankProjectsController',function($scope, $location, popupService, $routeParams, $window, Projects){

        $scope.bankprojects=Projects.query({id:$routeParams.id});

//User + User Attribute Task (Update)

    }).controller('UserListController',function($scope, $location, popupService, $window, User){

    $scope.users=User.query();


}).controller('UserViewController',function($scope, $routeParams, User){

    $scope.user=User.get({id:$routeParams.id});

}).controller('UserTaskController',function($scope, $location, $routeParams, User){

    $scope.updateUser=function(){
        $scope.user.$update(function(){
            $location.path('users');
        });
    };
    $scope.loadUser=function(){
        $scope.user=User.get({id:$routeParams.id});
    };

    $scope.loadUser();

//Team

}).controller('TeamListController',function($scope, $location, popupService, $window, Team){

    $scope.teams=Team.query();

    $scope.deleteTeam=function(team){
        if(popupService.showPopup('Really delete this?')){
            team.$delete(function(){
            });
        }
    }

}).controller('TeamViewController',function($scope, $routeParams, Team){

    $scope.team=Team.get({id:$routeParams.id});

}).controller('TeamCreateController',function($scope, $location, $routeParams, Team){

    $scope.team=new Team();

    $scope.addTeam=function(){
        $scope.team.$save(function(){
            $location.path('teams');
        });
    }

}).controller('TeamEditController',function($scope, $location, $routeParams, Team){

    $scope.updateTeam=function(){
        $scope.team.$update(function(){
            $location.path('teams');
        });
    };

    $scope.loadTeam=function(){
        $scope.team=Team.get({id:$routeParams.id});
    };

    $scope.loadTeam();

//Task

}).controller('TaskListController',function($scope, $location, popupService, $window, Task){

    $scope.tasks=Task.query();

    $scope.deleteTask=function(task){
        if(popupService.showPopup('Really delete this?')){
            task.$delete(function(){

            });
        }
    }

}).controller('TaskViewController',function($scope, $routeParams, Task){

    $scope.task=Task.get({id:$routeParams.id});

}).controller('TaskCreateController',function($scope, $location, $routeParams, Task){

    $scope.task=new Task();

    $scope.addTask=function(){
        $scope.task.$save(function(){
            $location.path('tasks');
        });
    }

}).controller('TaskEditController',function($scope, $location, $routeParams, Task){

    $scope.updateTask=function(){
        $scope.task.$update(function(){
            $location.path('tasks');
        });
    };

    $scope.loadTask=function(){
        $scope.task=Task.get({id:$routeParams.id});
    };

    $scope.loadTask();


//Project

}).controller('ProjectListController',function($scope, $location, popupService, $window, Project){

    $scope.projects=Project.query();
    $scope.projects=Project.query();
    $scope.projects=Project.query();


    $scope.deleteProject=function(project){
        if(popupService.showPopup('Really delete this?')){
            project.$delete(function(){

            });

        }
    }

}).controller('ProjectViewController',function($scope, $routeParams, Project){

    $scope.project=Project.get({id:$routeParams.id});

}).controller('ProjectCreateController',function($scope, $location, $routeParams, Project){

    $scope.project=new Project();

    $scope.addProject=function(){
        $scope.project.$save(function(){
            $location.path('projects');
        });
    }

}).controller('ProjectEditController',function($scope, $location, $routeParams, Project){

    $scope.updateProject=function(){
        $scope.project.$update(function(){
            $location.path('projects');
        });
    };

    $scope.loadProject=function(){
        $scope.project=Project.get({id:$routeParams.id});
    };

    $scope.loadProject();



//Company

}).controller('CompanyListController',function($scope, $location, popupService, $window, Company){

    $scope.companies=Company.query();


}).controller('CompanyViewController',function($scope, $routeParams, Company){

    $scope.company=Company.get({id:$routeParams.id});


//Catgeory

}).controller('CategoryListController',function($scope, $location, popupService, $window, Category){

    $scope.categories=Category.query();


}).controller('CategoryViewController',function($scope, $routeParams, Category){

    $scope.category=Category.get({id:$routeParams.id});


//Banque


}).controller('BanqueListController',function($scope, $location, popupService, $window, Banque){

    $scope.banques=Banque.query();


}).controller('BanqueViewController',function($scope, $routeParams, Banque){

    $scope.banque=Banque.get({id:$routeParams.id});

});