import React from 'react';
import Slider from '../components/carousel/slider';
import Footer from '../components/footer/footer';
import Showcase from '../components/showcase/showcase';
import Subscribe from '../components/subscribe/subscribe';

function MainPage() {
  return (
    <main>
      <Showcase />
      <Slider />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default MainPage;
