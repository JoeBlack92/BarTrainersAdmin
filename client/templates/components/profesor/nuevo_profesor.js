/**
 * Created by puesto1 on 3/8/16.
 */

Template.nuevoProfesor.onCreated(function () {

    var instance = this;
    instance.foto = new ReactiveVar('/img/avatar.png');

});

Template.nuevoProfesor.helpers({

    foto: function () {
        return Template.instance().foto.get();
    }
    
});

Template.nuevoProfesor.events({

    'click #tomar-foto': function (event,template) { //event, template
        MeteorCamera.getPicture({width: 200, height:250, quality:80}, function (error, data) {
            if(!error){
                template.foto.set(data); //imagen base64
            }
        });
    },

    'submit #agregarAlumno': function (e,t) {

        e.preventDefault();

        var datosProfesor = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val(),
            foto: Template.instance().foto.get()
        };

        if(!datosProfesor.nombre){
            return alert('Ingresa un nombre');
        }else if(!datosProfesor.apellido){
            return alert('Ingresa un apellido');
        }else if(!datosProfesor.username){
            return alert('Ingresa un nombre de usuario');
        }else if(!datosProfesor.email){
            return alert('Ingresa un email');
        }

        

        Meteor.call('crearProfesor', datosProfesor, function (error, result) {

            if(!error){
                Router.go('listaProfesores');
            }else{
                console.log(error.reason);
                if(error.reason == "Username already exists."){
                    alert('El nombre de usuario ya esta registrado');
                }else if(error.reason == "Email already exists."){
                    alert('Este email ya esta registrado');
                }
            }
            
        });

    }

});