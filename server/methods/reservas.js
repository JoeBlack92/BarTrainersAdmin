/**
 * Created by iw-poblenou2 on 10/8/16.
 */

Meteor.methods({



    crearReserva: function (datosReserva) {
        
        var id = Reservas.insert(datosReserva);
        
        return {
            idReserva : id
        }

    },

    eliminarReserva: function (idReserva) {

        if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {

            Reservas.remove({_id: idReserva})

        } else {

            throw new Meteor.Error('no-admin', 'No eres administrador');

        }
    }

});