import React from 'react';
import {useHistory} from 'react-router-dom';
export default function Home (){
   const history = useHistory();
   return (
       <div className="home">
    <img src='https://i2.wp.com/www.windycitypizza.com/wp-content/uploads/sites/38/2019/09/deep-dish-pizza-san-mateo.jpg?resize=672%2C372&ssl=1' alt="pizza"/>
    <button onClick={()=>history.push('/order')}>Order Pizza</button>
       </div>
   )
}