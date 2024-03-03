({
    myAction : function(component, event, helper) {

    },
    doInit : function(component, event, helper) {
        var randomNumber = Math.floor(Math.random() * 4) + 2; // Genera un número aleatorio entre 2 y 5
        component.set("v.sumCount", randomNumber);
    },

    handleNumberButtonClick : function(component, event, helper) {
        var number = event.getParam("number");
        var numbers = component.get("v.numbers");
        if(numbers.length < component.get("v.spacesCount")){
            numbers.push(number);
            component.set("v.numbers", numbers);
        }
    },

    handleSumButtonClick : function(component, event, helper) {
        var numbers = component.get("v.numbers");
        var sum = numbers.reduce(function(acc, curr) {
            return acc + parseInt(curr);
        }, 0);
        component.set("v.sum", sum);
        var sumCount = component.get("v.sumCount");
        sumCount--;
        component.set("v.sumCount", sumCount);
        if (sumCount == 0) {
            var sumButtonClickEvent = component.getEvent("sumButtonClick");
            sumButtonClickEvent.setParams({ "sum": sum });
            sumButtonClickEvent.fire();
        }
    }
})
