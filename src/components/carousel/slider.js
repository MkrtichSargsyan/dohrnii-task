// import {
//   CarouselItem,
//   CarouselItemIcon,
//   CarouselItemTitle,
//   CarouselItemTitleContainer,
//   Line,
//   LinesContainer,
// } from './carousel-styles';
import { ReactComponent as Dataset } from '../../assets/dataset.svg';
import { ReactComponent as MarketPlace } from '../../assets/marketplace.svg';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './carousel.css';
import 'swiper/css';

function Slider() {
  const sliderItemsData = [
    {
      id: 1,
      title: 'Creating a dataset',
      desc: 'Using no-code tools, users can data harvest and data mine in a few simple steps. This enables them to create strong indicators and databases that can track any variable.',
      icon: <Dataset />,
      color: 'white',
    },
    {
      id: 2,
      title: 'Creating a automated strategy',
      desc: 'Using logic blocks, users can build automated strategies without having to code. Simply adding blocks of logic in plain English, users have endless possibilities to explore.',
      icon: null,
      color: 'black',
    },
    {
      id: 3,
      title: 'Deploying on the Marketplace',
      desc: 'Using the Dohrnii marketplace, users can deploy their content on a smart contract and easily distribute it while retaining ownership and ensuring monetisation.',
      icon: <MarketPlace />,
      color: 'white',
    },
  ];

  return (
    <div className="container">
      <Swiper slidesPerView={1.1} centeredSlides={true}>
        <div className="swiper-wrapper">
          {sliderItemsData.map((el) => (
            <SwiperSlide key={el.id}>
              <article
                style={{ width: 330 }}
                className={`carousel-item swiper-slide
                 ${el.color === 'black' ? 'black_background' : null}
               `}
              >
                <div className="carousel-item-container">
                  <h2 className="carousel-item-title">{el.title}</h2>
                  <div className="carousel-item-icon">{el.icon}</div>
                </div>
                <p className="carousel-item-desc">{el.desc}</p>
              </article>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
