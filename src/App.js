import Navbar from "./Components/Navbar/Navbar.jsx";
import {  } from "./App.css";
import Intro from "./Components/Intro/Intro.jsx";
import Services from "./Components/Services/services.jsx"
import Experience from "./Components/Experience/Experience.jsx";
import Works  from "./Components/Works/works.jsx"
import Contact from "./Components/Contact/Contact.jsx";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
