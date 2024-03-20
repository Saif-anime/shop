'use client'
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const CustomCarousel = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])



  // fetching data here 

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/Admin/Banner');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error('Failed to fetch data')
      }

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >



        {
          Data.map(item => (
            <SwiperSlide>
              <div className='w-full h-96'>
                <img className="object-fill w-full h-full rounded-t-lg pb-8" src={item.BannerImg} alt="product image" />
              </div>
            </SwiperSlide>


          ))
        }



      </Swiper>
    </>
  );
};

export default CustomCarousel;
