
/**
 * Created by iw-poblenou2 on 16/8/16.
 */
// Meteor.publish('curso', function (cursoId) {
//
//     if(Roles.userIsInRole(this.userId,['admin', 'profesor'])){
//         return Cursos.find({_id: cursoId});
//     }
//
// });

Meteor.publish('listaCursos', function () {
    
    if(Roles.userIsInRole(this.userId ,['admin', 'profesor','alumno'])){
        return Cursos.find();
    }

});

Meteor.publishComposite('curso', function(cursoId) {

    return {
        find: function() {
            // Find top ten highest scoring posts
            return Cursos.find({_id: cursoId});
        },
        children: [
            {
                find: function() {
                    return Meteor.users.find({'roles.0' : 'profesor'});
                }
            },
            {
                find: function() {
                    return Meteor.users.find({'roles.0' : 'alumno'});
                }
            }
        ]

    }

});


