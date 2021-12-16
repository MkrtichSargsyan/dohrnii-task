import React from 'react';
import Carousel from '../components/carousel/carousel';
import Footer from '../components/footer/footer';
import Showcase from '../components/showcase/showcase';
import Subscribe from '../components/subscribe/subscribe';

function MainPage() {
  return (
    <main>
      <Showcase />
      <Carousel />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default MainPage;
