import logo from './logo.svg';
import './App.css';

import Landing from './Landing/Landing';
import Services from './Services/Services';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';
import Management from './Management/Management';
import About from './About/About';
import Process from './Process/Process';


function App() {

  return (
    <div className="App">
        <Landing/>
        <Services/>
        <Management/>
        <About/>
        <Process/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
