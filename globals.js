Tasks = new Mongo.Collection("tasks");
Palabras = new Mongo.Collection("palabras");

Meteor.methods({
    // Todo List
    addTask: function(text){

        if(!Meteor.userId()){
            throw new Meteor.Error("not-authorized");
        }

        Tasks.insert({
            text: text,
            createdAt: new Date(),
            userId: Meteor.userId(),
            username: Meteor.user().username,
            private: false
        })
    },

    deleteTask: function(taskId){
        Tasks.remove(taskId);
    },

    setChecked: function(taskId,checked){
        Tasks.update(taskId, { $set: { checked: !checked} });
    },

    setPermiso: function(taskId, permiso){
        Tasks.update(taskId, {$set: {private: permiso}});
    },

    //Words
    removePalabraActual: function(palabraId){
        Palabras.remove(palabraId);
    }

})