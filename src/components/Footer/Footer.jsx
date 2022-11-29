import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <img src='assets/logo11.svg'/>
                <p className='footer-content'><b>LaslesVPN</b> is a private virtual network that<br/>has unique features and has high security.</p>
            </div>
            <div>
                <img src='assets/facebook.svg' className='logo'/>
                <img src='assets/twitter.svg' className='logo'/>
                <img src='assets/instagram.svg' className='logo'/>
            </div>
            <div>
                <p className='copyright'>©2020<b>LaslesVPN</b></p>
            </div>
        </footer>
    );

}
export default Footer;