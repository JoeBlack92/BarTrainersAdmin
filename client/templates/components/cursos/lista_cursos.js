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
    //add your statement here
});

Template.listaCursos.onDestroyed(function() {
    //add your statement here
});

