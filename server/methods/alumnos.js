/**
 * Created by puesto1 on 3/8/16.
 */


Meteor.methods({

    crearAlumno: function (datosAlumno) {

        Accounts.createUser({
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

    },

    editarAlumno: function (datosAlumno) {

        Meteor.users.update({username: datosAlumno.username},{$set: {
            
            username: datosAlumno.username,
            profile:{
                nombre: datosAlumno.nombre,
                apellido: datosAlumno.apellido
            },
            'emails.0.address': datosAlumno.email
        }});

    },

    crearProfesor: function (datosProfesor) {

        Accounts.createUser({
            username: datosProfesor.username,
            email: datosProfesor.email,
            password: datosProfesor.password,
            profile: {
                nombre: datosProfesor.nombre,
                apellido: datosProfesor.apellido,
                role: 'profesor'
            }
        });

    },
    crearEmpresa: function (datosEmpresa) {

        Accounts.createUser({
            username: datosEmpresa.username,
            email: datosProfesor.email,
            password: datosEmpresa.password,
            profile: {
                nombre: datosEmpresa.nombre,
                apellido: datosEmpresa.apellido,
                role: 'empresa'
            }
        });

    }

});