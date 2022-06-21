import logo from './logo.svg';
import './App.css';

import Landing from './Landing/Landing';
import Services from './Services/Services';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
