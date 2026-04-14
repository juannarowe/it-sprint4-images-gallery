import type { Image } from '../types/image';

type ImageItemProps = {
    image: Image;
    isFeatured?: boolean;
}

function ImageItem ({ image, isFeatured }: ImageItemProps) {
    return (
        <div className={`aspect-square ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
            <img className='w-full h-full object-cover' src={image.src} alt={image.alt} />
        </div>
    )
}

export default ImageItem;