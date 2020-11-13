import React from "react";
export default function Order(props){
 const {details} = props;
 return(
     <div>
         <img src="https://t4.ftcdn.net/jpg/02/21/32/47/360_F_221324789_lbhFTTQ9FN72yMVMHiozQ3xEtrEiKqRw.jpg" alt = "pizza"></img>
         <h3>You have ordered:</h3>
         <p>{details.size}cm size Pizza</p>
         <p>With {details.sauce} sauce</p>
         <div>Toppings:
         {/* <ul>{details.tops.map((top,idx) => {
            return <li key ="idx">top</li>
         })} </ul> */}
         </div>
     </div>
 )

}