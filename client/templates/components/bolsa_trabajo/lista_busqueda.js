Template.listaBusqueda.helpers({
    alumnos: function () {
        return Meteor.users.find({$and:[{'roles.0': 'alumno'},{ 'profile.btrabajo' : true }]},{sort: {createdAt: -1}});
    },

    colorExtras : function () {
        var user = this.profile.extras;
    
        if(user){
            return 'green'
        }else{
            return 'red'
        }
    }

});

Template.listaBusqueda.events({
 //add your events here
});

Template.listaBusqueda.onCreated(function() {
    //add your statement here
});

Template.listaBusqueda.onRendered(function() {
    //add your statement here
});

Template.listaBusqueda.onDestroyed(function() {
    //add your statement here
});

