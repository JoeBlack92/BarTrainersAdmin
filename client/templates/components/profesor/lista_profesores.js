/**
 * Created by puesto1 on 3/8/16.
 */


Template.listaProfesores.onCreated(function () {

    var instance = this;

});
Template.listaProfesores.onRendered(function() {
    setTimeout(animateEnter(),1000);
});

Template.listaProfesores.onDestroyed(function() {
    animateLeave()
});


Template.listaProfesores.events({

});


Template.listaProfesores.helpers({

    profesores: function () {
        return Meteor.users.find({'roles.0': 'profesor'},{sort: {createdAt: -1}});
    }

});