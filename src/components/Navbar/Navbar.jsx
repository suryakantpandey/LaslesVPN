import './Navbar.css'
function Navbar()
{
     return (
         <div className="navp">
                <div > 
                    <a href='#'>
                        <img src="src\assets\logo11.svg"  className="logo"/>
                    </a>
                </div>
                <div>
                    <ul className='navbar1'>
                        <li className ='nav-item'><a    className='nav-link' href='#'>About</a></li>
                        <li className ='nav-item'><a    className='nav-link' href='#'>Features</a></li>
                        <li className = 'nav-item'><a  className='nav-link' href='#'>Pricing</a></li>
                        <li className = 'nav-item'><a  className='nav-link' href='#'>Testimonials</a></li>
                        <li className = 'nav-item'><a  className='nav-link' href='#'>Help</a></li>
                    </ul>
                </div>
                <div>
                <div class="header-right">
                        <button className="sign-in-btn" href="#signin">Sign In</button>
                        <button className="sign-up-btn" href="#signup">Sign Up</button>
                </div>
                </div>
            <div>

            </div>
         </div>
     )
}
export default Navbar;
