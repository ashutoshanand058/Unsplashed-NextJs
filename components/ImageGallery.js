import styles from "./ImageGallery.module.css"
function ImageGallery({data}) {
    return (
        <div className={styles.gallery}>
            {data.map( image => {
                // {console.log(image.urls.regular)}
                return <img src={image.urls.regular} key={image.id}/> 
                
            })}
        </div>
    )
}

export default ImageGallery
