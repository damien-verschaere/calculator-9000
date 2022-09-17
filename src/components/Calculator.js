import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from './BeautifulScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import Thetitle from "./Thetitle";
import ItsNineThousand from './ItsNineThousand';
import Save from './Save'
import AfficheCalcul from './AfficheCalcul'
import '../componentStyle/Calculator.css'
import { useState } from "react";

function Calculator() {


    // VARIABLE ET CONSTANTE -------------------------------------------------------------------------------
    const [operation, setOperation] = useState('')
    const [resultat, setResultat] = useState('')
    const [sql, setsql] = useState('')
    // const [nineThousand,setNineThousand]=useState('')

    // FIN VARIABLE ET CONSTANTE----------------------------------------------------------------------------


    // HANDLEFUNCTION---------------------------------------------------------------------------------------
    function Click(props) {
        // console.log(e.target.value)
        let event = props.target.value
        // console.log(event)
        switch (event) {
            case "=":
                console.log("je suis dans le egal")
                setOperation(operation + event)
                setsql(operation)
                let test = eval(operation)
                setOperation(test)
                if (test > 9000) {
                    setResultat(test)
                    // setOperation('') 

                }
                break;
            case "save":
                let data = sql
                let result = eval(operation)
                console.log("je passe dans le save")
                let formdata = new FormData()
                formdata.append('calcul', encodeURIComponent(data))
                formdata.append('result', encodeURIComponent(result))
                fetch("http://localhost:80/calculator-9000/src/php/Calcul.php?envoi=1", {
                    mode: 'no-cors',
                    method: "POST",
                    body: formdata
                }).then(response => response.json).then(resp => console.log(resp))
                break;

            default:
                setOperation(operation + event)
                break;
        }
    }

    // FIN HANDLE FUNCTION--------------------------------------------------------------------------------
    return (
        <div className="globalDiv">

            <Thetitle />
            <ItsNineThousand resultat={resultat} />
            <BeautifulScreen operation={operation} />
            <div className="test">
                <AmazingNumberButton Click={Click} />
                <GreatOperationButton Click={Click} />
            </div>
            <div className="divButton">
            <MagnificientEqualButton Click={Click} />
            <Save Click={Click} />
            </div>
            
            <table className="tab" >
   
                <tr>
                    <AfficheCalcul />
                </tr>
            </table>
        </div>
    )
}
export default Calculator