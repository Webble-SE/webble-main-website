import './Footer.css';
import logo from '../../img/branding/webble.svg';

function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className='content-footer'>
        <img className='footer-logo' alt='footer-logo' src={logo} />

        <p>Vi arbetar med kunder över hela Sverige men har även uppdragsgivare i andra länder.</p>

        <div className='three-columns'>
          <div>
              <h3>Italien</h3>
              <div className='separator' />
              <a href=''>Webble.it</a>
              <a href=''>info@webble.it</a>
          </div>
          <div>
            <h3>Sverige</h3>
            <div className='separator' />
            <a href=''>Webble.se</a>
            <a href=''>+46 708 - 14 94 66</a>
            <a href=''>info@webble.se</a>
          </div>
          <div>
            <h3>Globalt</h3>
            <div className='separator' />
            <a href=''>Webble.io</a>
            <a href=''>info@webble.io</a>
          </div>
        </div>
      </div>
      
      <div className='credits-footer'>
        <p className='left-side-credits'>© Copyright {getCurrentYear()} - Webble</p>

        <p className='right-side-credits'>Vi skapar webblösningar med ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;
