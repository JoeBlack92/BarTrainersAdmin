Template.crearRecetas.helpers({
    foto: function () {
        return Template.instance().foto.get();
    },

});

Template.crearRecetas.events({
    
});

Template.crearRecetas.onCreated(function() {
    var instance = this;

    instance.foto = new ReactiveVar('/img/coctel.png');
    
    imageRes = function(input) {
        var files = input.files;
        console.log(files);
        if (files && files[0]) {
            var img = new FileReader();
            img.onload = function (data){
                instance.foto = data.target.result;
                console.log(data.target.result);
            }


        }
        console.log(instance.foto.get());
    }
    
});

Template.crearRecetas.onRendered(function() {
    //add your statement here
});

Template.crearRecetas.onDestroyed(function() {
    //add your statement here
});

