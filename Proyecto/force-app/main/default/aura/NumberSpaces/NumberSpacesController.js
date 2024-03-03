({
    myAction : function(component, event, helper) {

    },
    doInit : function(component, event, helper) {
        var randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
        component.set("v.randomNumber", randomNumber);
    },

    handleNumberButtonClick : function(component, event, helper) {
        var number = event.getParam("number");
        var numbers = component.get("v.numbers");
        numbers.push(number);
        component.set("v.numbers", numbers);

        var sum = numbers.reduce(function(acc, curr) {
            return acc + parseInt(curr);
        }, 0);
        component.set("v.sum", sum);
    }
})
