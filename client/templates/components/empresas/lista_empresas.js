Template.listaEmpresas.helpers({
    empresas: function () {
        return Meteor.users.find({'roles.0': 'empresa'},{sort: {createdAt: -1}});
    }
});

Template.listaEmpresas.events({
 //add your events here
});

Template.listaEmpresas.onCreated(function() {
    //add your statement here
});

Template.listaEmpresas.onRendered(function() {
    //add your statement here
});

Template.listaEmpresas.onDestroyed(function() {
    //add your statement here
});

