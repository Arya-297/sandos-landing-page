import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import "./app.css";
import Navbar from './components/Navbar.jsx'
import {SplitText} from 'gsap/SplitText'
import Hero from './components/hero.jsx';

gsap.registerPlugin(ScrollTrigger,SplitText);
function App() {
  return (
   <main>
    <Navbar />
    <Hero/>
    <div className="h-dvh bg-black"/>
   </main>

  )
}

export default App