import Head from './components/head';
import './components/head.css';
import Photo from './components/photo'
import About from './components/about'
import Skill from './components/skill';
import Project from './components/project';
import './App.css'
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <div class="sectionone">
      <Head/>   
      <Photo/>
      </div>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
