
import React, { useEffect, useState } from 'react'

function AfficheCalcul(props) {
    const [test, setTest] = useState([])
    // let teste = []
    useEffect(() => {
        fetch("http://localhost/calculator-9000/src/php/Calcul.php", {

        })
            .then(res => res.json())
            .then((result) => setTest(result))
    }
        ,)

    return (
        <React.Fragment>
            <td>
            {
            test.map((value, index) => <p colSpan={4}style={{border:'white solid 1px',width:'200px',margin:'2%',color:'white'}}className='test' key={index}>{value.resultat}</p>,
            
            )}
           </td>
           <td>
           {test.map((value, index) => <p style={{border:'white solid 1px',width:'200px',margin:'2%',color:'white'}} colSpan={10} className='test' key={index}>{value.operation}</p>)}
           </td>
        </React.Fragment>
        )
}




export default AfficheCalcul