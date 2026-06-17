import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Craftsmanship from "./components/Craftsmanship";
import Materials from "./components/Materials";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Philosophy />
      <Craftsmanship />
      <Materials />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
