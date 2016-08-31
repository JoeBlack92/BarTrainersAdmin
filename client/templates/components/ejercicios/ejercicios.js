Template.ejercicios.helpers({
     listaejercicios : function () {
         return this.ejercicios;
     }

});

Template.ejercicios.events({
    
  'click #nuevoEjer' : function () {

      if($('#nombreEjercicio').val()){
          var name = $('#nombreEjercicio').val();
          Meteor.call('anadirEjecicio',this._id, name);
      }else{
        alert("Ingresa el nombre del ejercicio");
      }
  },


    'click #borrar-ejerc' : function () {

        var name = this.valueOf();

        var retVal = confirm("Esta seguro de eliminar el ejercició?");
        if( retVal == true ){

            Meteor.call('eliminarEjercicio', Router.current().params._id,name, function (error, result) {

                if(error){
                    return alert(error.reason);
                }
            });
        }

    }



});

Template.ejercicios.onCreated(function() {


});

Template.ejercicios.onRendered(function() {


});

Template.ejercicios.onDestroyed(function() {

});

