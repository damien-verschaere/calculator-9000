import '../componentStyle/MagnificientEqualButton.css';
function MagnificientEqualButton(props){
    return(
        <button className="buttonEgal" onClick={props.Click} value="=" >=</button>
    )
}
export default MagnificientEqualButton