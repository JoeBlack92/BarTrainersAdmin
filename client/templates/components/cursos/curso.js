Template.curso.helpers({

    listprofes: function () {

        return Meteor.users.find({_id: {$in: this.profesores}});

    },
    listalumnos: function () {

        return Meteor.users.find({_id: {$in: this.alumnos}});

    },
    
    profesores: function () {
        return Meteor.users.find({'roles.0' : 'profesor'});
    },
    alumnos: function () {
        return Meteor.users.find({'roles.0' : 'alumno'});
    }
});
Template.curso.onCreated(function() {
    var instance = this;
});

Template.curso.events({
    'click #eliminar-curso' : function (e,t) {


        var retVal = confirm("Esta seguro de eliminar el curso?");
        if( retVal == true ){

            Meteor.call('eliminarCurso', this._id, function (error, result) {

                if(error){
                    return alert(error.reason);
                }

                Router.go('listaCursos');


            });
        }
    },

    'click #assignar-profesor' : function () {


        var profeId = $('#profes').find(":selected").attr('value');

        if(profeId != null){
            Meteor.call('anadirProfesor', this._id, profeId , function (error, result){

                if (!error) {

                } else {
                    console.log(error.reason);
                }
            });
        }

    },
    'click #assignar-alumno' : function () {

        var alumnoId = $('#alum').find(":selected").attr('value');
        if(alumnoId != null){
            Meteor.call('anadirAlumno', this._id, alumnoId , function (error, result){

                if (!error) {

                } else {
                    console.log(error.reason);
                }
            });
        }

    },
});



Template.curso.onRendered(function() {
    $('select').material_select();
});

Template.curso.onDestroyed(function() {
    //add your statement here
});

