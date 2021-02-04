import './Navbar.css';
import logo from '../../img/branding/webble.svg';

function Navbar() {
  return (
    <div className='navbar'>
          <a href='#' className='pageHeader__logo-holder'>
            <img className='pageHeader__logo' src={logo} alt=''/>
          </a>
          <button type='button' className='menuButton'>
          <div className='menuButton__inner'>
              <span className='menuButton__label'>Meny</span>
              <span className='menuButton__icon'>
                  <span className='menuButton__icon-line'></span>
                  <span className='menuButton__icon-line'></span>
                  <span className='menuButton__icon-line'></span>
              </span>
          </div>
      </button>
    </div>
  );
}

export default Navbar;
