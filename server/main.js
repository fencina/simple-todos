Tasks = new Mongo.Collection("tasks");

Tasks.insert({ text :"asd"});

if(Meteor.isServer){
    Meteor.startup(function () {
    // code to run on server at startup
    });
}