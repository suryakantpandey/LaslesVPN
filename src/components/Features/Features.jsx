import './Features.css'

function Features()
{
     return(
            <div className='feature'>
                <img src='src/assets/illustration2.svg' className='feature-image'/>
                <div className='feature-text'>
                    <div >
                       <h1>We Provide Many <br/>Features You Can Use</h1>
                    </div>
                    <p className='feature-content'>You can explore the features that we provide with fun and<br/><br/>have their own functions each feature.</p>
                    <br/>
                    <div className='feature-points'><img src='src/assets/tick.svg'/>&nbsp;<span className='feature-content'> Powerful online protection.</span></div>
                    <br/>
                    <div className='feature-points'><img src='src/assets/tick.svg'/>&nbsp;<span className='feature-content'> Internet without Borders.</span></div>
                    <br/>
                    <div className='feature-points'><img src='src/assets/tick.svg'/>&nbsp;<span className='feature-content'> SuperCharged VPN.</span></div>
                    <br/>
                    <div className='feature-points'><img src='src/assets/tick.svg'/>&nbsp;<span className='feature-content'> No specific time limits</span></div>
                </div>
            </div>
            
     )
}
export default Features;