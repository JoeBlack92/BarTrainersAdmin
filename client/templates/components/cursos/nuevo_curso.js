Template.nuevoCurso.helpers({
 //add you helpers here
});

Template.nuevoCurso.events({

    'submit #agregarCurso': function (e,t) {

        e.preventDefault();

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



        Meteor.call('crearCurso', datosCurso, function (error, result) {

            if(!error){
                Router.go('listaCursos');
            }else{
                console.log(error.reason);
               
            }

        });

    }
    
});

Template.nuevoCurso.onCreated(function() {
    //add your statement here
});

Template.nuevoCurso.onRendered(function() {
    //add your statement here
});

Template.nuevoCurso.onDestroyed(function() {
    //add your statement here
});

