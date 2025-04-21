import { useNavigate } from 'react-router-dom'
import './index.css'
export const Hero2 = () => {
    const navigate = useNavigate()
    return (
        <div className='Hero2SectionMain'>
            <div className='Hero2SectionWrap'>
               <div className='Hero2SectionMainBodyWrap'>
                   <span className='Hero2SectionMainDesc'>
                     <p>.Experinced.</p>
                     <p>Specialized.</p>
                     <p>Professional.</p>
                   </span>
                   <h1>International Network To  <br></br> Provide Assistance</h1>
                   <span>
                    <button className='Hero2ButtonWrap animate__animated animate__slideInUp' onClick={()=>navigate('/login')}>Login</button>
                   </span>
               </div>
            </div>
        </div>
    )
}
