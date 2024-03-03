({
    myAction : function(component, event, helper) {

    },
    
    doInit : function(component, event, helper) {
        var randomNumber = Math.floor(Math.random() * 1000) + 1; 
        component.set("v.randomNumber", randomNumber);

        var evtData = $A.get("e.c:evtData");
        evtData.setParams({ "randomNumber": randomNumber });
        evtData.fire();
    
        
        console.log("Enviado el numero");
    }
})
