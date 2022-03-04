// Slider.tsx
import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


const mdwpSlider: types.Brick = () => {
  return (
    
<div className='swiper'>
<Swiper
      effect='fade'
      slidesPerView={1}
      speed={400}
      
      
>
      <div className='swiper-wrapper'>
        <Repeater 
        propName="slides" 
        
        />
      </div>    
      
  
      
      </Swiper>
    </div>
  )
}

mdwpSlider.schema = {
  name: 'mdwpSlider',
  label: 'mdwp Slider',
  getDefaultProps: () => ({
    slides: [],
  }),
  repeaterItems: [
    {
      name: 'slides',
      itemType: 'slide',
      itemLabel: 'Slide',
      max: 10,
      min: 2
    },
  ],
}

const sliderSettings = {
  
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1

  
}

export default mdwpSlider