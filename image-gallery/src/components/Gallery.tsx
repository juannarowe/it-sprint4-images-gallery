import { useState } from "react";
import { initialImages } from '../data/images';
import ImageItem from './ImageItem';
import { DndContext, closestCenter, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import type { DragEndEvent } from '@dnd-kit/core';

function Gallery() {
    const [images, setImages] = useState(initialImages)

    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

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

    const handleToggleSelect = (id: string) => {
        const newSet = new Set(selectedIds)
        if (selectedIds.has(id)) {
            newSet.delete(id)
        } else {
            newSet.add(id)
        }
        setSelectedIds(newSet)
    }

    const handleDeleteSelected = () => {
        if (window.confirm(`Delete ${selectedIds.size} selected images?`)) {
            setImages(images.filter((img) => !selectedIds.has(img.id)))
            setSelectedIds(new Set())
        }
    }

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: { distance: 8 },
        }),
        useSensor(TouchSensor, {
            activationConstraint: { delay: 200, tolerance: 5 },
        })
    )

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={images.map((img) => img.id)} strategy={rectSortingStrategy}>
                <div className="p-4 max-w-3xl mx-auto" role="region" aria-label="Image gallery">
                    <div>
                        <h1 className="text-2xl font-bold mb-4 text-center">Image Gallery</h1>
                    </div>
                    
                    <div className="gallery grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {images.map((image, index) => (
                            <ImageItem
                                key={image.id}
                                image={image}
                                isFeatured={index === 0}
                                onDelete={handleDelete}
                                isSelected={selectedIds.has(image.id)}
                                onToggleSelect={handleToggleSelect}
                            />
                        ))}
                    </div>

                    {selectedIds.size > 0 && (
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded ml-auto mt-4"
                            onClick={handleDeleteSelected}
                        >
                            Delete {selectedIds.size} selected
                        </button>
                    )}
                </div>
            </SortableContext>
        </DndContext>

    )
}

export default Gallery;
