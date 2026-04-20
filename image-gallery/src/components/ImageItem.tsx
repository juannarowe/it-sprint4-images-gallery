import type { Image } from '../types/image';
import { Trash2 } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type ImageItemProps = {
    image: Image;
    isFeatured?: boolean;
    onDelete: (id: string) => void;
    isSelected?: boolean;
    onToggleSelect: (id: string) => void;
}

function ImageItem({ image, isFeatured, onDelete, isSelected, onToggleSelect }: ImageItemProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div className={`relative aspect-square ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}
                        ${isSelected ? 'ring-4 ring-blue-500' : ''}`}
            ref={setNodeRef} style={style} {...attributes} {...listeners}
            >
            <img className='w-full h-full object-cover' src={image.src} alt={image.alt} />
            <div
                data-testid="select-overlay"
                className="absolute inset-0 z-10"
                onClick={() => onToggleSelect(image.id)}
            />
            <button
                aria-label="Delete image"
                className="absolute top-2 right-2 z-20 cursor-pointer bg-black text-white text-xs px-2 py-1 rounded"
                onClick={(e) => {
                    e.stopPropagation()
                    onDelete(image.id)}}
            >
                <Trash2 size={16} />
            </button>
        </div>
    )
}

export default ImageItem;