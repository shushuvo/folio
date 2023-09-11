import Head from './components/head';
import './components/head.css';
import Photo from './components/photo'
import About from './components/about'
import './App.css'



function App() {
  return (
    <div className="App">
      <div class="sectionone">
      <Head/>   
      <Photo/>
      </div>
      <About/>
    </div>
  );
}

export default App;
