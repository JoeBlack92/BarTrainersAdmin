/**
 * Created by puesto1 on 3/8/16.
 */



Template.header.events({

    'click #salir': function () {
        Meteor.logout(function () {
            Router.go('login');
        });
    }

});

Template.header.helpers({

    numeroNotis: function () {
        console.log("num Notis");

        var Notifi= Notificaciones.find({$and:[{idAlumno: Meteor.userId()},{vista: false}]});
        var numeroNotificaciones = Notifi.count();

        console.log("num Notis" + numeroNotificaciones);
        return numeroNotificaciones;


    },

    isVisible: function () {
        console.log("isVisibel");

        var Notifi= Notificaciones.find({$and:[{idAlumno: Meteor.userId()},{vista: false}]});
        var numero = Notifi.count();
        console.log("num Notis" + numero);
        var isVisible = false;
        console.log(numero);
        if (numero > 0) {
            isVisible = true;
        }
        return isVisible;
    }


})