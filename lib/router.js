/**
 * Created by puesto1 on 3/8/16.
 */

Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/dashboard', {
    name: 'dashboard',
    template: 'dashboard'
});

Router.route('/nuevo-alumno', {
    name: 'nuevoAlumno',
    template: 'nuevoAlumno'
});

Router.map(function(){
    
    this.route('login', {
        path: '/',
        layoutTemplate: 'authLayout'
    });

    this.route('fichaAlumno', {
        path: '/alumno/:_id/edit',
        layoutTemplate: 'mainLayout'
    });
    
    this.route('listaAlumnos',{
        path: '/lista-alumnos',
        layoutTemplate: 'mainLayout'
    });

    this.route('nuevaReserva', {
        path: '/nueva-reserva',
        layoutTemplate: 'mainLayout'
    });

    this.route('perfil',{
        path: '/perfil',
        layoutTemplate: 'mainLayout'
    });

});

var requireLogin = function() {
    if (!(Meteor.userId())) {
        this.redirect('login');
    } else {
        this.next();
    }
};

var noCurrentUser = function(){
    if(!Meteor.user()){
        this.next();
    }else {
        this.redirect('dashboard');
    }
};

Router.onBeforeAction(requireLogin, {only:
    [
        'dashboard',
        'fichaAlumno',
        'listaAlumnos',
        'nuevoAlumno'
    ]
});

//Router.onBeforeAction(noCurrentUser, {only: ['login']});