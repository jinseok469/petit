// components/ImageCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const BannerCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}  // 아래 점(dot) 표시 및 클릭 가능
      style={{ height: '100%' }}
        className="w-full h-full"
    >
      <SwiperSlide className="h-full min-h-[300px]">
  <div className="flex items-center justify-center h-full text-center text-sm text-white bg-patit">
    앱 설명 4개 이미지 추가 예정
  </div>
</SwiperSlide>
<SwiperSlide className="h-full min-h-[300px]">
  <div className="flex items-center justify-center h-full text-center text-sm text-white bg-patit">
    앱 설명 4개 이미지 추가 예정
  </div>
</SwiperSlide>
<SwiperSlide className="h-full min-h-[300px]">
  <div className="flex items-center justify-center h-full text-center text-sm text-white bg-patit">
    앱 설명 4개 이미지 추가 예정
  </div>
</SwiperSlide>
<SwiperSlide className="h-full min-h-[300px]">
  <div className="flex items-center justify-center h-full text-center text-sm text-white bg-patit">
    앱 설명 4개 이미지 추가 예정
  </div>
</SwiperSlide>
    </Swiper>
  );
};

export default BannerCarousel;
