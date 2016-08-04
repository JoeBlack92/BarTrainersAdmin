/**
 * Created by puesto1 on 3/8/16.
 */


Template.nuevoAlumno.events({

    'submit #agregarAlumno': function (e,t) {

        e.preventDefault();

        var datosAlumno = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val()
        };

        console.log(datosAlumno);

        Meteor.call('crearAlumno', datosAlumno, function (error, result) {

            if(error){
                console.log(error.reason);
            }
            
        });

    }

});