import logo from './logo.svg';
import './App.css';

import Landing from './Landing/Landing';
import Services from './Services/Services';
import Footer from './Footer/Footer';
import Projects from './Projects/Projects';

function App() {

  return (
    <div className="App">
      <div><Landing/></div>
      <div><Services/></div>
      <div><Projects/></div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
