import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Materials from "./components/Materials";
import Craftsmanship from "./components/Craftsmanship";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Philosophy />
      <Materials />
      <Craftsmanship />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
