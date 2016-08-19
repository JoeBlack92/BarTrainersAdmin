

Template.perfilAlumno.events({

    'change #trabajo': function () {

        var trabajo = $('#trabajo').val();
         var extras = $('#extras').val();

        if(trabajo == 'false'){
            $('#trabajo').val('true');
            trabajo = true;
        }else{
            $('#trabajo').val('false');
            trabajo = false;
        }

        if($('#extras').val() == 'false'){
            extras = false;
        }else{
            extras = true;
        }


        var datosAlumno = {
            trabajo: trabajo,
            extras: extras
        };


        Meteor.call('editarAlumno', datosAlumno, function (error, result) {

            if(!error){

            }else{
                console.log(error.reason);
                if(error.reason == "Username already exists."){
                    alert('El nombre de usuario ya esta registrado');
                }else if(error.reason == "Email already exists."){
                    alert('Este email ya esta registrado');
                }
            }

        });
    },
    
    'change #extras': function () {

        var extras = $('#extras').val();
        var trabajo = $('#trabajo').val();


        if(extras == 'false'){
            $('#extras').val('true');
            extras = true;
        }else{
            $('#extras').val('false');
            extras = false;
        }

        if($('#trabajo').val()== 'false'){

            trabajo = false;
        }else{

            trabajo = true;
        }

        var datosAlumno = {
            trabajo: trabajo,
            extras: extras
        };



        Meteor.call('editarAlumno', datosAlumno, function (error, result) {

            if(!error){

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
Template.perfilAlumno.helpers({

    checkedTrabajo : function () {

        var user = Meteor.user();

        if(user && user.profile.btrabajo){
            return 'checked';
        }else{
            return '';
        }


    },
    checkedExtras: function () {

        var user = Meteor.user();

        if(user && user.profile.extras){
            return 'checked';
        }else{
            return '';
        }


    }
});
Template.perfilAlumno.onCreated(function() {

  

});

Template.perfilAlumno.onRendered(function() {
    //add your statement here
});

Template.perfilAlumno.onDestroyed(function() {
    //add your statement here
});

