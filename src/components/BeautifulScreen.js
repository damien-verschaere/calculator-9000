import '../componentStyle/BeautifulScreen.css'
function BeautifulScreen(props) {
    return(
    <div className='generalScreen'>
        <section className="entrerUser">
            <h1>{props.operation}</h1>

        </section>
        
    </div>
  
    );
}
export default BeautifulScreen;