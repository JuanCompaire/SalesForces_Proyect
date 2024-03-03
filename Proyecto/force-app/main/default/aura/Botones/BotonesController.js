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
    
    solutionNumber : function(component,event,helper){
        console.log("llegaron los niñós")
        var solucion = component.get("v.Solucion");
        var item = event.getParam("randomNumber");
        component.set("v.Solucion",item)
        

    },
    Suma : function(component, event,helper){
        var sumando = parseInt(component.get("v.Sumando")) || 0;
        var sumaTotal = component.get("v.SumaTotal") || 0;
        sumaTotal += sumando;
        component.set("v.SumaTotal", sumaTotal);
        component.set("v.Sumando", "");    
        if((component.get("v.NumOperacionesRestantes")) >0){
            var numOpRes = parseInt(component.get("v.NumOperacionesRestantes"));
            numOpRes--;
            component.set("v.NumOperacionesRestantes",numOpRes)
        }  
        if((component.get("v.NumOperacionesRestantes")) ==0){
            if("v.SumaTotal" == "v.Solucion"){
                console.log("Has ganado")
            }
            else{
                console.log("Perdisté")
            }
        }
    }
})
