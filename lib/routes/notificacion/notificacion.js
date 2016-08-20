/**
 * Created by iw-poblenou2 on 19/8/16.
 */
NotificacionController = RouteController.extend({

    waitOn: function(){
        return Meteor.subscribe('notificacion', this.params._id);
    },

    data: function() {

        if(this.ready()){

            var notificacion = Notificaciones.findOne({_id: this.params._id});
            if(notificacion){
                return notificacion;
            }
        }

    }

});