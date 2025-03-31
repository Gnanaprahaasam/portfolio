import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import AboutUs from './components/AboutUs/aboutUs';
import Skill from './components/Skill/skill';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';


function App() {

  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
