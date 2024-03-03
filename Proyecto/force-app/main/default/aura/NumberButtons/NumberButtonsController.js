({
    myAction : function(component, event, helper) {

    },
    handleButtonClick : function(component, event, helper) {
        var buttonValue = event.getSource().get("v.label");
        var numberButtonClickEvent = component.getEvent("numberButtonClick");
        numberButtonClickEvent.setParams({ "number": buttonValue });
        numberButtonClickEvent.fire();
    }
})
