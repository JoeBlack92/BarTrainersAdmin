/**
 * Created by puesto1 on 5/8/16.
 */

Template.listaReservas.onRendered(function () {
    $('ul.tabs').tabs();
});

Template.listaReservas.onCreated(function () {

    var instance = this;

});



Template.listaReservas.events({

});


Template.listaReservas.helpers({

    reservas: function () {
        return Reservas.find();
    }

});