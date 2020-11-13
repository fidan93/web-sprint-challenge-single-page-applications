import * as yup from 'yup';
 
export default yup.object().shape({
   size: yup
   .string()
   .oneOf(['14','18','20','24'],"Size is required"),
   sauce: yup
   .string()
   .oneOf([ 
    "Original Red",
    "Garlic ranch",
    "BBQ sauce",
    "Spinach Alfredo"],"Pick the sauce please"),
   pepperoni:yup
   .boolean()
   .oneOf([true]),
    sausage:yup
    .boolean()
    .oneOf([true]),
    c_bacon:yup
    .boolean()
    .oneOf([true]),
    i_sausage:yup
    .boolean()
    .oneOf([true]),
    chicken:yup
    .boolean()
    .oneOf([true]),
    onions:yup
    .boolean()
    .oneOf([true]),
    pepper:yup
    .boolean()
    .oneOf([true]),
    tomato:yup
    .boolean()
    .oneOf([true]),
    olives: yup
    .boolean()
    .oneOf([true]),
    special: yup.string()

})