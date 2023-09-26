import Courses from '../components/Courses';
import { Footer, Header, Slider } from '../routes/RoutesLayout';

const HomePage = () => {
    return (
        <>
            <Header />
            <Slider />
            <Courses />
            <Footer />
        </>
    );
};

export default HomePage;
