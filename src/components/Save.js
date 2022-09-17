
import '../componentStyle/Save.css'
function Save(props){

    return(

        <>
            <button className="save" onClick={props.Click} value="save">SAVE</button>
        </>

    );
}
export default Save