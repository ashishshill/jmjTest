// Import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperComponent.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const sliderImg = [
  {
    imgUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/slider/cache/5891f463474e04dc936662b4b9593acc/WhatsApp-Image-2023-02-02-at-7.18.11-PM-3.jpg",
  },
  {
    imgUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/slider/cache/7ae01857268e021fbcdb2b1e0388dee2/WhatsApp-Image-2023-02-02-at-7.18.11-PM-1.jpg",
  },
  {
    imgUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/slider/cache/224a7ef3f4689659a0731423bf4c6f3b/WhatsApp-Image-2023-02-02-at-7.18.11-PM-2.jpg",
  },
  {
    imgUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/slider/cache/0a48a859707ab8599071f515d2722413/WhatsApp-Image-2023-02-02-at-7.18.11-PM.jpg",
  },
  {
    imgUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/slider/cache/571420125528eafa2a4baed0cefd0ae7/WhatsApp-Image-2023-03-03-at-11.29.31-AM-1.jpg",
  },
  {
    imgUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/slider/cache/c9c539be9ebf4198791e24fa493e4b71/WhatsApp-Image-2023-03-03-at-11.29.31-AM.jpg",
  },
];

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sliderImg.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.imgUrl} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
