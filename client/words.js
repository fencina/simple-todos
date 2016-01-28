Meteor.startup(function(){
    Session.set("palabras", Palabras.find().fetch());
})


Template.words.helpers({
    palabras: function(){
        return Palabras.find({});
    }
    ,
    palabraActual: function(){
        var palabras = Session.get("palabras");

        if(palabras.length == 0 )
            return ""

        var palabraActual = palabras[0];
        Session.set("palabraActual", palabraActual.text);

        return palabraActual.text;
    }
})

Template.words.events({
    'keyup input': function(event){
        if(Meteor.myFunctions.checkWord(Session.get("palabraActual"), event.target.value))
            alert("correcto");
    }
})