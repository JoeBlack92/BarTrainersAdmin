Template.curso.helpers({
 //add you helpers here
});
Template.curso.onCreated(function() {
    var instance = this;
});

Template.curso.events({
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
    }});



Template.curso.onRendered(function() {
    //add your statement here
});

Template.curso.onDestroyed(function() {
    //add your statement here
});

