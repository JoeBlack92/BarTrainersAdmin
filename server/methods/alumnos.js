/**
 * Created by puesto1 on 3/8/16.
 */


Meteor.methods({

    crearAlumno: function (datosAlumno) {

        var id = Accounts.createUser({
            username: datosAlumno.username,
            email: datosAlumno.email,
            password: datosAlumno.password,
            profile: {
                nombre: datosAlumno.nombre,
                apellido: datosAlumno.apellido,
                foto: datosAlumno.foto,
                role: 'alumno'
            }
        });

        Roles.addUsersToRoles(id, 'alumno');

    },

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

    }
    

});