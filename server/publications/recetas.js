/**
 * Created by iw-poblenou2 on 1/9/16.
 */

Meteor.publish('listaRecetas', function () {

    if(Roles.userIsInRole(this.userId ,['admin', 'profesor','alumno'])){
        return Recetas.find();
    }

});
