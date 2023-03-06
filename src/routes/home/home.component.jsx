import { photos } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./home.styles.css";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {

  return (
    <header>
      <div className="header-container">
        <div className="photos-container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {photos.map((photo) => (
              <SwiperSlide key={photo.id} >
                <img src={photo.photo} alt="band playing" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </header>
  );
};

export default Home;
