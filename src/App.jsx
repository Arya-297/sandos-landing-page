import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import "./app.css";
import Navbar from './components/Navbar.jsx'
import {SplitText} from 'gsap/SplitText'
import Hero from './components/hero.jsx';
import Cocktails from './components/cocktails.jsx';
import About from './components/About.jsx';

gsap.registerPlugin(ScrollTrigger,SplitText);
function App() {
  return (
   <main>
    <Navbar />
    <Hero/>
   <Cocktails/>
   <About/>
   </main>

  )
}

export default App