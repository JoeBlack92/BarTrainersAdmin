/**
 * Created by puesto1 on 8/8/16.
 */


DashboardController = RouteController.extend({

    waitOn: function(){

        var currentUser = Meteor.user();


        if(currentUser){

            if(currentUser.roles[0] == 'admin'){
                return Meteor.subscribe('dashboardAdmin');
            }else if(currentUser.roles[0] == 'alumno'){
                return Meteor.subscribe('progresoAlumno');
            }

        }

    },

    data: function() {

        if(this.ready()){

            var currentUser = Meteor.user();


            if(currentUser){

                if(currentUser.roles[0] == 'admin'){

                    var numeroAlumnos = Meteor.users.find({'roles.0': 'alumno'}).count();

                    var numeroProfesores = Meteor.users.find({'roles.0': 'profesor'}).count();


                    return {
                        numeroAlumnos: numeroAlumnos,
                        numeroProfesores: numeroProfesores
                    }

                }else if(currentUser.roles[0] == 'alumno'){

                }

            }

            
        }

    }

});