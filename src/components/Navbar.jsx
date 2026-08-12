import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { navLinks } from "../Constants/Nav"

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: ".navbar",
        start: "top top",
      }
    })

    navTween.fromTo(
      ".navbar",
      {
        backgroundColor: "transparent"
      },
      {
        backgroundColor: "#00000050",
        ease: "power1.inOut",
        backdropFilter: "blur(10px)"
      }
    )
  })

  return (

    <nav className="navbar">
      <div>
        <a href="#home" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="w-10 h-10 m-3" />
          <p>Mojito Drinks</p>
        </a>

        <ul className="flex gap-8 ml-auto  ">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-white hover:text-gray-300">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  )
}

export default Navbar