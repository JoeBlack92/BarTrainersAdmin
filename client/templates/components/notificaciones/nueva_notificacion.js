Template.nuevaNotificacion.helpers({



});

Template.nuevaNotificacion.events({
    'submit #enviar': function (e,t) {

        e.preventDefault();

        var currentUser = Meteor.user();

        var datosNoti = {
            idEmpresa: currentUser._id,
            idAlumno: this._id,
            propuesta: $('#propuesta').val()
        };

        console.log("idEmp: " + currentUser._id
        + "\n idAlum:" + this._id);

        if(!datosNoti.propuesta){
            return alert('Ingresa tu mensaje');
        }

        Meteor.call('crearNotificacion', datosNoti, function (error, result) {

            if(!error){
                Router.go('listaBusqueda');
            }else{
                console.log(error.reason);

            }

        });

    }
});

Template.nuevaNotificacion.onCreated(function() {
    var instance = this;
    // instance.profile = new ReactiveVar(instance.data.profile);
});

Template.nuevaNotificacion.onRendered(function() {
    //add your statement here
});

Template.nuevaNotificacion.onDestroyed(function() {
    //add your statement here
});

