import './Contact.css';
import Heading from '../heading/Heading';

function Contact() {
  return (
    <div className="contact-container">
      <Heading title='Kontakt' description='Vi skapar kommunikation och digitala lösningar som gör skillnad. Fyll i om du vill bli kontaktad av oss via telefon eller e-post.' />
      <div className='contact-form-background'>
          <div className='contact-form'>
            <form className="pp-contact-form pp-form-stacked" data-template-id="5b6a2626567c6" data-template-node-id="5b6a2626659ce">
              <p className="pp-form-description"></p>
              <div className="pp-contact-form-inner pp-clearfix">
                <div className="pp-input-group pp-email">
                  <input type="email" name="pp-email" value="" placeholder="E-POSTADRESS" />
                </div>
                <div className="pp-input-group pp-phone">
                  <input type="tel" name="pp-phone" value="" placeholder="TELEFONNUMMER" />
                </div>
                <div className="pp-input-group pp-message">
                  <textarea name="pp-message" placeholder="ERT MEDDELANDE" />
                </div>
              </div>
              <div className="pp-input-group pp-checkbox">
                <input type="checkbox" name="pp-checkbox" id="pp-checkbox_5b6a2626659ce" value="1" />
                <label for="pp-checkbox_5b6a2626659ce">Jag godkänner att Webble sparar information om mig. <a href="">Läs mer här.</a></label>
              </div>
              <div className="contact-btn-container">
                <button className='btn'>Skicka</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default Contact;
