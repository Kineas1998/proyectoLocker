import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function QRCode(){
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

         {/* <div className="h-5 w-45 d-flex 
         justify-content-around align-items-center font-size-1-1 font-weight-bolder" 
         style={
            {"margin": "auto"}
            }>
            <span>Orden:</span>
            <span>0127970454</span>
         </div> */}

      {/* <div className="h-5 w-65 font-size-1-2 d-flex justify-content-around align-items-center" style={{"margin": "auto"}}>
         <span>30 / Agosto / 20</span>
         <span>Pedido 1</span>
      </div> */}

      {/* <div className="h-40 d-flex align-items-center justify-content-center" id="qr_Code_Container">
            <img src="images/qr_example.jpg" style={
               {"max-width": "100%"},
               {"max-height": "100%"}
            }>
         <div id="qr_Code"></div>
      </div> */}

      {/* <div className="h-32 font-size-1-2 d-flex flex-column justify-content-around" style={{"padding" : "0 1em"}}>
         <p>
            Tú podrás recoger tu pedido con el siguiente QR, el número del 
            <span style="font-weight: 600; 
                         color: #d32f2f;">
               LOCKER es el 15.
            </span>
         </p>
         <p>
            Tiene un plazo de 24 horas para recogerlo, en caso de no ser asi tu pedido pasará a estado pendiente
         </p>
      </div> */}

      {/* <div className="h-13 w-55 ml-225p d-flex justify-content-between align-items-center">
         <i id="iconClock" style="font-size: 20px;
                                  font-weight: 800;" class="far fa-clock">
         </i>
         
            <button style="font-size: 20px;
                           padding: .4em 1em;
                           background-color:#c8e6c9;
                           border: 2.5px solid #a5d6a7;
                           color: white;" id="availableButton">
               23:59:54
            </button>
      </div> */}

      </div>
   )
}

export default QRCode;