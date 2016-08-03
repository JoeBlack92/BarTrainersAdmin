/**
 * Created by puesto1 on 3/8/16.
 */


Meteor.methods({

    crearAlumno: function (datosAlumno) {

        Accounts.createUser({
            email: datosAlumno.email,
            username: datosAlumno.username,
            password: datosAlumno.password,
            profile: {
                nombre: datosAlumno.nombre,
                apellido: datosAlumno.apellido
            }
        });

    }

});