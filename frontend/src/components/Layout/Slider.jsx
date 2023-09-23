import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className="w-full h-96 border border-gray-100">
            <div className="mx-24 relative">
                <img
                    src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/487fb3b7-4b6e-4c2f-a3fe-67eb51016502.jpg"
                    alt=""
                    className="h-full w-full object-cover bg-no-repeat flex items-center justify-center"
                />
                <div className="absolute bg-white top-24 left-8 p-4 flex flex-col items-start justify-center shadow-md h-40 w-[440px]">
                    <h3 className="text-3xl font-bold mb-2">Learn from anywhere</h3>
                    <div className="text-xl">
                        On the couch, from the backyard, or on your commute.{' '}
                        <Link to="/" className="underline">
                            Our app
                        </Link>{' '}
                        lets you decide.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
