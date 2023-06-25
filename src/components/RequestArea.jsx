import React from "react";
import { Button, Alert } from "@mui/material";

export default (props) => {
    return (<div className="vertical-content">
        <Button variant='outlined' onClick={props.onClickFunc}>requisitar jogos</Button>
        {alertComponent(props.statusCode)}
    </div>)
}


function alertComponent(statusCode){
    if(statusCode == 0 || statusCode > 199 && statusCode < 299) return null
    if(statusCode > 499) return (<Alert severity="error">O servidor falhou em responder, tente recarregar a página</Alert>)
    else return (<Alert severity="error">O servidor não conseguirá responder por agora, tente voltar novamente mais tarde</Alert>)
}
