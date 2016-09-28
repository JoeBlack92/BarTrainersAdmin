/**
 * Created by puesto1 on 3/8/16.
 */


Template.listaProfesores.onCreated(function () {

    var instance = this;

    instance.buscar = new ReactiveVar(false);


});
Template.listaProfesores.onRendered(function() {
    setTimeout(animateEnter(),1000);
});

Template.listaProfesores.onDestroyed(function() {
    animateLeave()
});


Template.listaProfesores.events({

    'keyup #buscar': function (e,t) {
        t.buscar.set($('#buscar').val());
        console.log(t.buscar.get());
    }

});


Template.listaProfesores.helpers({

    profesores: function () {


        if(!Template.instance().buscar.get()){

            return Meteor.users.find({'roles.0': 'profesor'},{sort: {'profile.nombre': 1}});

        }else{

            var bus = new RegExp("^"+Template.instance().buscar.get());



            return Meteor.users.find({'roles.0': 'profesor', 'profile.nombre': bus },{sort: {'profile.nombre': 1}})


        }
    }

});