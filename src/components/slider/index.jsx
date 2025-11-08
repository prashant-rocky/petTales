// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/style.css';
import banner1 from "../../assets/images/banner1.webp"
import banner2 from "../../assets/images/banner2.jpg"
import banner3 from "../../assets/images/banner3.avif"

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Slider = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
                delay: 5000,  
                disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
        >
            <SwiperSlide
                style={{backgroundImage: `url(${banner1})`}}
            >
                <a href="/best-dog">
                    <h3>
                        Best Dog Breeds for Japanese Apartments <br />(Small-Space Friendly)
                    </h3>
                </a>
            </SwiperSlide>

            <SwiperSlide  style={{backgroundImage: `url(${banner2})`}}>
                <a href="/japanese-cats"><h3>Why Japanese Cats Live Longer The Lifestyle<br /> Behind It</h3></a>
            </SwiperSlide>
            <SwiperSlide  style={{backgroundImage: `url(${banner3})`}}>
                <a href="/how-to-train-a-shiba"><h3>How to Train a Shiba Inu A Beginner’s <br /> Guide</h3></a>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
