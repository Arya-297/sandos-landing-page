import gsap from 'gsap'
import{useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {SplitText} from 'gsap/SplitText'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
gsap.registerPlugin(ScrollTrigger);
function Hero() {
    const videoRef = useRef()

    
const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    useGSAP(()=>{
         const herosplit = new SplitText(".title", {type:"chars, words, lines"})

        const pargraphsplit = new SplitText(".subtitle", {type:" lines"})

         herosplit.chars.forEach((char)=>char.classList.add('text-gradient'))

         gsap.from(herosplit.chars,{
            duration:1.2,
            ease:'expo.inOut',
            yPercent:80,
            stagger:0.05,

         })
         gsap.from(pargraphsplit.lines,{
            duration:1.2,
            ease:'expo.Out',
            opacity:0,
            yPercent:80,
            stagger:0.05,
            delay:1
         })


         gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:1,
                

            }
         }).to('.left-leaf',{y:200},0)
         .to('.right-leaf',{y:-200},0)
         

         const startValue=isMobile?' top 50%':'center 60%';
         const endValue=isMobile?'120% top':'bottom top';
         let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};
    });
  return (
    <>
    <section id="hero" className="noisy">
        <h1 className="title">SANDOS</h1>
        <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
         <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
         <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>..Cool ..Crisp ..Classic</p>
                    <p className="subtitle">
                        Sip the Spirit<br>
                        </br> of summer
                    </p>
                </div>
                <div className="view-cocktails">
                    <p className="subtitle">
                        Every sip is a journey, every cocktail a story. Explore our curated collection of cocktails and discover the perfect blend for your taste.
                    </p>
                    <a href="#cocktails" className="view-cocktails-btn"/>
                </div>
            </div>
         </div>
    </section>
    <div className="video absolute inset-0">
        <video src="/videos/output.mp4" muted playsInline preload="auto" ref={videoRef}/>
    </div>
    </>
  )
}

export default Hero