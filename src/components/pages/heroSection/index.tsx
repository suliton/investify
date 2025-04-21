import { useEffect, useState } from 'react';
// import { useSpring, animated } from 'react-spring';
import { Hero } from './hero';
import { Hero2 } from './hero2';
import { Hero3 } from './hero3';
import './HeroSection.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const components = [<Hero key="hero1" />, <Hero2 key="hero2" />, <Hero3 key="hero3" />];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
    };
  useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000); // Change slide every 5 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    },);
    return (
        <div className="carousel-container">
            <div className='carousel-wrap'>
                {components[currentIndex]}
            </div>
            <button onClick={handlePrev} className='PrevButton'>
                <IoIosArrowBack/>
            </button>
            <button onClick={handleNext} className='PrevButton'>
                <IoIosArrowForward/>
            </button>
        </div>
    )
}
