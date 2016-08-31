
Template.registerHelper('count', function () {
    temp++;
    if(temp <= 1){
        count++;
    }else{
        temp = 0;

    }

    return count;

});

Template.evaluar.helpers({
 listaeval: function () {

     var al = Niveles.findOne({idAlumno:Router.current().params.IdAlumno});
    
         return al.ejercicios;
     
 },
    alumno : function () {
        var alr = Meteor.users.findOne({_id: Router.current().params.IdAlumno});
        return alr.profile.nombre + " " + alr.profile.apellido;
        
    }
});

Template.evaluar.events({
  'change input' : function () {

      var value = this.valueOf();
      var val = $( "input:checked" ).val();
      if(val == "undefined"){
          val = false;
      }
      console.log(value.name + " valor actual: " + val);
  }
});

Template.evaluar.onCreated(function() {
   var inf = Router.current().params;
    console.log(inf.IdCurso);
    count = 0;
    temp = 0;
});

Template.evaluar.onRendered(function() {


    animateEnter();

});

Template.evaluar.onDestroyed(function() {
    animateLeave();
});

