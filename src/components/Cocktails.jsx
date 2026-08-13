import {cocktailLists,mockTailLists} from "../Constants/Nav"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
function Cocktails() {
    useGSAP(()=>{
        const parallaxTimeLine=gsap.timeline({
            scrollTrigger:{
                trigger:"#cocktails",
                start:"top 30%",
                end:"bottom 100%",
                srub:true,

            }
        })
        parallaxTimeLine.from("#c-left-leaf",{y:100,x:-100})
        .from("#c-right-leaf",{y:100,x:100},0)
    })
  return (

<section id="cocktails" className="noisy">
    <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" className="hidden md:block"/>
    <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf"className="hidden md:block" />

    <div className="list">
        <div className="popular">
    <h2>Most Popular Cocktails</h2>
    <ul>
        {cocktailLists.map(({name, country, detail, price})=>(
            <li key={name}>
                <div className="  md:me-26">
                    <h3>{name}</h3>
                    <p >{country}|{detail}</p>
                    <span className="text-lg">-{price}</span>
                </div>
            </li>
       ) )}
    </ul>
        </div>
  
     <div className="loved">    
    <h2>Most Loved mocktails</h2>
    <ul>
        {mockTailLists.map(({name, country, detail, price})=>(
            <li key={name}>
                <div className=" md:me-20">
                    <h3>{name}</h3>
                    <p >{country}|{detail}</p>
                     <span className="text-lg">-{price}</span>
                </div>
            </li>
       ) )}
    </ul>
          </div>
    </div>
</section>
  )
}

export default Cocktails