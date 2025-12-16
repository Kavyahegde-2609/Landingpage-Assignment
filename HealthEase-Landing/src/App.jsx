import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import About from "./components/About";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Stats />
      <About />
      <Footer />
    </div>
  );
}

export default App;