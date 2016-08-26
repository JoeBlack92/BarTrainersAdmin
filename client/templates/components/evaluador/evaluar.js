Template.evaluar.helpers({
 
});

Template.evaluar.events({
 //add your events here
});

Template.evaluar.onCreated(function() {
   var inf = Router.current().params;
    console.log(inf.IdCurso);
});

Template.evaluar.onRendered(function() {
    //add your statement here
});

Template.evaluar.onDestroyed(function() {
    //add your statement here
});

