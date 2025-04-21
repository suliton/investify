import 'animate.css';
import { HeroSection } from "../heroSection";
const HeroPage = () => {

  return (
    <>
      <div className="w-full h-[100vh] max-[650px]:w-[100%]  bg-cover bg-center bg-no-repeat relative flex justify-center ">
          <HeroSection/>
      </div>
    </>
  );
};

export default HeroPage;
