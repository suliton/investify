import { motion } from 'framer-motion';
import Value from '../value';
import { useNavigate } from 'react-router-dom';
const NFTs = () => {
    const navigate = useNavigate()
  return (
    <>
            <div className="w-full h-[100vh] max-[650px]:w-[100%] relative flex justify-center items-center">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/nft.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0000007b]"></div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-[60%] bg-[#364a637b] p-[80px] flex flex-col items-center justify-center rounded-[10px] relative max-[650px]:w-[100%]"
                >
                    <div className="w-[100%] flex items-center flex-col justify-center">
                        <h1 className="text-[60px] w-[90%] text-white font-bold max-w-[1000px] text-center max-[650px]:text-[40px] max-[650px]:w-full">
                        NFTs
                        </h1>
                        <p className='text-white text-center max-[650px]:w-full'>
                        Allow our experts to find the best projects and invest. NFTs yield high profit returns.
                        </p>
                    </div>
                </motion.div>
            </div>
            <section className="container mx-auto mt-[50px] mb-[50px] flex items-center justify-between max-[650px]:w-full max-[650px]:flex-col">
                <div className="w-1/2 max-[650px]:w-full p-[20px]">
                    <p className='text-[14px] text-black '>About NFTs</p>
                    <h1 className="text-[40px] font-bold mb-6">Start Your Cryptocurrency Investment Journey</h1>
                    <p className="text-[16px] mb-6">
                    NFT or non-fungible tokens refer to unique assets, like an irreplaceable doge meme or an autographed tweet. NFTs could be anything from an art piece, domain name, a tweet, music piece, a trading card or just about any digital good that has a value attached to it.
                    </p>
                    <p className="text-[16px] mb-6">
                    While NFTs have been around since 2014, their popularity is fast gaining momentum as the new-age way to buy and sell digital artwork. In fact, since 2017, over $174 million have been spent on NFTs. Managing NFTs is similar to managing cryptocurrencies and may be done by mobile or online app. It’s possible to accomplish this on a smartphone using cryptocurrency exchanges.
                    </p>
                    <button className="bg-[#354f5b] text-white px-6 py-3 rounded-full transition duration-300" onClick={() => navigate('/signup')}>
                        Start Membership now
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-[40%] max-[650px]:w-full">
                    <img
                        src="/nft.jpg"
                        alt="Investify Globe staff"
                        className="rounded-md  shadow-lg"
                    />
                </div>
            </section>
            <Value />
        </>
  )
}

export default NFTs