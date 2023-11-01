import CustomCard from '@/components/custom/CustomCard';

export default function Courses({ courses }) {
    return (
        <main className="py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <CustomCard />
                    </div>
                </div>
            </div>
        </main>
    );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:4000/api/courses');
    const Coursers = await res.json();
    return { props: { Coursers } };
}
