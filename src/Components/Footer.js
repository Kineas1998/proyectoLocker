import React from 'react';

function Footer(props){
   return(
      <div className="h-15 h-15 w-90 ml-5p d-flex 
      justify-content-center align-items-center" style={
         {"border-top":"3px solid #EC1C24"}
      }>
            <a style={{"text-decoration" : "none;"}} href="Registration.html">
               <button style={{"padding" : ".1em 1em"}}>
                  {props.content}
               </button>
            </a>
      </div>
   )
}

export default Footer;