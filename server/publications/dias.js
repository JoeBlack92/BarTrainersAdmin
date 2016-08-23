/**
 * Created by iw-poblenou2 on 23/8/16.
 */
Meteor.publishComposite('dias', function() {

    return {

        find: function() {
            return Dias.find();
        },

        children: [
            {
                find: function() {
                    return Reservas.find();
                }
            }

        ]

    }
});