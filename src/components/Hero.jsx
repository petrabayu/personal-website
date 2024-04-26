import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { IconContext } from "react-icons";
import {
  FaCodepen,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { myPhoto } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-[440px] violet-gradient" />
        </div>

        <div className="flex flex-col lg:flex-row">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Petra</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A web enthusiast and design enthusiast
              <br className="hidden sm:block " />
            </p>
            <div className="flex flex-row mt-6 cursor-pointer">
              <IconContext.Provider
                value={{
                  className: "mr-4 md:mr-8 icon-hover",
                  color: "white",
                  size: "2em",
                }}
              >
                <a href="https://dribbble.com/SioMorales" target="_blank">
                  <FaDribbble />
                </a>

                <a href="https://www.instagram.com/petra_bayu/" target="_blank">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/petrabayupangestu"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a href="https://codepen.io/petrabayu" target="_blank">
                  <FaCodepen />
                </a>
                <a
                  href="https://www.linkedin.com/in/petra-bayu-pangestu/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="https://github.com/petrabayu" target="_blank">
                  <FaGithub />
                </a>
              </IconContext.Provider>
            </div>
            <a
              href="https://drive.google.com/file/d/1B_isf_d3-Q5Z6EWbp08-4WenoQG3p5hz/view?usp=sharing"
              target="_blank"
              download="CV_Petra Bayu Pangestu"
            >
              <button className="bg-white hover:bg-[#38ef7d] w-[240px] py-3 px-8 my-8 outline-none text-tertiary font-bold rounded-xl">
                DOWNLOAD CV
              </button>
            </a>
          </div>

          <div className={`w-[240px] lg:w-[400px] lg:ml-20`}>
            <img
              src={myPhoto}
              alt="Petra Bayu Pangestu"
              className=" rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* Scroll indicator animation */}
      {/* <div className="absolute hidden sm:flex bottom-2 w-full justify-center items-center text-center">
        <a href="#about">
          <div className="w-[36px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
