import {useEffect} from 'react'
import './SliderCarousel.css'
import {img1,img2,img3} from '../../images'

const SliderCarousel = () =>{





  useEffect(()=>{

    var radius = 340;
    var autoRotate = true;
    var rotateSpeed = -60;
    var imgWidth = 190;
    var imgHeight = 230;

    var odrag = document.getElementById("slider2__drag");
    var ospin = document.getElementById("slider2__spin");
    var aImg = ospin.getElementsByTagName("img");

    var aEle = [...aImg];

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    var ground = document.getElementById("slider2__ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime){
       for(var i=0; i<aEle.length; i++){
           let element = aEle[i];

           element.style.transform = "rotateY(" + (i*(360 / aEle.length)) +"deg) translateZ("+radius + "px)";
           element.style.transition = "transform 1s";
           element.style.transitionDelay = delayTime || (aEle.length - i) /4 + "s";
         }
    }

    setTimeout(init,1000);

    var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

  function applyTransform(obj){
    if(tY > 180) tY = 180;
    if(tY < 0) tY = 0;
    obj.style.transform = "rotateX(" + (-tY) +"deg) rotateY("+(tX) +"deg)";
  }

  function playSpin(yes){
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
  }



  if(autoRotate){
    var animationName = (rotateSpeed>0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;

  }

  document.onpointerdown = function(e){
     clearInterval(odrag.timer);
     e = e || window.event;
     var sX = e.clientX,
          sY = e.clientY;

    this.onpointermove = function (e){
      e = e || window.event;
      var nX = e.clientX,
          nY = e.clientY;


          desX = nX - sX;
          desY = nY - sY;

          tX += desX * 0.1;
          tY += desY * 0.1;

          applyTransform(odrag);

          sX = nX;
          sY = nY;
    };

  this.onpointerup = function(e){
    odrag.timer = setInterval( function (){
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;

      applyTransform(odrag);

      playSpin(false);

      if(Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5){
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17 );

    this.onpointermove = this.onpointerup = null;
  };
  return false;
}


  },[])







  return(
    <div className="slider2">
    <div id="slider2__drag">

      <div id="slider2__spin">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img1} alt="" />

      </div>
      <div id="slider2__ground"></div>
    </div>
    </div>
  )
}

export default SliderCarousel
