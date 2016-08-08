/**
 * Created by puesto1 on 8/8/16.
 */


Meteor.methods({

    crearProfesor: function (datosProfesor) {

        var id = Accounts.createUser({
            username: datosProfesor.username,
            email: datosProfesor.email,
            password: datosProfesor.password,
            profile: {
                nombre: datosProfesor.nombre,
                apellido: datosProfesor.apellido,
                foto: datosProfesor.foto,
                role: 'profesor'
            }
        });

        Roles.addUsersToRoles(id, 'profesor');

    },

    editarProfesor: function (datosProfesor) {

        Meteor.users.update({_id: datosProfesor._id},{$set: {

            username: datosProfesor.username,
            'profile.foto': datosProfesor.foto,
            'profile.nombre': datosProfesor.nombre,
            'profile.apellido': datosProfesor.apellido,
            'emails.0.address': datosProfesor.email
        }});

    },

    eliminarProfesor: function (idAlumno) {

        if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {

            Meteor.users.remove({_id: idAlumno});

        }else{

            throw new Meteor.Error('no-admin', 'No eres administrador');

        }

    }
    
});