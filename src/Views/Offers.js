import React from 'react';
import Footer from '../Components/Footer';
import promo from '../Images/promo.png';
import left from '../Images/left.svg';
import right from '../Images/right.svg';


function Offers(){
   return(
      <div class="container">
         <div className="h-15 w-90 ml-5p 
         d-flex flex-column justify-content-center align-items-center" 
         style={
            {"border-bottom": "3px solid #EC1C24"}
         }>
            <h2>Smart Lockers</h2>
         </div>
      
         <div className="h-70">
            <div className="carousel">
               <button className="carousel_button left">
                  <img src={left} alt=""/>
               </button>
      
               <div className="carousel_track_container">
                  <ul className="carousel_track">
                     <li className="carousel_slide current_slide">
                        <img className="h-100" src={promo} alt="not available"/>
                     </li>
                  </ul>
               </div>
      
               <button className="carousel_button right">
                  <img src={right} alt=""/>
               </button>
            </div>
         </div>
   
         <Footer content="Hacer pedido"/>
      </div>
   )
}

export default Offers;