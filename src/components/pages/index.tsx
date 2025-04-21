import AirDropBanner from './airdropbanner';
import ForYou from './foryou';
import HeroPage from './hero';
import Purpose from './purpose';
import TestimonialSlider from './Testimonial';
import WhyChooseUs from './whyus';
import Layout from './Layout';

const Entry = () => {
  return (
    <Layout>
      <HeroPage />
      <Purpose />
      <WhyChooseUs />
      <AirDropBanner />
      <TestimonialSlider />
      <ForYou />
    </Layout>
  );
};

export default Entry;
