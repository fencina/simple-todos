if (Meteor.isClient) {

    Template.body.helpers({
        tasks: function(){
            return Tasks.find({});
        }
    })
}