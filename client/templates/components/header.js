/**
 * Created by puesto1 on 3/8/16.
 */


Template.header.helpers({
    title: function () {
        if(Router.current().route.getName() == 'nuevoAlumno'){
            return 'Nuevo Alumno';
        }else if(Router.current().route.getName() == 'inicio'){
            return 'Inicio';
        }else if(Router.current().route.getName() == 'listaAlumnos'){
            return 'Lista Alumnos';
        }else if(Router.current().route.getName() == 'fichaAlumno'){
            var user = Meteor.users.findOne({_id: Router.current().params._id});
            if(user){
                return 'Ficha ' + user.username;
            }
        }

    }
});

Template.header.events({

    'click #salir': function () {
        Meteor.logout(function () {
            Router.go('login');
        });
    }

});