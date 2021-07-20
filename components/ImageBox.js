import Image from 'next'


function ImageBox({src}) {
    return (
        <div>
            {console.log(src)}
            <img src={src}  alt=""/>
        </div>
    )
}

export default ImageBox
