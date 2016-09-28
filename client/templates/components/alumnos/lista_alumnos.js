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

    var instance = this;

    instance.buscar = new ReactiveVar(false);

});



Template.listaAlumnos.events({

    'keyup #buscar': function (e,t) {
        t.buscar.set($('#buscar').val());
        console.log(t.buscar.get());
    }

});


Template.listaAlumnos.helpers({

    alumnos: function () {


        if(!Template.instance().buscar.get()){

            return Meteor.users.find({'roles.0': 'alumno'},{sort: {createdAt: -1}});

        }else{

            var bus = new RegExp("^"+Template.instance().buscar.get());



           return Meteor.users.find({'roles.0': 'alumno', 'profile.nombre': bus},{sort: {createdAt: -1}});


        }


    }

});