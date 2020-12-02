import React from 'react';

function Header(props){
   return(
         <div className="h-15 w-90 ml-5p 
            d-flex flex-column justify-content-center 
            align-items-center" style={
               {"border-bottom":"3px solid #EC1C24"}
            }>
            <h2>{props.content}</h2>  
         </div>
   )
}

export default Header;