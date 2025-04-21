import './index.css'
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Hero = () => {
    const [animateButton2, setAnimateButton2] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimateButton2(true);
        }, 1000); // Delay of 1 second
    }, []);
const navigate = useNavigate()
    return (
        <div className='HeroSectionMain'>
            <div className='HeroSectionWrap'>
                <div className='HerobodyWrap'>
                    <h5>Get on the right way</h5>
                    <h1>
                        Financial Assistance <br />
                        With True Purpose
                    </h1>
                    <div className='HeroButtonWrap'>
                        <button className='HeroButton1 animate__animated animate__slideInUp' onClick={()=>navigate('/contact')}>How can we help</button>
                        <div className={`HeroButton2Wrap ${animateButton2 ? 'animate__animated animate__slideInUp' : ''}`} onClick={()=>navigate('/signup')}>
                            <span className='HeroButton2USerIcon'>
                                <FaRegUser />
                            </span>
                            <p className='HeroSignupButton' >Create account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
