import React from 'react';
import {useHistory} from "react-router-dom";
export default function Form (props){

const {values,errors, update, submit} = props;
const history = useHistory();

 const change = (evt)=>{
    const {name,value,checked,type} = evt.target;
     const newValue = type === 'checkbox'? checked : value;
     update(name,newValue);
 }
 const onSubmit = (evt)=>{
     evt.preventDefault();
     submit();
 }
    return (
        <div>
        <div><h1>Build your own pizza</h1></div>
        <form onSubmit={onSubmit}>
            <h3>Build your own pizza</h3>
            <div>
            <h4>Choice of size</h4>
            <p>{errors.size}</p>
            <label>
            <select name='size' value={values.size} onChange={change}>

                <option>-Select size-</option>
                <option value="14">14sm</option>
                <option value="18">18sm</option>
                <option value="20">20sm</option>
                <option value="24">24sm</option>
            </select>
           </label>
            </div>
            <div>
           <h4>Choice of sauce</h4>
            <p>{errors.sauce}</p>
            <label>
              Original Red
              <input type="radio" name="sauce" checked={values.sauce === "Original Red"} onChange={change} value ='Original Red'></input>
            </label>
            <label>
                Garlic Ranch
              <input type="radio" name="sauce" checked={values.sauce === "Garlic ranch"} onChange={change} value ='Garlic ranch'></input>
            </label>  
            <label>
                 BBQ sauce
              <input type="radio" name="sauce" checked={values.sauce === "BBQ sauce"} onChange={change} value ='BBQ sauce'></input>
            </label>
            <label>
                Spinach Alfredo
              <input type="radio" name="sauce" checked={values.sauce === "Spinach Alfredo"} onChange={change} value ='Spinach Alfredo'></input>
            </label>
            </div>
            <div>
                <h4>Add topings</h4>
                <p>{errors.top}</p>
                <label>
                Pepperoni
               <input type = "checkbox" name="pepperoni" checked={values.pepperoni} onChange={change}/>
               </label>
               <label>
                Sausage
               <input type = "checkbox" name="sausage" checked={values.sausage} onChange={change}/>
               </label>
               <label>
                Canadian Bacon
               <input type = "checkbox" name="c_bacon" checked={values.c_bacon} onChange={change}/>
               </label>
               <label>
                Spicy Italian Sausage
               <input type = "checkbox" name="i_sausage" checked={values.i_sausage} onChange={change}/>
               </label>
               <label>
                Grilled chicken
               <input type = "checkbox" name="chicken" checked={values.chicken} onChange={change}/>
               </label>
               <label>
                Onions
               <input type = "checkbox" name="onions" checked={values.onions} onChange={change}/>
               </label>
               <label>
                Green pepper
               <input type = "checkbox" name="pepper" checked={values.pepper} onChange={change}/>
               </label>
               <label>
                Diced tomatoes
               <input type = "checkbox" name="tomato" checked={values.tomato} onChange={change}/>
               </label>
               <label>
                Black olives
               <input type = "checkbox" name="olives" checked={values.olives} onChange={change}/>
               </label>
               </div>
               <div>
           <label>
               Special instructions
               <input type='text' name = "special" value={values.special} onChange={change}></input>
           </label>
           </div>
           <div><button onClick = {()=> history.push('order/details')}>Add to order</button></div>
        </form>
        </div>
    )
     
    
}