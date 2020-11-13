import React,{useState} from "react";
import Form from "./components/Form";
import Order from './components/Order';
import Home from './components/Home'
import * as yup from "yup";
import schema from './components/Schema';
import {Route,Switch,Link} from 'react-router-dom';

const initialValues = {
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  c_bacon: false,
  i_sausage: false,
  chicken: false,
  onions: false,
  pepper: false,
  tomato: false,
  olives: false,
  special: ''
}

const initialErrors = {
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  c_bacon: false,
  i_sausage: false,
  chicken: false,
  onions: false,
  pepper: false,
  tomato: false,
  olives: false,
  special: ''
}
const App = () => {
const [formValues, setFormValues] = useState(initialValues);
const [errors, setErrors] = useState(initialErrors);

function update (name,value){
  yup.reach(schema,name)
  .validate(value)
  .then(()=>{
    setErrors({
      ...errors,
      [name]: "",
    });
  })
  .catch((err)=>{
    setErrors({
      ...errors,
      [name]: err.errors[0]
    })
  })
setFormValues({...formValues,[name]:value})
}

function submit () {
const newOrder = {
size: formValues.size,
sauce: formValues.sauce,
special: formValues.special,
tops:['pepperoni','sausage','c_bacon','i_sausage','chicken,onions','pepper','tomato','olives'].filter(top =>{
  return formValues[top];
})
}
setFormValues({...formValues,newOrder})
}
  return (
    <>
      <h1>Lambda Eats</h1>
      <div className = "navlinks">
      <Link to ="/">Home</Link>
      <Link to ='/help'>Help</Link>
      </div>

      <Switch>
      <Route path = "/order/details">
       <Order details = {formValues}/>
       </Route>
     <Route path = "/order">
     <Form values = {formValues}  errors = {errors} update = {update} submit = {submit}/>
     </Route>
       
       <Route path = '/'>
         <Home />
       </Route>
     </Switch>
    
    </>
  );
};
export default App;
