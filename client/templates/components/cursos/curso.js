Template.curso.helpers({

    idCurso: function () {
        return Template.instance().idCurso.get();
    },

    listprofes: function () {

        return Meteor.users.find({_id: {$in: this.profesores}});

    },
    listalumnos: function () {

        return Meteor.users.find({_id: {$in: this.alumnos}});

    },
    
    profesores: function () {

        return Meteor.users.find({$and: [
            { 'roles.0' : 'profesor'},
            { _id : {$nin: this.profesores}}
        ]});
        
       
    },
    alumnos: function () {

       
        return Meteor.users.find({$and: [
            { 'roles.0' : 'alumno'},
            { _id : {$nin: this.alumnos}}
        ]});


    }
});
Template.curso.onCreated(function() {


    var instance = this;

    instance.idCurso = new ReactiveVar(this.data._id);

});

Template.curso.events({

    'click #excTab' : function () {
        console.log("puede: "+ puede);
        if(puede){
        setTimeout(animateEnter(), 1000);
        }
    },
    'click #cursTab' : function () {
        console.log("puede: "+ puede);
        if(!puede){
        animateLeave();
        }
    },

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
    'click #borrar-alumno' : function (e,t) {


        var retVal = confirm("Esta seguro de eliminar el alumno?");
        if( retVal == true ){

            console.log(Template.instance().idCurso.get() +"   "+ this._id);

            Meteor.call('eliminarAlumnoCurso',Template.instance().idCurso.get(), this._id, function (error, result) {

                if(error){
                    return alert(error.reason);
                }
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

        var datos=[];

        $.each(this.ejercicios, function( index, value ) {
            datos.push({name: value, finalizado: false});
        });

        if(alumnoId != null){
            Meteor.call('anadirAlumno', this._id, alumnoId, datos, function (error, result){

                if (!error) {
                    var sel = document.getElementById('alum');
                    sel.remove($('#alum').find(":selected").index('option'));
                } else {
                    console.log(error.reason);
                }
            });
        }

    },
});



Template.curso.onRendered(function() {

    $('ul.tabs').tabs();
    $('ul.tabs').tabs('select_tab', 'tab_id');
});

Template.curso.onDestroyed(function() {
    //add your statement here
});

