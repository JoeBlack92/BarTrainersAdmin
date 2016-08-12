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
                btrabajo: false,
                extras: false, 
                role: 'alumno'
            }
        });

        Roles.addUsersToRoles(id, 'alumno');

    },

    editarAlumno: function (datosAlumno) {

        Meteor.users.update({_id: Meteor.userId()},{$set: {
            'profile.btrabajo': datosAlumno.trabajo,
            'profile.extras': datosAlumno.extras
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