/**
 * Created by iw-poblenou2 on 19/8/16.
 */
Meteor.publish('notificacion', function (notiId) {


        return Notificaciones.find({_id: notiId});


});

// Meteor.publish('listaNotificaciones', function () {
//
//
//
//         return Notificaciones.find();
//
// });

Meteor.publishComposite('listaNotificaciones', function() {



        return {

                find: function() {


                        if(Notificaciones.find().count() > 0){
                                return Notificaciones.find();
                        }else{
                                return this.ready();
                        }

                },

                children: [
                        {
                                find: function(noti) {

                                        if(noti){
                                                return Meteor.users.find({_id: noti.idEmpresa});
                                        }else{
                                               return this.ready();
                                        }

                                }
                        }

                ]
        }
});