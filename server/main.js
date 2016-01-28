Meteor.startup(function () {
// code to run on server at startup

    Meteor.publish("tasks", function () {
        return Tasks.find({
            $or: [
                { private: {$ne:true} },
                { userId: this.userId }
            ]
        });
    })

    Meteor.publish("palabras", function(){
        return Palabras.find({});
    });

});
