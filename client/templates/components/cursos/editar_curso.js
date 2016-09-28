Template.editarCurso.helpers({
 //add you helpers here
});

Template.editarCurso.events({
    'submit #editarCurso': function (e,t) {

        e.preventDefault();

        var ide =  Router.current().params._id;

        console.log(ide);

        var datosCurso = {
            nombre: $('#nombreCurso').val(),
            horas: $('#horas').val(),
            desc: $('#descripcion').val(),

        };

        if(!datosCurso.nombre){
            return alert('Ingresa un nombre');
        }else if(!datosCurso.horas){
            return alert('Ingresa las horas');
        }else if(!datosCurso.desc){
            return alert('Ingresa una descripcion');
        }



        Meteor.call('editarCurso', ide, datosCurso, function (error, result) {

            if(!error){
                Router.go('listaCursos');
            }else{
                console.log(error.reason);

            }

        });

    }
});

Template.editarCurso.onCreated(function() {
    //add your statement here
});

Template.editarCurso.onRendered(function() {
    //add your statement here
});

Template.editarCurso.onDestroyed(function() {
    //add your statement here
});

