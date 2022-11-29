import './Plans.css'

function Plans() {
    return (

        <div className='plans'>
            <h1 className='heading'>Choose Your Plan</h1>
            <div><p className='content'>Let's choose the package that is best for you and explore it happily and <br />cheerfully.</p></div>
            <div className='big-box'>
                <div className='plan-box'>
                    <div className="box">
                        <img src='assets/box.svg' className=' box-image' />
                        <br/>
                        <div className='box-text'>
                        <h2 className='box-heading'>Free Plan</h2>
                        <p className='box-content'><br/> <img src='assets/ticks.svg' className='tick' />&nbsp;Unlimited Bandwidth</p>
                            <p className='box-content'><br/> <img src='assets/ticks.svg' className='tick' />&nbsp;Encrypted Connection</p>
                            <p className='box-content'><br/> <img src='assets/ticks.svg' className='tick' />&nbsp;No Traffic Logs</p>
                            <p className='box-content'><br/> <img src='assets/ticks.svg' className='tick' />&nbsp;Works On all Device</p>
                            <p className='box-content'><br/> &nbsp;</p>
                            <p className='box-content'><br/> &nbsp;</p>
                            <p className='box-content'><br/> &nbsp;</p>
                        </div>
                        <br/>
                        <h2 className='box-heading'>Free</h2>
                        <div>
                            <button type='Button' className='button-box'>Select</button>
                        </div>
                        
                    </div>
                </div>
                <div className='plan-box'>
                    <div className="box">
                        <img src=' assets/box.svg' className=' box-image' />
                        <br />
                        <div className='box-text'>
                            <h2 className='box-heading'>Standard Plan</h2>
                            <p className='box-content'><br/> <img src='assets/ticks.svg' className='tick' />&nbsp;Unlimited Bandwidth</p>
                            <p className='box-content'><br/> <img src='assets/ticks.svg' className='tick' />&nbsp;Encrypted Connection</p>
                            <p className='box-content'><br/> <img src='assets/ticks.svg' className='tick' />&nbsp;No Traffic Logs</p>
                            <p className='box-content'><br/> <img src='assets/ticks.svg' className='tick' />&nbsp;Works On all Device</p>
                            <p className='box-content'><br/> <img src='assets/ticks.svg' className='tick' />&nbsp;Connect Anywhere</p>
                            <p className='box-content'><br/> &nbsp;</p>
                            <p className='box-content'><br/> &nbsp;</p>
                        </div>
                        <br/>
                        <h2 className='box-heading'><b>$9</b><span className='plan-heading'> / mo</span></h2>
                        <div>
                            <button type='Button' className='button-box'>Select</button>
                        </div>
                    </div>
                </div>
                <div className='plan-box'>
                    <div className="box">
                        <img src=' assets/box.svg' className=' box-image' />
                        <br />
                        <div className='box-text'>
                            <h2 className='box-heading'>Premium Plan</h2>
                            <p className='box-content'><br/> <img src=' assets/ticks.svg' className='tick' />&nbsp;Unlimited Bandwidth</p>
                            <p className='box-content'><br/> <img src=' assets/ticks.svg' className='tick' />&nbsp;Encrypted Connection</p>
                            <p className='box-content'><br/> <img src=' assets/ticks.svg' className='tick' />&nbsp;No Traffic Logs</p>
                            <p className='box-content'><br/> <img src=' assets/ticks.svg' className='tick' />&nbsp;Works On all Device</p>
                            <p className='box-content'><br/> <img src=' assets/ticks.svg' className='tick' />&nbsp;Connect Anywhere</p>
                            <p className='box-content'><br/> <img src=' assets/ticks.svg' className='tick' /> &nbsp;Get New Features</p>
                            <p className='box-content'><br/> &nbsp;</p>
                        </div>
                        <br/>
                        <h2 className='box-heading'><b>$12</b><span className='plan-heading'> / mo</span></h2>
                        <div>
                            <button type='Button' className='button-box'>Select</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Plans