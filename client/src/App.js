import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
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

      <Footer />
    </div>
  );
}

export default App;
