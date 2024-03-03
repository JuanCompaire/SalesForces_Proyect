({
    myAction : function(component, event, helper) {

    },
    doInit : function(component, event, helper) {
        var randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
        component.set("v.randomNumber", randomNumber);
    }
})
