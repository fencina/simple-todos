Template.todoList.helpers({
    tasks: function(){
        if(Session.get("hideCompleted")){
            return Tasks.find({ checked : {$ne: true}}, {sort: {createdAt: -1}});
        }
        else{
            return Tasks.find({}, {sort: {createdAt: -1}});
        }

    },

    hideCompleted: function(){
        return Session.get("hideCompleted");
    },

    incompleteTasks: function () {
        return Tasks.find({ checked: {$ne: true} }).count();
    }
})

Template.todoList.events({
    "submit #nuevaTarea" : function(event){
        event.preventDefault();

        var text = event.target.text.value;

        Meteor.call("addTask", text);

        event.target.text.value = "";
    },
    "click #filtroTareasCompletas": function(event){
        Session.set("hideCompleted", event.target.checked);
    }

})

// Task
Template.task.helpers({
    isOwner: function(){
        return this.userId === Meteor.userId();
    }
})

Template.task.events({
    "click .delete" : function(){
        Meteor.call("deleteTask", this._id);
    },

    "click .toggle-checked" : function(){
        Meteor.call("setChecked", this._id, this.checked)
    },

    "click .toggle-private": function(){
        Meteor.call("setPermiso", this._id, !this.private)
    }

})





