import Header from "../components/Header"
import { getImages } from '../components/getImages'
import ImageGallery from "../components/ImageGallery";

function result() {
    const data = getImages();
    console.log(data);
    return (
        <div>
            <Header />
            <ImageGallery data={data}/>
        </div>
    )
}

export default result
