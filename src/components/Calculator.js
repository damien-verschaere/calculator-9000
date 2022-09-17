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


    // FIN VARIABLE ET CONSTANTE----------------------------------------------------------------------------


    // HANDLEFUNCTION---------------------------------------------------------------------------------------
    function Click(props) {
        // console.log(e.target.value)
        let event = props.target.value
        // console.log(event)
        switch (event) {
            case "=":
                // console.log("je suis dans le egal")
                setOperation(operation + event)
                setsql(operation)
                //  EVAL PEUT ETRE DANGEREUX INJECTIONS POSSIBLES MAIS A CE NIVEAU DE PROJET SONT UTILISATION ME SEMBLE BONNE 
                let res = eval(operation)
                setOperation(res)
                if (res > 9000) {
                    setResultat(res)
                }
                break;

            case 'DEL':
                setOperation('')
                setResultat(0)
                break;
          
            case "save":
                // console.log("je passse dans le save")
                let data = sql
                let result = eval(operation)
                console.log("je passe dans le save")
                let formdata = new FormData()
                formdata.append('calcul', encodeURIComponent(data))
                formdata.append('result', encodeURIComponent(result))
                fetch("http://localhost:80/calculator-9000/src/php/Calcul.php?envoi=1", {

                    // MODE NO CORS CAR ERREUR DE CORS QUI BLOQUE LA REQUETE  
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
                <thead>
                    <tr  >
                        <th style={{color:"white"}}>mes calculs</th>
                        <th style={{color:"white"}}>mes resultats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <AfficheCalcul />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Calculator