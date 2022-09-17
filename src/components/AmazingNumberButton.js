import '../componentStyle/AmazingNumberButton.css'
// import useState from "react"
function AmazingNumberButton(props) {
    
    const number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,0 ,'.','DEL']
    
  
    return (
          <div className="chiffre">{number.map((number,index) => <button value={number}  onClick={props.Click} key={index} className="buttonChiffre">{number}</button>)}</div>
    );




}
export default AmazingNumberButton