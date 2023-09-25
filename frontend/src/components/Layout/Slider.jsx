import { Link } from 'react-router-dom';
import { dataSlides } from '../../static/data';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? dataSlides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === dataSlides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="h-96 border border-gray-100 mx-24 relative">
            {/* Left Arrow */}
            <div
                style={{ backgroundImage: `url(${dataSlides[currentIndex].image})` }}
                className="w-full h-full bg-center bg-cover"
            />
            <div className="z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer">
                <BsFillArrowLeftCircleFill size={30} onClick={prevSlide} />
            </div>
            <div className="z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer">
                <BsFillArrowRightCircleFill onClick={nextSlide} size={30} />
            </div>
            {dataSlides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="absolute bg-white top-24 left-8 p-4 flex flex-col items-start justify-center shadow-md h-40 w-[440px]"
                >
                    <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                    <div className="text-xl">{slide.content}</div>
                </div>
            ))}
            {/* Right Arrow */}
        </div>
    );
};

export default Slider;
