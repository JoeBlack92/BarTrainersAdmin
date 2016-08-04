/**
 * Created by puesto1 on 4/8/16.
 */


Template.fichaAlumno.helpers({
    
});


Template.fichaAlumno.events({
    'submit #ficha': function (e,t) {

        e.preventDefault();

        var datosAlumno = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            username: $('#username').val(),
            email: $('#email').val()
        };
        
        Meteor.call('editarAlumno', datosAlumno, function (error, result) {
           
            if(error){
                console.log(error.reason);
            }
            
        });

    }
});
