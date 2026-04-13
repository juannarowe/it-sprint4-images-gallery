import type { Image } from '../types/image';

type ImageItemProps = {
    image: Image;
    isFeatured?: boolean;
}

function ImageItem ({ image, isFeatured }: ImageItemProps) {
    return (
        <div className={isFeatured ? 'featured' : ''}>
            <img src={image.src} alt={image.alt} />
        </div>
    )
}

export default ImageItem;