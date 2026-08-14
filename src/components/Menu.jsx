import { useRef, useState } from 'react'
import {sliderLists} from '../Constants/Nav'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Menu() {
  

  const contentRef=useRef()
  const [currentIndex,setCurrentIndex]=useState(0);

  useGSAP(()=>{
        gsap.fromTo('#title',{opacity:0},{opacity:1, duration:1.7})
        gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{
          duration:1,
          ease:'power1.inOut',
          opacity:1,
          xPercent:0,
        })
        gsap.fromTo('.details',{opacity:0,yPercent:-100},{opacity:1,yPercent:0,duration:1.8,ease:'power1.inOut'})
    },[currentIndex])


  const totalcocktail=sliderLists.length;
  const setSlide=(index)=>{
    const newIndex=(index+totalcocktail)%totalcocktail;
    setCurrentIndex(newIndex)
  }
  const getCocktailAt=(indexOfSet)=>{
    const index=(indexOfSet+totalcocktail+currentIndex)%totalcocktail
    return sliderLists[index];
  }
  const currentCocktail=getCocktailAt(0)
  const previousCocktail=getCocktailAt(-1)
  const NextCocktail=getCocktailAt(1)
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alter="left-leaf" id="m-left-leaf"/>
      <img src="/images/slider-right-leaf.png" alter="right-leaf" id="m-right-leaf"/>
      <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail,index)=>{
          const isActive=index===currentIndex;
          return(
            <button className={`${isActive?'text-white border-white':'text-white/50 border-white/50'}`} key={cocktail.id} 
            onClick={()=> setSlide(index)}
            >
              {cocktail.name}
            </button>
          )
        })}
      </nav>
      <div className='content'>
        <div className='arrows'>
          <button className='left-text' onClick={()=>setSlide(currentIndex-1)}>
            <span>{previousCocktail.name}</span>
            <img src="/images/right-arrow.png" alt='right-arrow' aria-hidden="true"/>
            </button>
           <button className='right-text' onClick={()=>setSlide(currentIndex+1)}>
            <span>{NextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt='left-arrow' aria-hidden="true"/>
            </button>  
        </div>
        <div className='cocktail'>
          <img src={currentCocktail.image} className='object-contain'/>

        </div>
        <div className='recipe'>
          <div ref={contentRef} className='info'>
              <p className='font-bold'>Recipe For:</p>
              <p id="title">{currentCocktail.name}</p>
          </div>
          <div className='details'>
              <h2>{currentCocktail.title}</h2>
              <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu