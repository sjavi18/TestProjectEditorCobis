//Entity: Cliente
    //Cliente. (Button) View: TestHeader
    //Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
    task.executeCommand.VA_VABUTTONWQWQIKI_894151 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.serverParameters.Cuenta = true;
        executeCommandEventArgs.commons.serverParameters.Cliente = true;
        
    var apiHeader = executeCommandEventArgs.commons.api.cobisPatterns.header;
        apiHeader.refreshActions(executeCommandEventArgs);
        
    };