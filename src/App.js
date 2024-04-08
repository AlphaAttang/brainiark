import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
  
    </div>
  );
}

export default App;
