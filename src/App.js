import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Github from './components/Github';


function App() {
  return (
    <div className="App">
      <Navbar />
       <Home />
       <About />
       <Projects />
       <Skills />
       <Github />
       <Contact />
       
    </div>
  );
}

export default App;
