// import ImageBox from "../components/ImageBox";
import Image from 'next/image'
import Header from '../components/Header';
import ImageGallery from '../components/ImageGallery';
import Introbox from '../components/Introbox';
import { loader } from "../components/loader"
function Home() {
    const data = loader();
    return (
        <div>
            <Header />
            <Introbox />
            <ImageGallery data={data}/>
        </div>
    )
}

export default Home
