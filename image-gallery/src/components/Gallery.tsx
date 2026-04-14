import { useState } from "react";
import { initialImages } from '../data/images';
import ImageItem from './ImageItem';

function Gallery() {
    const [images] = useState(initialImages)

    return (
        <div className="gallery
        grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
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
