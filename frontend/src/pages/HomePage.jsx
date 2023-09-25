import Courses from '../components/Courses';
import { Footer, Header, Banner } from '../routes/RoutesLayout';

const HomePage = () => {
    return (
        <>
            <Header />
            <Banner />
            <Courses />
            <Footer />
        </>
    );
};

export default HomePage;
