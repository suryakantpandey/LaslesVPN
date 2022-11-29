import './Acheivement.css';
function Acheivement()
{
   return(
     <div className='acheive'>
        <div className='box-a'>
            <p className='para'>
            <img src='src\assets\usericon.svg' className='acheive-image'/>
            <span className='bb'>
            <b className='bb'>90+</b>
            <p className='bbb'> Users</p>
            </span>
            </p>
        </div>
        <div className='box-a'>
            <p className='para'>
            <img src='src\assets\location.svg' className='acheive-image'/>
            <span className='bb'>
            <b className='bb'>30+</b>
            <p className='bbb'>Locations</p>
            </span>
            </p>
        </div>
        <div className='box-a box-wb'>
            <p className='para'>
            <img src='src\assets\servericon.svg' className='acheive-image'/>
            <span className='bb'>
            <b className='bb'>50+</b>
            <p className='bbb'>Servers</p>
            </span>
            </p>
        </div>
     </div>
   )
}
export default Acheivement;