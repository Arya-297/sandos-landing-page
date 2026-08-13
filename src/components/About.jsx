import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import {useGSAP} from '@gsap/react'
import { SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
    useGSAP(()=>{
  const titlesplit=SplitText.create("#about h2",{
    type:'words'
  })
  const scrolltriggertimeline=gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        start:'top center',
    }
  })
  scrolltriggertimeline.from(titlesplit.words,{
    opacity:0,
    duration:1,
    yPercent:100,
    stagger:0.02,
    ease:'expo.out'
  }).from('.top-grid div, .bottom-grid div',{
    opacity:0,
    duration:1,
    stagger:0.02,
    ease:'power1.out'
  },'-=0.5')
    })
  return (
    <div id="about" className="py-12 md:px-10 px-5 max-w-7xl mx-auto">
  {/* Header Section */}
  <div className="mb-12">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      
      {/* Title & Badge */}
      <div className="md:col-span-6">
        <span className="badge inline-block bg-amber-500/10 text-amber-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
          Best Cocktails
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Every Detail Matters <span className="text-amber-500">-</span> Crafting Cocktails with Passion and Precision    
        </h2>
      </div>

      {/* Sub-content & Rating */}
      <div className="md:col-span-6 flex flex-col justify-between gap-6">
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Every cocktail we create is a labor of love, meticulously crafted to deliver an unforgettable experience. From the selection of the finest ingredients to the artful presentation, we pour our passion and precision into every detail.
        </p>
        <div>
          <p className="text-2xl md:text-3xl font-bold">
            <span className="text-amber-500">4.5</span>/5
          </p>
          <p className="text-sm text-gray-400">
            More than 12,000+ Happy Customers
          </p>
        </div>
      </div>

    </div>
  </div>
        <div className="top-grid">
           
            <div className="md:col-span-3">
                <div className="noisy">
                    <img src="/images/abt1.png" alt="abt1" />
                </div>
                
            </div>
             <div className="md:col-span-6">
                <div className="noisy">
                    <img src="/images/abt2.png" alt="abt1" />
                </div>
                
            </div>
             <div className="md:col-span-3">
                <div className="noisy">
                    <img src="/images/abt5.png" alt="abt1" />
                </div>
                
            </div>
           
            </div>
             <div className="bottom-grid">
                      <div className="md:col-span-8">
                <div className="noisy">
                    <img src="/images/abt3.png" alt="abt1" />
                </div>
                
            </div>
              <div className="md:col-span-4">
                <div className="noisy">
                    <img src="/images/abt4.png" alt="abt1" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About
