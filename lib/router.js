/**
 * Created by puesto1 on 3/8/16.
 */

Router.configure({
    layoutTemplate: 'mainLayout',
    waitOn: function () {
        return Meteor.subscribe('listaNotificaciones');
    }
});

Router.route('/nuevo-alumno', {
    name: 'nuevoAlumno',
    template: 'nuevoAlumno'
});

Router.route('/nuevo-profesor', {
    name: 'nuevoProfesor',
    template: 'nuevoProfesor'
});

Router.route('/nueva-empresa', {
    name: 'nuevaEmpresa',
    template: 'nuevaEmpresa'
});
Router.map(function(){
    
    this.route('dashboard', {
        path: '/dashboard',
        layoutTemplate: 'mainLayout'
    });
      
    this.route('login', {
        path: '/',
        layoutTemplate: 'authLayout'
    });

    this.route('fichaAlumno', {
        path: '/alumno/:_id/edit',
        layoutTemplate: 'mainLayout'
    });

    this.route('fichaProfesor', {
        path: '/profesor/:_id/edit',
        layoutTemplate: 'mainLayout'
    });
    
    this.route('listaAlumnos',{
        path: '/lista-alumnos',
        layoutTemplate: 'mainLayout'
    });
    this.route('listaBusqueda',{
        path: '/lista-busqueda',
        layoutTemplate: 'mainLayout'
    });

    this.route('listaEmpresas',{
        path: '/lista-empresas',
        layoutTemplate: 'mainLayout'
    });

    this.route('listaProfesores',{
        path: '/lista-profesores',
        layoutTemplate: 'mainLayout'
    });

    this.route('listaReservas', {
        path: '/lista-reservas',
        layoutTemplate: 'mainLayout'
    });
    
    this.route('listaNotificaciones', {
        path: '/lista-notificaciones',
        layoutTemplate: 'mainLayout'
    });
    this.route('notificacion', {
        path: '/notificacion/:_id/',
        layoutTemplate: 'mainLayout'
    });
    this.route('nuevaNotificacion', {
        path: '/nueva-notificacion/:_id',
        layoutTemplate: 'mainLayout'
    });
    
    this.route('nuevaReserva', {
        path: '/nueva-reserva',
        layoutTemplate: 'mainLayout'
    });
    this.route('nuevoCurso', {
        path: '/nuevo-curso',
        layoutTemplate: 'mainLayout'
    });
    
    this.route('curso',{
        path: '/curso/:_id/',
        layoutTemplate: 'mainLayout'
    });

    this.route('perfil',{
        path: '/perfil',
        layoutTemplate: 'mainLayout'
    });
    this.route('listaCursos',{
        path: '/lista-cursos',
        layoutTemplate: 'mainLayout'
    });
    this.route('perfilAlumno',{
        path: '/perfil-alumno',
        layoutTemplate: 'mainLayout'
    });

});

var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.redirect('login');
        }
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
        'listaAlumnos',
        'dashboard',
        'fichaAlumno',
        'nuevoAlumno'
       
    ]
});

Router.onBeforeAction(noCurrentUser, {only: 
    [
        'login'
    ]
});