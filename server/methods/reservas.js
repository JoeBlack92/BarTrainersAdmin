/**
 * Created by iw-poblenou2 on 10/8/16.
 */
/*Reservas.remove({id_user:'K6NHEgztwwJFLrB7j'});*/
Meteor.methods({



    crearReserva: function (datosReserva) {
        
        Reservas.insert(datosReserva);
        console.log(Reservas.find().fetch());

    }/*,

    editarAlumno: function (datosAlumno) {

        Meteor.users.update({_id: datosAlumno._id},{$set: {

            username: datosAlumno.username,
            'profile.foto': datosAlumno.foto,
            'profile.nombre': datosAlumno.nombre,
            'profile.apellido': datosAlumno.apellido,
            'emails.0.address': datosAlumno.email
        }});

    },

    eliminarAlumno: function (idAlumno) {

        if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {

            Meteor.users.remove({_id: idAlumno});

        }else{

            throw new Meteor.Error('no-admin', 'No eres administrador');

        }

    }*/


});