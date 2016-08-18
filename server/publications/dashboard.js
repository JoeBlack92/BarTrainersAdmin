/**
 * Created by puesto1 on 8/8/16.
 */



Meteor.publishComposite('dashboardAdmin', function(userId, limit) {
    
    return {
        
        find: function() {
            return Meteor.users.find({$or :[{'roles.0' : 'alumno'},{'roles.0' : 'profesor'}]});
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