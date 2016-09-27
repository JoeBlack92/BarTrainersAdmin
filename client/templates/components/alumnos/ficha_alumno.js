/**
 * Created by puesto1 on 4/8/16.
 */


Template.fichaAlumno.onCreated(function () {

    var instance = this;
    instance.foto = new ReactiveVar(instance.data.profile.foto);
});

Template.fichaAlumno.onRendered(function () {

    $('.modal-trigger').leanModal();

});

Template.fichaAlumno.helpers({

    foto: function () {
        return Template.instance().foto.get();
    },
   
});


Template.fichaAlumno.events({
    'submit #ficha': function (e,t) {

        e.preventDefault();

        var datosAlumno = {
            _id: Router.current().params._id,
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            username: $('#username').val(),
            email: $('#email').val(),
            foto: Template.instance().foto.get(),
            telefono:$('#tel').val()
        };

        if(!datosAlumno.nombre){
            return alert('Ingresa un nombre');
        }else if(!datosAlumno.apellido){
            return alert('Ingresa un apellido');
        }else if(!datosAlumno.username){
            return alert('Ingresa un nombre de usuario');
        }else if(!datosAlumno.email){
            return alert('Ingresa un email');
        }else if(!datosAlumno.telefono){
            return alert('Ingresa un telefono');
        }
        
        Meteor.call('editarFichaAlumno', datosAlumno, function (error, result) {
           
            if(!error){
                Router.go('listaAlumnos');
            }
            
        });
    },
    
    'click #tomar-foto': function (e,t) {
        MeteorCamera.getPicture({width: 200, height:250, quality:80}, function (error, data) {
            if(error){
                console.log(error);
                
            }else{
                t.foto.set(data);
            }
        });
    },

    'click #eliminar-alumno': function (e,t) {

        
            var retVal = confirm("Esta seguro de eliminar la reserva?");
            if( retVal == true ){
                
                Meteor.call('eliminarAlumno', this._id, function (error, result) {

                    if(error){
                        return alert(error.reason);
                    }

                    Router.go('listaAlumnos');


                });
            }  
    }
});
