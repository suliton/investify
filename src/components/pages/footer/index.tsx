import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate()
    return (
        <footer className="bg-[#111D29] text-white py-40 w-[100%] flex items-center justify-center">
            <div className='w-[90%]'>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Company Information */}
                    <div>
                        <img src="/BigLogo.png" alt="TheInvestify Globe Logo" className="mb-4" />
                        <p>
                            Comprehensive financial advice and investment services that are tailored
                            to meet your individual needs.
                        </p>
                    </div>

                    {/* Links - Company */}
                    <div>
                        <h4 className="font-bold mb-2">Company</h4>
                        <ul className='flex flex-col gap-[15px] text-[14px]'>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/')}>Home</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/company')}>About Us</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/career')}>Career</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/login')}>Client Portal</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/signup')}>Start Membership</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/contact')}>Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Links - Services */}
                    <div>
                        <h4 className="font-bold mb-2">Services</h4>
                        <ul className='flex flex-col gap-[15px] text-[14px] '>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/realestate')}>Real Estate</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/retirement')}>Retirement</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/gold')}>Gold</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/crypto')}>Cryptocurrency</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/nfts')}>NFTs</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/stocks')}>Stocks & ETFs</a></li>
                            <li><a  className="hover:text-gray-400" onClick={() => navigate('/forex')}>Foreign Exchange</a></li>
                        </ul>
                    </div>

                    {/* Links - Legal */}
                    <div>
                        <h4 className="font-bold mb-2">Legal</h4>
                        <ul className='flex flex-col gap-[15px] text-[14px]'>
                            <li><a  className="hover:text-gray-400">Risk Disclosure</a></li>
                            <li><a  className="hover:text-gray-400">Anti Spam Policy</a></li>
                            <li><a  className="hover:text-gray-400">Anti Money Laundering</a></li>
                            <li><a  className="hover:text-gray-400">Placement of Statement</a></li>
                            <li><a  className="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a  className="hover:text-gray-400">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>

                {/* Language Section */}

                {/* Footer Bottom Section */}
                <div className="mt-4 border-t border-gray-800 pt-4">
                    <p className="text-[10px] text-white font-light">
                    How investifyEdge calculates return on Investment, all return figures shown above are actual and fixed, not for illustrative purposes only. Before investing, consider your investment objectives and investifyEdge's charges and expenses. investifyEdge's internet-based services are designed to assist clients in achieving discrete financial goals. They are intended to provide comprehensive tax advice and financial planning with respect to every aspect of a client's financial situation and can incorporate specific investments that clients hold elsewhere. investifyEdge is available to everyone Globally
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Copyright © 2020 investifyEdge. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
