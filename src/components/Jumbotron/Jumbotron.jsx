import './Jumbotron.css'

function Jumbotron()
{
    return(
        <div className="jumbotron">
            <div>
                <div className="jumbotron-text">
                <h1>Want anything to be</h1>
                <h1>easy with <span className='tag'>LaslesVPN.</span></h1>
                </div>
            <p className='content'>Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> 
            </p><p className='content'>discover interesting features from us.</p>
            <div ><button type = "Button"   className='get-started'>Get Started</button></div>
            </div>
            <div>
             <img src='assets\illustration1.svg' className="jumbotron-image"/>
            </div>
        </div>
    )
}
export default Jumbotron;