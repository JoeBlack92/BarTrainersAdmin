
Template.dashboard.onCreated(function() {

});

Template.dashboard.onRendered(function() {

});


Template.dashboard.events({

    'click #notif': function () {

        cordova.plugins.notification.local.schedule({
            title: "Hola",
            message: "Funciona!"
        });
    },

    'click #alumnos': function () {

        Router.go('listaAlumnos');

    },
    'click #profesores': function () {

        Router.go('listaProfesores');

    },
    'click #reservas': function () {

        Router.go('listaReservas');

    },
    'click #empresas': function () {

        Router.go('listaEmpresas');

    }
});

Template.dashboard.helpers({
    colorTrabajo :function () {
        var user = Meteor.user();
        
        if(user.profile.btrabajo){
            return 'green'
        }else{
            return 'red'
        }
    },
    colorExtra : function () {
        var user = Meteor.user();

        if(user.profile.extras){
            return 'green'
        }else{
            return 'red'
        }
    }
});







