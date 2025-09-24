import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="container mx-auto px-6 py-20">
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
