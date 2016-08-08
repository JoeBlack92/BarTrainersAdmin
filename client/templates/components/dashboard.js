
Template.dashboard.onCreated(function() {

});

Template.dashboard.onRendered(function() {

});


Template.dashboard.events({

    'click #alumnos': function () {

        Router.go('listaAlumnos');

    },
    'click #profesores': function () {

        Router.go('listaAlumnos');

    },
    'click #reservas': function () {

        Router.go('listaAlumnos');

    }

});

Template.dashboard.helpers({

});







