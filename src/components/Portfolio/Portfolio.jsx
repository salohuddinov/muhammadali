import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import rasm1 from "../../img/rasm.png"
import rasm2 from "../../img/rasm2.png"
import rasm3 from "../../img/rasm3.png"
import rasm4 from "../../img/rasm4.png"
import rasm5 from "../../img/rasm5.png"
import rasm6 from "../../img/rasm6.png"
import rasm7 from "../../img/rasm7.png"
import rasm8 from "../../img/rasm8.png"
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={rasm1} alt="jsdnwjj" />
          <a className="ecommer" href="https://react18-eight.vercel.app/">LEARN MORE</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2} alt="jsdnwjj" />
          <a className="ecommer" href="https://e-commers-1.vercel.app/">LEARN MORE</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm3} alt="jsdnwjj" />
          <a className="ecommer" href="https://exam-6-two.vercel.app/">LEARN MORE</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm4} alt="jsdnwjj" />
          <a className="ecommer" href="https://reactn41-ea-turkish.vercel.app/">LEARN MORE</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm5} alt="jsdnwjj" />
          <a className="ecommer" href="https://next-js-lesson2-theta.vercel.app/">LEARN MORE</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm6} alt="jsdnwjj" />
          <a className="ecommer" href="https://react-20-nu.vercel.app/">LEARN MORE</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm7} alt="jsdnwjj" />
          <a className="ecommer" href="https://milliy-market.vercel.app/">LEARN MORE</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm8} alt="jsdnwjj" />
          <a className="ecommer" href="https://react-9-ten.vercel.app/">LEARN MORE</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
