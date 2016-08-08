/**
 * Created by puesto1 on 3/8/16.
 */

Template.mainLayout.onCreated(function () {

    var instance = this;

    instance.ancho = new ReactiveVar($( window ).width());

});


Template.mainLayout.onRendered(function () {

    var instance = this;

    instance.autorun(function () {


        if(Meteor.Device.isPhone() || Meteor.Device.isTablet()){
            $('.button-collapse').sideNav({
                closeOnClick: true,
                'edge': 'left'
            });
        }else{
            $('.button-collapse').sideNav({
                'edge': 'left'
            });
        }



    });
    
});