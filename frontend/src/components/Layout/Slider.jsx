import { dataSlides } from '../../static/data';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % dataSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? dataSlides.length - 1 : prevSlide - 1));
    };

    return (
        <div className="">
            <div className="max-w-[1240px] h-96 w-full m-auto px-4 relative">
                <div className="z-20 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer">
                    <BsFillArrowLeftCircleFill onClick={prevSlide} size={30} />
                </div>
                <div
                    style={{ backgroundImage: `url(${dataSlides[currentSlide].image})` }}
                    className="w-full h-full bg-no-repeat transition-all"
                ></div>
                <div className="absolute bg-white top-24 left-8 p-4 flex flex-col items-start justify-center shadow-md h-40 w-[440px] transition-all">
                    <h2 className="text-3xl font-bold mb-2 text-left">{dataSlides[currentSlide].title}</h2>
                    <div className="text-xl text-left">{dataSlides[currentSlide].content}</div>
                </div>
                <div className="z-20 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer">
                    <BsFillArrowRightCircleFill onClick={nextSlide} size={30} />
                </div>
            </div>
        </div>
    );
};

export default Slider;
