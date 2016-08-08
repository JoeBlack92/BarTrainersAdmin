/**
 * Created by puesto1 on 4/8/16.
 */


Template.fichaProfesor.onCreated(function () {

    var instance = this;
    instance.foto = new ReactiveVar(instance.data.profile.foto);
});

Template.fichaProfesor.onRendered(function () {

    $('.modal-trigger').leanModal();

});

Template.fichaProfesor.helpers({

    foto: function () {
        return Template.instance().foto.get();
    }

});


Template.fichaProfesor.events({
    'submit #ficha': function (e,t) {

        e.preventDefault();

        var datosProfesor = {
            _id: Router.current().params._id,
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            username: $('#username').val(),
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
        
        Meteor.call('editarProfesor', datosProfesor, function (error, result) {
           
            if(!error){
                Router.go('listaProfesores');
            }
            
        });
    },
    
    'click #tomar-foto': function (e,t) {
        MeteorCamera.getPicture({width: 200, height:250, quality:80}, function (error, data) {
            if(!error){
                t.foto.set(data);
            }
        });
    },

    'click #eliminar-profesor': function () {

        Meteor.call('eliminarProfesor', this._id, function (error, result) {

            if(error){
                return alert(error.reason);
            }

            Router.go('listaProfesores');

        })

    }
});
