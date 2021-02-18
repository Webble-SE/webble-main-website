import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <div>
          <p>Lorem ipsum .....</p>
          <p>Lorem ipsum .....</p>
          <p>Lorem ipsum .....</p>
          <p>Lorem ipsum .....</p>
          <p>Lorem ipsum .....</p>
          <p>Lorem ipsum .....</p>
          <p>Lorem ipsum .....</p>
        </div>
      </main>

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
