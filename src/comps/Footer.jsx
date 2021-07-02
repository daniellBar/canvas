import React from "react";
import { busService } from "../services/eventBusService";

export function Footer() {

    function notifyClick(){
        busService.emit('logToConsole')
    }

    return (
        <footer className="footer" onClick={notifyClick}></footer>
    )
}