import type { Image } from '../types/image';
import { Trash2 } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type ImageItemProps = {
    image: Image;
    isFeatured?: boolean;
    onDelete: (id: string) => void;
}

function ImageItem({ image, isFeatured, onDelete }: ImageItemProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div className={`relative aspect-square ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            ref={setNodeRef} style={style} {...attributes} {...listeners} >
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