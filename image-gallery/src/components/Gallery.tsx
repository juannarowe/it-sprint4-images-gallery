import { useState } from "react";
import { initialImages } from '../data/images';
import ImageItem from './ImageItem';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import type { DragEndEvent } from '@dnd-kit/core';

function Gallery() {
    const [images, setImages] = useState(initialImages)

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this image?')) {
            setImages(images.filter((img) => img.id !== id))
        }
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        if (over && active.id !== over.id) {
            const oldIndex = images.findIndex((img) => img.id === active.id)
            const newIndex = images.findIndex((img) => img.id === over.id)
            setImages(arrayMove(images, oldIndex, newIndex))
        }
    }

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={images.map((img) => img.id)} strategy={rectSortingStrategy}>
                <div className="gallery grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                    {images.map((image, index) => (
                        <ImageItem
                            key={image.id}
                            image={image}
                            isFeatured={index === 0}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>

    )
}

export default Gallery;
