({
    myAction : function(component, event, helper) {

    },
    
    doInit : function(component, event, helper) {
        var randomNumber = Math.floor(Math.random() * 1000) + 1; 
        component.set("v.randomNumber", randomNumber);
    
        var evt = $A.get("e.c:evtData");
        var obj = {
            "number" : randomNumber
        }
        
        evt.setParams(obj);
        evt.fire();
        console.log("Enviado el numero");
    }
})
