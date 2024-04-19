

import ImageShow from './ImageShow'

function ImageList({images }){
    console.log(images)
const renderImage = images.map((image) => {
    return <ImageShow key={image.id} image={image}/>
})

    return(
        <div>
            {renderImage}
        </div>
    )
}

export default ImageList
