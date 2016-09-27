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
                return (
                    Meteor.subscribe('dashboardAlumno', Meteor.userId()),
                        Meteor.subscribe('progresoAlumno'));

            }

        }

    },

    data: function() {

        if(this.ready()){

            var currentUser = Meteor.user();
            var numeroAlumnos;
            var numeroProfesores;
            var numeroReservas;
            var numeroEmpresas;

            if(currentUser){

                if(currentUser.roles[0] == 'admin'){

                    var Alumnos = Meteor.users.find({'roles.0': 'alumno'});
                    numeroAlumnos = Alumnos.count();
                    // if(Alumnos. != -1 && numeroAlumnos == 0){
                    //     numeroAlumnos = 1;
                    // }



                    numeroProfesores = Meteor.users.find({'roles.0': 'profesor'}).count();
                    console.log(numeroProfesores);
                    // if(Profesores.indexOf() != -1 && numeroProfesores == 0){
                    //     numeroProfesores = 1;
                    // }

                    numeroReservas = Reservas.find().count();
                    // if(Reservas.indexOf() != -1 && numeroReservas == 0){
                    //     numeroReservas = 1;
                    // }

                    numeroEmpresas = Meteor.users.find({'roles.0': 'empresa'}).count();
                    console.log("Emp:" + numeroEmpresas);

                    return {
                        numeroEmpresas : numeroEmpresas,
                        numeroAlumnos: numeroAlumnos,
                        numeroProfesores: numeroProfesores,
                        numeroReservas: numeroReservas
                    }

                }else if(currentUser.roles[0] == 'alumno'){

                    numeroReservas = Reservas.find({id_user: Meteor.userId()}).count();
                    console.log(numeroReservas);
                    return {

                        numeroReservas: numeroReservas
                    }
                }

            }


        }

    }

});