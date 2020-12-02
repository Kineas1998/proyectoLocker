import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import QR_Code from '../Images/qr_example.jpg';

function QRCode(){
   return(
      <div className="container">

         <div className="prueba5 h-10 pl-5p pr-5p 
         d-flex justify-content-between align-items-center">
            <button className="h-60 buttonBack text-white">
               Regresar
            </button>
            
            <span className="buttonExpand h-60">
               <FontAwesomeIcon icon={faBars}/>
            </span>
         </div>

         <div className="prueba4 h-5 w-70 d-flex justify-content-around 
         align-items-center font-size-1-1 font-weight-bolder" 
         style={
            {"margin": "auto"}
         }>
            <span>30 / Agosto / 20</span>
            <span>Pedido 1</span>
         </div>

         <div className="prueba1 h-40 d-flex justify-content-center align-items-center">
            <img id="qr_Code" src={QR_Code}/>
         </div>

         <div className="prueba2 h-32 font-size-1-2 d-flex flex-column justify-content-around" style={{"padding" : "0 1em"}}>
            <p>
               Tú podrás recoger tu pedido con el siguiente QR, el número del 
               <span className="font-weight-bolder" style={
                  {"color": "#d32f2f"}
               }>
                  LOCKER es el 15.
               </span>
            </p>
            <p>
               Tiene un plazo de 24 horas para recogerlo, en caso de no ser asi tu pedido pasará a estado pendiente
            </p>
         </div>

         <div className="prueba3 h-13 w-55 ml-225p d-flex justify-content-between align-items-center">
            <span id="iconClock">
               <FontAwesomeIcon icon={faClock}/>
            </span>

            <button className="timer" id="availableButton">
               23:59:54
            </button>
         </div>

      </div>
   )
}

export default QRCode;