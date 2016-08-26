/**
 * Created by puesto1 on 3/8/16.
 */

Template.listaAlumnos.onDestroyed(function () {

    animateLeave();

});
Template.listaAlumnos.onRendered(function () {

    setTimeout(animateEnter(), 1000);

});
Template.listaAlumnos.onCreated(function () {


});



Template.listaAlumnos.events({

});


Template.listaAlumnos.helpers({

    alumnos: function () {
        return Meteor.users.find({'roles.0': 'alumno'},{sort: {createdAt: -1}});
    }

});