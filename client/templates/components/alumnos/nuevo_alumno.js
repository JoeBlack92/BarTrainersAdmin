/**
 * Created by puesto1 on 3/8/16.
 */

Template.nuevoAlumno.onCreated(function () {

    var instance = this;
    instance.foto = new ReactiveVar('img/avatar.png');

});

Template.nuevoAlumno.helpers({

    foto: function () {
        return Template.instance().foto.get();
    }
    
});

Template.nuevoAlumno.events({

    'click #tomar-foto': function (e,t) {
        MeteorCamera.getPicture({width: 200, height:250, quality:80}, function (error, data) {
            if(!error){
                t.foto.set(data);
            }
        });
    },

    'submit #agregarAlumno': function (e,t) {

        e.preventDefault();

        var datosAlumno = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val(),
            foto: Template.instance().foto.get()
        };

        console.log(datosAlumno);

        Meteor.call('crearAlumno', datosAlumno, function (error, result) {

            if(!error){
                Router.go('listaAlumnos');
            }else{
                console.log(error.reason);
            }
            
        });

    }

});