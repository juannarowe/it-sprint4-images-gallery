import { useState } from "react";
import { initialImages } from '../data/images';
import ImageItem from './ImageItem';

function Gallery() {
    const [images, setImages] = useState(initialImages)

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this image?')) {
        setImages(images.filter((img) => img.id !== id))
    }}

    return (
        <div className="gallery
        grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {images.map((image, index) => (
                <ImageItem
                key={image.id}
                image={image}
                isFeatured={index === 0}
                onDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default Gallery;
