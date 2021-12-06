import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './ImageSlider1.css'
import img1 from '../../images/blog-1.jpg'
import img2 from '../../images/project-2.png'
import img3 from '../../images/project-3.png'

let slideIndex = 0;
let slider
let slides
let slide
let dots

function plusslide(position){
  slideIndex +=position;


  if(slideIndex > slide.length){
    slideIndex = 1;
  }

  if(slideIndex < 1){
    slideIndex = slide.length;
  }
//default active class is removed from all dots
  for(let i=0; i<dots.length;i++){
    let element = dots[i]
    element.classList.remove("caro__dot_active")
  }

  slides.style.left = `-${slideIndex - 1}00%`
  dots[slideIndex-1].classList.add("caro__dot_active")
}

function currentslide(index){
  if(index > slide.length){
    index = 1;
  }

  if(index < 1){
    index = slide.length;
  }
//default active class is removed from all dots
  for(let i=0; i<dots.length;i++){
    let element = dots[i]
    element.classList.remove("caro__dot_active")
  }

  slides.style.left = `-${index - 1}00%`
  dots[index-1].classList.add("caro__dot_active")

  slideIndex=index;
}






const ImageSlider1 = () => {
  useEffect(()=>{
     slider = document.querySelector(".caro__slider");
     slides = document.querySelector(".caro__slides");
    slide = document.querySelectorAll(".caro__slide");
    dots = document.querySelectorAll(".caro__dots span")


    // function showslide(){
    //   slideIndex++;
    //
    //
    //
    //     if(slideIndex > slide.length){
    //       slideIndex = 1;
    //     }
    //
    //     if(slideIndex < 1){
    //       slideIndex = slide.length;
    //     }
    //   //default active class is removed from all dots
    //   console.log(dots)
    //   if(dots.length>0){
    //     for(let i=0; i<dots.length;i++){
    //       let element = dots[i]
    //       if(element.classList.contains("caro__dot_active")){
    //         element.classList.remove("caro__dot_active")
    //       }
    //
    //     }
    //   }
    //
    //
    //     slides.style.left = `-${slideIndex - 1}00%`
    //
    //     dots[slideIndex-1].classList.add("caro__dot_active")
    //
    // }

    // let interval = setInterval(()=>{
    //   showslide()
    // }, 10000)

    // slider.addEventListener("mouseover",()=>{
    //  interval = setInterval(()=>{
    //     showslide()
    //   }, 10000)
    // })

    // slider.addEventListener("mouseout",()=>{
    //   clearInterval(interval);
    // })
  },[])


  return (
    <>
    <div className="caro__slider">
      <div className="caro__slides">
        <div className="caro__slide">
          <img src={img1} alt="slide1"/>

          <div className="caro__slide_data">

            <h1>This is slide #1</h1>
            <p>This is going to be fun.This is going to be fun.This is going to be fun.This is going to be fun.This is going to be fun.</p>
            <button>subscribe</button>
          </div>
        </div>

        <div className="caro__slide">

          <img src={img2} alt="slide2"/>
          <div className="caro__slide_data">

            <h1>This is slide #2</h1>
            <p>This is going to be fun.This is going to be fun.This is going to be fun.This is going to be fun.This is going to be fun.</p>
            <button>comment</button>
          </div>
        </div>

        <div className="caro__slide">

          <img src={img3} alt="slide3"/>
          <div className="caro__slide_data">

            <h1>This is slide #3</h1>
            <p>This is going to be fun.This is going to be fun.This is going to be fun.This is going to be fun.This is going to be fun.</p>
            <button>share</button>
          </div>
        </div>

      </div>
      <button className="caro__arrow caro__prev"onClick={()=>plusslide(-1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
      <button className="caro__arrow caro__next"onClick={()=>plusslide(1)}>  <FontAwesomeIcon icon={faAngleRight} /></button>

      <div className="caro__dots">
        <span onClick={()=>currentslide(1)}></span>
        <span onClick={()=>currentslide(2)}></span>
        <span onClick={()=>currentslide(3)}></span>
      </div>
    </div>


    </>
  )
}

export default ImageSlider1
