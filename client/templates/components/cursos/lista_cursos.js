Template.listaCursos.helpers({
    cursos: function () {
        return Cursos.find();
    }
});

Template.listaCursos.events({
 //add your events here
});

Template.listaCursos.onCreated(function() {
    var instance = this;
});

Template.listaCursos.onRendered(function() {
    setTimeout(animateEnter(), 1000);
    
});

Template.listaCursos.onDestroyed(function() {
    animateLeave();
});

