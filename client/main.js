Template.mainLayout.onCreated(function () {

  var instance = this;

  instance.ancho = new ReactiveVar($( window ).width());

});


Template.mainLayout.onRendered(function () {

  var instance = this;

  instance.autorun(function () {

    if(instance.ancho.get() > 992){
      $('.button-collapse').sideNav({
        'edge': 'left'
      });
    }else if(instance.ancho.get() < 992){
      $('.button-collapse').sideNav({
        closeOnClick: true,
        'edge': 'left'
      });
    }

  });

});

