import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const Slider = () => {
  return (
    <>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="slider_images1" className='slider_img'/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="slider_images2" className='slider_img'/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="slider_images3" className='slider_img'/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<br /><br />
<center><h1>Example</h1></center>
<div className='userM'>
<div className='usermessage'>
   <h4><span className='title'>Title</span> : Lorem ipsum dolor sit amet. </h4> 
   <p><span className='title'>Message</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit.</p> 
</div>
<div className='usermessage'>
   <h4><span className='title'>Title</span> : Lorem ipsum dolor sit amet. </h4> 
   <p><span className='title'>Message</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit.</p> 
</div>
</div>
    </>
  )
}

export default Slider
