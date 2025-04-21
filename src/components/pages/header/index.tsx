import { useState, useEffect } from 'react';
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"; // Icons for dropdown arrow
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown in header
  const [showSideBar, setShowSideBar] = useState(false); // Sidebar toggle state
  const [isSidebarServiceOpen, setIsSidebarServiceOpen] = useState(false); // Sidebar service dropdown state
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle header dropdown
  const handleDropdownHover = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  // Toggle sidebar services dropdown
  const toggleSidebarService = () => {
    setIsSidebarServiceOpen(!isSidebarServiceOpen);
  };

  return (
    <div>
      {/* Header */}
      <div
        className={`w-[100%] h-[10vh] flex justify-center fixed top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#111D29]' : 'bg-transparent'
          }`}
      >
        <div className="w-[90%] h-full flex items-center justify-between">
          <span className="w-[30%] h-[100%] flex items-center max-[650px]:w-[50%]">
            <img src="/BigLogo.png" alt="" className='w-[250px] max-[650px]:w-[300px]' />
          </span>
          <span className="w-[70%] flex gap-[70px] items-center text-white text-[14px] max-[650px]:hidden">
            <p className="cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/')}>Home</p>
            <p className="cursor-pointer hover:text-[#364a63]"  onClick={() => navigate('/company')}>Company</p>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownHover(true)}
            >
              <p className="cursor-pointer hover:text-[#364a63]">Services</p>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-[200px] bg-white shadow-lg rounded-md">
                  <ul className="text-black" onMouseLeave={() => handleDropdownHover(false)}>
                    <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer" onClick={() => navigate('/realestate')}>Real Estate</li>
                    <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer" onClick={() => navigate('/retirement')}>Retirement</li>
                    <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer" onClick={() => navigate('/gold')}>Gold</li>
                    <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer" onClick={() => navigate('/crypto')}>Cryptocurrency</li>
                    <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer" onClick={() => navigate('/nfts')}>NFTs</li>
                    <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer" onClick={() => navigate('/stocks')}>Stocks & ETFs</li>
                    <li className="px-4 py-2 hover:bg-[#364a63] hover:text-white cursor-pointer" onClick={() => navigate('/forex')}>Foreign Exchange</li>
                  </ul>
                </div>
              )}
            </div>

            <p className="cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/career')}>Career</p>
            <p className="cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/contact')}>Contact</p>
            <button className="border h-[40px] w-[120px] border-[#364a63] hover:bg-[#364a63] hover:text-white" onClick={() => navigate('/login')}>
              Login
            </button>
          </span>

          {/* Menu Icon for smaller screens */}
          <span className='hidden max-[650px]:flex'>
            <HiMenuAlt2 className='text-[30px] text-white cursor-pointer' onClick={toggleSidebar} />
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-[#111D29] w-[250px] z-50 transform transition-transform duration-300 ${showSideBar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col text-white p-4">
          <p className="mb-4 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/')}>Home</p>
          <p className="mb-4 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/company')}>Company</p>

          {/* Sidebar Services with dropdown */}
          <div className="mb-4 cursor-pointer hover:text-[#364a63]" onClick={toggleSidebarService}>
            <div className="flex justify-between items-center">
              <p>Services</p>
              {isSidebarServiceOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>

            {isSidebarServiceOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-[15px] text-[12px]">
                <p className="mb-2 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/realestate')}>Real Estate</p>
                <p className="mb-2 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/retirement')}>Retirement</p>
                <p className="mb-2 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/gold')}>Gold</p>
                <p className="mb-2 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/crypto')}>Cryptocurrency</p>
                <p className="mb-2 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/nfts')}>NFTs</p>
                <p className="mb-2 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/stocks')}>Stocks & ETFs</p>
                <p className="mb-2 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/forex')}>Foreign Exchange</p>
              </div>
            )}
          </div>

          <p className="mb-4 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/career')}>Career</p>
          <p className="mb-4 cursor-pointer hover:text-[#364a63]" onClick={() => navigate('/contact')}>Contact</p>
          <button className="border h-[40px] w-[120px] border-[#364a63] hover:bg-[#364a63] hover:text-white mt-4" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
