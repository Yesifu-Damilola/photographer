import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";
import { LiaStarSolid } from "react-icons/lia";

export const Testimonial = () => {
  return (
    <div className="test-container">
      <h2 className="testimonial-h2">
        TESTIMONIALS <div></div>
      </h2>
      <p className="testimonial-p">What they are saying</p>
      <div className="swiperslide">
        <Swiper className="swiper">
          <SwiperSlide className="slide">
            <div className="stars">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <p>
              Export tempor illum tamen malis malis eram quae irure esse labore
              quem cillum quid cillum eram malis quorum velit fore eram velit
              sunt aliqua noster fugiat irure amet legam anim culpa.
            </p>
            <div className="testimonial-item">
              <img src="src/assets/testimonials-2.jpg" alt="sarah" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
