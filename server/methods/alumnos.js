/**
 * Created by puesto1 on 3/8/16.
 */


Meteor.methods({

    crearAlumno: function (datosAlumno) {

        Accounts.createUser({
            username: datosAlumno.username,
            password: datosAlumno.password,
            profile: {
                nombre: datosAlumno.nombre,
                apellido: datosAlumno.apellido,
                role: 'alumno',
                email: datosProfesor.email
            }
        });

    },
    crearProfesor: function (datosProfesor) {

        Accounts.createUser({
            username: datosProfesor.username,
            password: datosProfesor.password,
            profile: {
                nombre: datosProfesor.nombre,
                apellido: datosProfesor.apellido,
                role: 'profesor',
                email: datosProfesor.email
            }
        });

    },
    crearEmpresa: function (datosEmpresa) {

        Accounts.createUser({
            username: datosEmpresa.username,
            password: datosEmpresa.password,
            profile: {
                nombre: datosEmpresa.nombre,
                apellido: datosEmpresa.apellido,
                role: 'empresa',
                email: datosProfesor.email
            }
        });

    }

});