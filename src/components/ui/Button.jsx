import '../../styles/button.css'
function Button (props){
   return <button className={`${props.class} btnc`} {...props}>
    {props.children}
   </button>;
}
 
export default Button