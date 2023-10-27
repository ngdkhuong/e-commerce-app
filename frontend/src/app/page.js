import Image from 'next/image';
import styles from './page.module.css';
import CustomInput from '@/components/custom/CustomInput';
import CustomSelect from '@/components/custom/CustomSelect';
import CustomModal from '@/components/custom/CustomModal';
import CustomCard from '@/components/custom/CustomCard';
import CustomUpload from '@/components/custom/CustomUpload';
import CustomTextArea from '@/components/custom/CustomTextArea';

export default function Home() {
    return (
        <main className="container">
            <h1>Homes</h1>
            <CustomInput />
            <CustomSelect />
            <CustomModal />
            <CustomCard />
            <CustomUpload />
            <CustomTextArea />
        </main>
    );
}
