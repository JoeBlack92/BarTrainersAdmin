Meteor.publish('empresa', function (empresaId) {

    if(Roles.userIsInRole(this.userId,['admin'])){
        return Meteor.users.find({_id: empresaId});
    }

});

Meteor.publish('listaEmpresas', function () {


    if(Roles.userIsInRole(this.userId ,['admin'])){
        return Meteor.users.find({'roles.0' : 'empresa'});
    }

});


