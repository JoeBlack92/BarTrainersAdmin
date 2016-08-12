/**
 * Created by iw-poblenou2 on 10/8/16.
 */
Meteor.publishComposite('listaReservas', {

    find: function() {
        // Find top ten highest scoring posts
        return Reservas.find();
    },
    children: [
        {
            find: function(reserva) {
                return Meteor.users.find({ _id: reserva.id_user });
            }
        }
    ]

});