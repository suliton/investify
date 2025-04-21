import { motion } from "framer-motion";

// Define different variants for each card
const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const bottomVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const Value = () => {
  return (
    <div className="w-[100%] flex items-center justify-center bg-[#676F76] px-[100px] py-[100px] max-[650px]:w-[100%] max-[650px]:p-[0px]">
      <div className="bg-[#354f5b8f] w-[90%] max-[650px]:w-[100%] ">
        <header className="p-6">
          <div className="container mx-auto text-white text-center">
            <h1 className="text-[14px] font-light">COMPANY VALUE</h1>
            <p className="text-4xl mt-2">It's all  about your Future</p>
            <p className="text-md mt-1">
              We focus on comprehensive financial advice and investment services
            </p>
          </div>
        </header>

        <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Vision: Slide in from the left */}
            <motion.div
              className="bg-white p-6  shadow-lg"
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">Vision</h3>
              <p className="text-gray-700">
                In a fast-moving and increasingly complex global economy, our
                success depends on how faithfully we adhere to our core
                principles: delivering exceptional client service and acting
                with integrity.
              </p>
            </motion.div>

            {/* Mission: Slide in from the bottom */}
            <motion.div
              className="bg-white p-6  shadow-lg"
              variants={bottomVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">Mission</h3>
              <p className="text-gray-700">
                Our mission is to generate world-class investment returns over
                the long term. We aspire to do so in a way that makes our
                partners and portfolio companies proud, as we build a unique,
                global company.
              </p>
            </motion.div>

            {/* Guarantee: Slide in from the upper right */}
            <motion.div
              className="bg-white p-6  shadow-lg"
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">Guarantee</h3>
              <p className="text-gray-700">
                We are here because we are passionate about open, transparent
                markets and aim to be a major driving force in widespread
                adoption. We are the first and the best in investment
                management.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Value;
