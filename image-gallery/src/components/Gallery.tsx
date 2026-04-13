import { useState } from "react";
import { initialImages } from '../data/images';
import ImageItem from './ImageItem';

function Gallery() {
    const [images] = useState(initialImages)

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <ImageItem
                key={image.id}
                image={image}
                isFeatured={index === 0}
                />
            ))}
        </div>
    )
}

export default Gallery;
