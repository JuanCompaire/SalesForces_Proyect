({

    doInit: function(component,event,helper){
        var randomNumber = Math.floor(Math.random() * 4) + 2;
        component.set("v.NumOperacionesRestantes", randomNumber)
        component.set("v.SumaTotal",0)

    },

    handleButtonClick : function(component, event, helper) {
        var buttonValue = event.getSource().get("v.label");
        
        // Obtener y actualizar el valor actual del Sumando
        var sumando = component.get("v.Sumando") || "";
        sumando += buttonValue;
        component.set("v.Sumando", sumando);
    },  
    Suma : function(component, event,helper){
        var sumando = parseInt(component.get("v.Sumando")) || 0;
        var sumaTotal = component.get("v.SumaTotal") || 0;
        sumaTotal += sumando;
        component.set("v.SumaTotal", sumaTotal);
        component.set("v.Sumando", "");      
    }
})
