import '../componentStyle/GreatOperationButton.css'
function GreatOperationButton(props){
    const operande = ["+","-","*","/"]
 
    return(
        <div className="divOperande">{operande.map((operande,index)=><button onClick={props.Click} id={operande} key={index} value={operande}className="buttonOperande">{operande}</button>)}</div>
    )
}
export default GreatOperationButton