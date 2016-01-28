Meteor.subscribe("tasks");
Meteor.subscribe("palabras");

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});