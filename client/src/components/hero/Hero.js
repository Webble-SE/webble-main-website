import './Hero.css';
import logo from '../../img/branding/webble.svg';
import videoPoster from '../../video/hero-poster.jpg';
import video from '../../video/hero.mp4';

function Navbar() {
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
                    <h1>En formstark reklam- och webbyrå</h1>
                    <p>
                      Kommunikation på papper, bioduk, skärm och i mobilen. Vi tar fram kreativa lösningar för 
                      hur dina mål ska uppnås och tänker på helheten. Välkommen till Webble.
                    </p>
                    <button className='btn'>Läs mer</button>
                </div>
            </div>
        </div>
    </section>
  );
}

{/* <video playsinline autoplay='true' muted loop poster={videoPoster} id='bgvid'>
<source src={video} type='video/mp4' />
</video>

<div className='viewport-header'>
<h1>En formstark reklam- och webbyrå
</h1>

<p>
Kommunikation på papper, bioduk, skärm och i mobilen. Vi tar fram kreativa lösningar för 
hur dina mål ska uppnås och tänker på helheten. Välkommen till Webble.
</p>

<button>Läs mer</button>
</div> */}

export default Navbar;
