/**
 * Created by puesto1 on 8/8/16.
 */



Meteor.publishComposite('dashboardAdmin', function(userId, limit) {
    
    return {
        
        find: function() {
            return Meteor.users.find({'roles.0' : 'alumno'});
        },
        
        children: [
            {
                find: function(alumno) {
                    return Reservas.find();
                }
            }
            
        ]
    }
});