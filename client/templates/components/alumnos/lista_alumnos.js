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

        return Meteor.users.find({'roles.0': 'alumno'},{sort: {createdAt: -1}});
        // if(!Template.instance().buscar.get()){
        //
        //
        // }else{
        //
        //     var bus = new RegExp(Template.instance().buscar.get());
        //
        //
        //     console.log( Meteor.users.findOne({'roles.0': 'alumno', 'profile.nombre': {'$regex' : '/^bus', '$options' :'i'}},{sort: {createdAt: -1}}));
        // }


    }

});