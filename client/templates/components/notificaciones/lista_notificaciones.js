Template.listaNotificaciones.helpers({
 
    notificaciones: function () {
        return Notificaciones.find();
    }
});

Template.itemNotificacion.helpers({

    empresa: function () {
        return Meteor.users.findOne({_id: this.idEmpresa});
    }
    
});

Template.listaNotificaciones.events({
    'click #noti': function () {
        
        
        
    }
});

Template.listaNotificaciones.onCreated(function() {
    //add your statement here
});

Template.listaNotificaciones.onRendered(function() {
    //add your statement here
});

Template.listaNotificaciones.onDestroyed(function() {
    //add your statement here
});

