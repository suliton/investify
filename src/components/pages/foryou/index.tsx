
const ForYou = () => {
  return (
    <div className='w-[100%] flex items-center justify-center mt-[50px]'>
        <div className='w-[90%] flex h-[300px] max-[650px]:flex-col max-[650px]:h-auto'>
            <div className="w-[50%] flex items-center justify-center flex-col  gap-[20px] max-[650px]:w-[100%]">
                <p className="w-[100%] text-[50px] font-bold text-[#364a63] max-[650px]:text-[30px]">Let Us Work For You.</p>
                <p className="w-full text-[14px] ">We help individuals, businesses and institutions build, preserve and manage wealth so they can pursue their financial goal.</p>
                <span className="w-full"><button className="bg-[#364a63] p-[15px] text-white max-[650px]:w-[200px] max-[650px]:h-[40px] max-[650px]:p-0 max-[650px]:text-[14px]">Create Your account</button></span>
            </div>
            <div className="w-[50%] max-[650px]:w-[100%] max-[650px]:mt-[30px]">
                <img src="/tour.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ForYou