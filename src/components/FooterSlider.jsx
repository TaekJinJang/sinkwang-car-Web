import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper";
import img1 from "../images/p-1.png";
// import img1 from "../images/kb손해보험.png";
import img2 from "../images/삼성화재다이렉트.png";
import img3 from "../images/db손해보험.png";
import img4 from "../images/현대해상_로고_(1).png";
// import img5 from "../images/p-5.png";
import img5 from "../images/axa.png";
import smu from "../images/bs08_sem_00.jpg";

// Import Swiper styles
import "swiper/css";
import Inner from "./Inner";
SwiperCore.use([Navigation, Pagination]);

export default function FooterSlider() {
  return (
    // <Inner>
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      loop={true}
      // Autoplay={{ delay: 2000 }}
      // breakpoints={{
      //   768: {
      //     slidesPerView: 3,
      //   },
      // }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={img1} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="img2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="img3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="img4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="img5" style={{ width: "100px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={smu} alt="smu" style={{ width: "100px" }} />
      </SwiperSlide>
    </Swiper>
    // </Inner>
  );
}