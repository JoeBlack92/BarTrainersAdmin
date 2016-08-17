
/**
 * Created by iw-poblenou2 on 16/8/16.
 */
Meteor.publish('curso', function (cursoId) {

    if(Roles.userIsInRole(this.userId,['admin', 'profesor'])){
        return Cursos.find({_id: cursoId});
    }

});

Meteor.publish('listaCursos', function () {
    
    if(Roles.userIsInRole(this.userId ,['admin', 'profesor'])){
        return Cursos.find();
    }

});




