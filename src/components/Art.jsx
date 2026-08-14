import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../Constants/Nav"
import { useMediaQuery } from "react-responsive"
function Art() {
   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
   useGSAP(()=>{
    const start=isMobile?'top 20%':'top top'
     const masktimeline=gsap.timeline({
        scrollTrigger:{
            start,
            end:'bottom center',
            trigger:'#art',
            scrub:1.5,
            pin:true,

        }
     })
     masktimeline.to('.will-fade',{
        stagger:0.02,
        ease:'power1.inOut',
        opacity:0
     })
     .to('.masked-img',{
        duration:1.5,
        scale:1.3,
        maskPosition:'center',
        ease:'power1.inOut',
        maskSize:'400%'
     })
     .to('#masked-content',{
            duration:1.6,
            opacity:1,
            ease:'power1.inOut'
     })
   })
  return (
    <div id="art">
        <div className="container mx-auto h-full pt-20">
            
    <h1 className="will-fade" ></h1>
    <div className="content">
        <ul className="space-y-2 will-fade">
                {goodLists.map((feature,index)=>(
                    <li key={index} className="flex gap-2 items-center">
                        <img src="/images/check.png" alter="check"/>
                        <p>{feature}</p>
                    </li>
                ))}
        </ul>
        <div className="cocktail-img">
            <img
            src="/images/under-img.jpg"
            alter="under-img"
            className="abs-center masked-img size-full  object-contain"
            />
        </div>
         <ul className="space-y-2 will-fade">
                {featureLists.map((feature,index)=>(
                    <li key={index} className="flex gap-2 items-center justify-start">
                        <img src="/images/check.png" alter="check"/>
                        <p className="md:w-fit  w-60">{feature}</p>
                    </li>
                ))}
        </ul>
    </div>
    <div className="masked-container">
        <h2 className="will-fade ">
            Sip-Worthy Perfection
        </h2>
        <div id="masked-content">
        <h3>Made With Craft,Poured With Passion</h3>
        <p>This iS not just a drink,It's carefully crafted made moment just for you.</p>
        </div>
        
    </div>
            </div>
        
    </div>
  )
}

export default Art