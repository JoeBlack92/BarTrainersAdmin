/**
 * Created by iw-poblenou2 on 10/8/16.
 */
/*Reservas.remove({id_user:'K6NHEgztwwJFLrB7j'});*/
Meteor.methods({



    crearReserva: function (datosReserva) {
        
        Reservas.insert(datosReserva);
        console.log(Reservas.find().fetch());

    },

    eliminarReserva: function (idReserva) {

        if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {

            Reservas.remove({_id: idReserva})

        } else {

            throw new Meteor.Error('no-admin', 'No eres administrador');

        }
    }

});