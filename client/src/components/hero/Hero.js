import './Hero.css';
import videoPoster from '../../video/hero-poster.jpg';
import video from '../../video/hero.mp4';

function Navbar() {
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };

  return (
    <section className='hero' id='hero'>
        <div className='video-overlay'></div>
        <div className='video-wrap'>
            <video autoPlay='autoplay' muted='muted' loop='loop' poster={videoPoster} className='bg-video'>
                <source src={video} type='video/mp4' />
            </video>
        </div>
        <div className='container'>
            <div className='hero-content text-center'>
                <div>
                    <h1 className='hero-heading'>Vi skapar
                      <span className="typewrite" data-period='2000' data-type='[ " snygga", " snabba", " responsiva" ]'>
                        <span class="wrap"></span>
                      </span>
                      <br />hemsidor för framtiden
                    </h1>
                    <p>
                      Vi kan inte se in i framtiden, men vi kan förbereda er för den. 
                      Med samlad kunskap och raka råd, gör vi det komplicerade enkelt åt er.
                    </p>
                    <button className='btn'>Läs mer</button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Navbar;
