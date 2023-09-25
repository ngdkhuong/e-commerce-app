import { Link } from 'react-router-dom';
import { dataSlides } from '../../static/data';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="h-96 border border-gray-100 mx-24 relative">
            <Carousel showStatus={false} showThumbs={false} axis="horizontal">
                {dataSlides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="relative">
                        <img src={slide.image} alt="" />
                        <div className="absolute bg-white top-24 left-8 p-4 flex flex-col items-start justify-center shadow-md h-40 w-[440px]">
                            <h3 className="text-3xl font-bold mb-2 text-left">{slide.title}</h3>
                            <div className="text-xl text-left">{slide.content}</div>
                        </div>
                    </div>
                ))}
            </Carousel>
            {/* Right Arrow */}
        </div>
    );
};

export default Banner;
