import CustomInput from '@/components/custom/CustomInput';

export default function AddTutorialCategory() {
    return (
        <main className="bg-white p-3 rounded-3">
            <h2>Thêm các loại khóa học</h2>
            <div className="row">
                <div className="col-6">
                    <form className="">
                        <CustomInput placeholder="Thêm tên loại" type="" />
                    </form>
                </div>
            </div>
        </main>
    );
}
