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

    // ANIMATION_END = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
    //
    // debouncer = function (fn) {
    //     var stack = [];
    //     var threshold = 200;
    //     var lastCall = new Date().getTime();
    //     var callFunctions = Array.prototype.forEach.bind(stack, function (fn) { fn(); }); // can't wait for `x => x()`
    //     var timeoutHandle;
    //     return function () {
    //         var now = new Date().getTime()
    //         var deltaT = now - lastCall;
    //         lastCall = now;
    //         // make sure each function is called with the correct `this` and arguments
    //         stack.push(fn.bind.apply(fn, [this].concat(Array.prototype.slice.call(arguments))));
    //         clearTimeout(timeoutHandle);
    //         timeoutHandle = setTimeout(callFunctions, threshold);
    //     };
    // };
    //
    // animating = false;
    //
    // animateEnter = function  () {
    //     if (animating) { return; }
    //     animating = true;
    //     $('.item').addClass('animate-enter');
    //     $('.list').removeClass('hidden');
    //     $('.item').one(ANIMATION_END, debouncer(function (e) {
    //         $(this).removeClass('animate-enter');
    //         animating = false;
    //     }));
    // }
    //
    // animateLeave = function () {
    //     if (animating) { return; }
    //     animating = true;
    //     $('.item').addClass('animate-leave');
    //     $('.item').one(ANIMATION_END, debouncer(function (e) {
    //         $('.list').addClass('hidden');
    //         $(this).removeClass('animate-leave');
    //         animating = false;
    //     }));
    // }



});

Template.ejercicios.onRendered(function() {


});

Template.ejercicios.onDestroyed(function() {

});

