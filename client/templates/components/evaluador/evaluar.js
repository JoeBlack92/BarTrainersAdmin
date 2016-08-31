
Template.registerHelper('count', function () {
    temp++;
    if(temp <= 1){
        count++;
    }else{
        temp = 0;

    }

    return count;

});

Template.registerHelper('checked', function (val) {
    
    if(val){
        return "checked";
    }

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
  'change input' : function (e,t) {

      var value = this.valueOf();

      console.log(e.target);
      var val = $(e.target).prop("checked");

      console.log(val);


      console.log(value.name + " valor actual: " + val);
      Meteor.call('evaluar',Router.current().params.IdCurso, Router.current().params.IdAlumno,value.name,val, function (error, result) {

          if(error){
              return alert(error.reason);
          }
      })
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

