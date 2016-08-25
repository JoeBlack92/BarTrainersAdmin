Template.curso.helpers({

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
    ANIMATION_END = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';

    debouncer = function (fn) {
        var stack = [];
        var threshold = 200;
        var lastCall = new Date().getTime();
        var callFunctions = Array.prototype.forEach.bind(stack, function (fn) { fn(); }); // can't wait for `x => x()`
        var timeoutHandle;
        return function () {
            var now = new Date().getTime()
            var deltaT = now - lastCall;
            lastCall = now;
            // make sure each function is called with the correct `this` and arguments
            stack.push(fn.bind.apply(fn, [this].concat(Array.prototype.slice.call(arguments))));
            clearTimeout(timeoutHandle);
            timeoutHandle = setTimeout(callFunctions, threshold);
        };
    };

    animating = false;
    puede = true;

    animateEnter = function  () {

            if (animating) { return; }
            animating = true;
            $('.item').addClass('animate-enter');
            $('.list').removeClass('hidden');
            $('.item').one(ANIMATION_END, debouncer(function (e) {
                $(this).removeClass('animate-enter');
                animating = false;
                puede= false;
            }));


    }

    animateLeave = function () {

        $('.list').addClass('hidden');
        animating = false;
        puede = true;
            // if (animating) { return; }
            // animating = true;
            // $('.item').addClass('animate-leave');
            // $('.item').one(ANIMATION_END, debouncer(function (e) {
            //     $('.list').addClass('hidden');
            //     $(this).removeClass('animate-leave');
            //     animating = false;
            //     puede = true;
            // }));
        }


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

