// import { FaRegUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './index.css'
export const Hero3 = () => {
const navigate = useNavigate()
    return (
        <div className='Hero3SectionMain'>
            <div className='Hero3SectionWrap'>
                <div className='HerobodyWrap'>
                    <h5>Get on the right way</h5>
                    <h1>
                        Boosting Relations &  <br />
                        Loyalty, Anytime
                    </h1>
                    <div className='HeroButtonWrap animate__animated animate__slideInUp'>
                        <button className='HeroButton1 ' onClick={()=>navigate('/login')}>Login</button>
                        <div className={`Hero3Button2Wrap`}>
                            <p className='Hero3SignupButton' onClick={()=>navigate('/signup')}>Create account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
