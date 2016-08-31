/**
 * Created by puesto1 on 5/8/16.
 */
Template.listaReservas.onDestroyed(function () {
    animateLeave();
});
Template.listaReservas.onRendered(function () {
    $('ul.tabs').tabs();

    console.log(puede);

    setTimeout(animateEnter(), 1000);

});

Template.listaReservas.onCreated(function () {

    var instance = this;


});



Template.listaReservas.events({

});


Template.listaReservas.helpers({

    reservas: function () {
        return Reservas.find();
    },
    
    misResevas: function () {
        return Reservas.find({id_user: Meteor.userId()});
    }

});