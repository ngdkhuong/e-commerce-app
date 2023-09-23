import Courses from '../components/Courses';
import { Header, Slider } from '../routes/RoutesLayout';

const HomePage = () => {
    return (
        <>
            <Header />
            <Slider />
            <Courses />
        </>
    );
};

export default HomePage;
