Router.configure({
    layoutTemplate: "layout"
});

Router.route('/',{
    template: 'home',
    name: 'home'
});

Router.route('/words');

Router.route('/todoList');
