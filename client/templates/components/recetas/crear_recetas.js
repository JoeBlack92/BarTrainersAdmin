Template.crearRecetas.helpers({
    foto: function () {
        return Template.instance().fotos.get();
    },
    html : function () {
        return Template.instance().coco.get();
    }

});

Template.crearRecetas.events({

    'click .newPost li[data-value]' : function(e,t){
        console.log($(e.target).data('value'));
        console.log(t.funcs.get());
        var $value = $(e.target).data('value');
        document.execCommand( t.funcs.get(), false, $value);

    },


    'blur .editor ' : function(e,t){

        $(e.target).blur(function(){
            $(e.target).focus();
        });
    },


    'click .newPost button[data-func]' : function(e,t){

            console.log($(e.target).data('func'));
            t.funcs.set($(e.target).data('func'));
            document.execCommand( $(e.target).data('func'), false 	);
    },

    'click #clank' : function (e,t) {


        var vaal = $('#textarea1').val();
        vaal = vaal.replace(/\r?\n/g, "<br style='height:12px;'>");
        console.log(vaal);
        t.coco.set(vaal);
        //
        // console.log(sanitize($('#textarea1').val()));
    },

    'change #fileimg ' : function (e,t) {

        if(Meteor.isCordova){

            var cameraOptions = {
                width: 800,
                height: 600,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            };


            MeteorCamera.getPicture(cameraOptions, function (error, data) {
                if(!error){
                    instance.fotos.set(data);
                }
            });


        }else{

            var file    = e.target.files[0];

            console.log(e.target.files);

            if(e.target.files && file){
                var reader  = new FileReader();
                reader.onload = function (image) {
                    t.fotos.set(image.target.result);
                    console.log(image.target.result);
                }
            }

            console.log(reader);

            reader.readAsDataURL(file);

        }


    },


    'keypress .editor' : function (e,t) {


        if(typeof(Storage) != "undefined") {

            $(e.target).find('.saved').detach();
        }
    },
    // $('.editor').html(localStorage.getItem("wysiwyg"));

    'click button[data-func="save"]': function (e,t) {

        console.log('Entra click');
        if(typeof(Storage) != "undefined") {
            $content = $('.editor').html();
            localStorage.setItem("wysiwyg", $content);
            $('.editor').append('<span class="saved"><i class="fa fa-check"></i></span>').fadeIn(function(){
                $(e.target).find('.saved').fadeOut(500);
            });
        }

    },

    'click button[data-func="clear"]' : function (e,t) {

        if(typeof(Storage) != "undefined") {
            $('.editor').html('');
            localStorage.removeItem("wysiwyg");
        }
    }



    
});

Template.crearRecetas.onCreated(function() {
    var instance = this;

    instance.fotos = new ReactiveVar('/img/coctel.png');

    instance.coco = new ReactiveVar('');

    instance.funcs = new ReactiveVar('');


});

Template.crearRecetas.onRendered(function() {
    $(".dropdown-button").dropdown();

    $('#textarea1').trigger('autoresize');
    if(typeof(Storage) != "undefined") {
        $('.editor').html(localStorage.getItem("wysiwyg"));
    }

});

Template.crearRecetas.onDestroyed(function() {
    //add your statement here
});






