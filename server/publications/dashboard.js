/**
 * Created by puesto1 on 8/8/16.
 */



Meteor.publishComposite('dashboardAdmin', function(userId, limit) {
    
    return {
        
        find: function() {
            return Meteor.users.find({$or :[{'roles.0' : 'alumno'},{'roles.0' : 'profesor'},{'roles.0' : 'empresa'}]});
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