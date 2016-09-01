/**
 * Created by iw-poblenou2 on 1/9/16.
 */
Meteor.methods({



    crearReceta: function (datosReserva) {

        var id = Recetas.insert(datosReserva);

        return {
            idReserva : id
        }

    },

    eliminarReceta: function (datos) {

        if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {

            console.log(datos);


            Recetas.remove({_id: datos.id});

        } else {

            throw new Meteor.Error('no-admin', 'No eres administrador');

        }
    }

});