import type { Image } from '../types/image';
import { Trash2 } from 'lucide-react';

type ImageItemProps = {
    image: Image;
    isFeatured?: boolean;
    onDelete: (id: string) => void;
}

function ImageItem({ image, isFeatured, onDelete }: ImageItemProps) {
    return (
        <div className={`relative aspect-square ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
            <img className='w-full h-full object-cover' src={image.src} alt={image.alt} />
            <button
                aria-label="Delete image"
                className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded"
                onClick={() => onDelete(image.id)}
            >
                <Trash2 size={16} />
            </button>
        </div>
    )
}

export default ImageItem;