import logo from './logo.svg';
import './App.css';

import Landing from './Landing/Landing';
import Services from './Services/Services';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Services/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
