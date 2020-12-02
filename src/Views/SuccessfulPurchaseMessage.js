import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function SuccessfulPurchaseMessage(){
   return(
      <div className="container">
         
         <div className="h-10 pl-5p pr-5p 
         d-flex justify-content-between align-items-center">
            <a className="h-60">
               <button className="buttonBack h-100 text-white">
                  Regresar
               </button>
            </a>
            <span className="buttonExpand h-60">
               <FontAwesomeIcon icon={faBars}/>
            </span>
         </div>

         <div className="h-5 w-65 d-flex 
         justify-content-around align-items-center font-size-1-2" style={
            {"margin" : "auto"}
         }>
            <span>24 / Agosto / 20</span>
            <span>Pedido 1</span>
         </div>

         <div className="prueba1 h-15 d-flex justify-content-center
         align-items-center" style={
            {"font-size" : "1.2em"}
         }>
            Tu pedido ha sido generado satisfactoriamente
         </div>

         <div className="h-50 d-flex justify-content-center align-items-center font-size-13" style={
            {"color" : "#4caf50"}
            }>
            <FontAwesomeIcon icon={faCheck}/>
         </div>

         <div className="h-20 d-flex justify-content-center
         align-items-center" style={{"font-size": "1.2em"}}>
            Espera a que te enviemos tu código QR para que puedas pasar por tu pedido
         </div>
      </div>
   )
}

export default SuccessfulPurchaseMessage;