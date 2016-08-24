

Template.perfilAlumno.events({

    'change #trabajo': function () {

        var trabajo = $('#trabajo').prop('checked');
        var extras= $('#extras').prop('checked');


        console.log("trabajo: "+trabajo
        +"\nextras: "+ extras);




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

        var trabajo = $('#trabajo').prop('checked');
        var extras= $('#extras').prop('checked');


        console.log("trabajo: "+trabajo
            +"\nextras: "+ extras);


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

