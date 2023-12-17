import CustomButton from '@/components/custom/CustomButton';
import CustomInput from '@/components/custom/CustomInput';
import CustomUpload from '@/components/custom/CustomUpload';

export default function AddTutorialCategory() {
    return (
        <main className="bg-white p-4 rounded-3">
            <h2>Thêm các chủ đề khóa học</h2>
            <div className="row">
                <div className="col-3">
                    <form className="pb-5">
                        <p className="fw-bold mt-4">Tải lên ảnh đại diện khóa học</p>
                        <CustomUpload className="mt-3" />
                        <CustomInput id="tutcategory" className="mt-3" placeholder="Thêm tên chủ đề khóa học" type="" />
                        <CustomButton type="primary" title="Thêm" className="mt-5" />
                    </form>
                </div>
            </div>
        </main>
    );
}
