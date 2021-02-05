import './Navbar.css';
import logo from '../../img/branding/webble.svg';

function Navbar() {
  function expandMenuIcon () {
    const lastMenuLine = document.querySelector('.menu-button-icon-line:nth-child(3)');
    lastMenuLine.style.width = '100%';
  }

  function shrinkMenuIcon () {
    const lastMenuLine = document.querySelector('.menu-button-icon-line:nth-child(3)');
    lastMenuLine.style.width = '50%';
  }

  return (
    <div className='navbar'>
          <a href='#' className='navbar-logo-holder'>
            <img className='navbar-logo' src={logo} alt=''/>
          </a>
          <button onMouseOver={expandMenuIcon} onMouseOut={shrinkMenuIcon} type='button' className='menu-button'>
          <div className='menu-button-inner'>
              <span className='menu-button-label'>Meny</span>
              <span className='menu-button-icon'>
                  <span className='menu-button-icon-line'></span>
                  <span className='menu-button-icon-line'></span>
                  <span className='menu-button-icon-line'></span>
              </span>
          </div>
      </button>
    </div>
  );
}

export default Navbar;
