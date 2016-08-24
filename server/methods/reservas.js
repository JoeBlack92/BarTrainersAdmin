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

    eliminarReserva: function (datos) {

        if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {

            console.log(datos);
            

            var dia = Dias.findOne({fecha: datos.fecha, idBarra:datos.barra});
            
            for(var i=0; i < dia.horas.length ; i++){

                if(dia.horas[i].idReserva == datos.id){
                    dia.horas[i].idReserva = "";
                    dia.horas[i].libre = true;
                }

            }
            
            Dias.update({_id: dia._id}, {$set: dia});
            Reservas.remove({_id: datos.id});

        } else {

            throw new Meteor.Error('no-admin', 'No eres administrador');

        }
    }

});