Tasks = new Mongo.Collection("tasks");

Meteor.methods({
    addTask: function(text){

        if(!Meteor.userId()){
            throw new Meteor.Error("not-authorized");
        }

        Tasks.insert({
            text: text,
            createdAt: new Date(),
            userId: Meteor.userId(),
            username: Meteor.user().username
        })
    },

    deleteTask: function(taskId){
        Tasks.remove(taskId);
    },

    setChecked: function(taskId,checked){
        Tasks.update(taskId, { $set: { checked: !checked} });
    }

})