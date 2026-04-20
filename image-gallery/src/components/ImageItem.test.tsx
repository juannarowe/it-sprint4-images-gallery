import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageItem from './ImageItem';

const mockImage = {
    id: '1',
    src: 'https://picsum.photos/id/10/600/400',
    alt: 'A test image'
}

const mockProps = {
    image: mockImage,
    onDelete: () => { },
    onToggleSelect: () => { }
}

describe('ImageItem', () => {
    it('should render the image with correct src and alt', () => {
        render(<ImageItem {...mockProps} />)

        const img = screen.getByAltText('A test image');
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute('src', mockImage.src)
    })

    it('should apply the selection style when isSelected is true', () => {
        const { container } = render(<ImageItem {...mockProps} isSelected={true} />)

        const div = container.firstChild;
        expect(div).toHaveClass('ring-4');
        expect(div).toHaveClass('ring-blue-500');
    })

    it('should apply featured classes when isFeatured is true', () => {
        const { container } = render(<ImageItem {...mockProps} isFeatured={true} />)

        const div = container.firstChild;
        expect(div).toHaveClass('lg:col-span-2');
        expect(div).toHaveClass('lg:row-span-2');
    })

    it('should call onToggleSelect with image id when clicked', async () => {
        // Arrange
        const onToggleSelect = vi.fn()
        render(<ImageItem {...mockProps} onToggleSelect={onToggleSelect} />)

        // Act
        await userEvent.click(screen.getByTestId('select-overlay'))

        // Assert
        expect(onToggleSelect).toHaveBeenCalledWith('1')
    })

    it('should call onDelete with image id when delete button is clicked', async () => {
        // Arrange
        const onDelete = vi.fn()
        render(<ImageItem {...mockProps} onDelete={onDelete} />)

        // Act
        await userEvent.click(screen.getByRole('button', { name: /delete image/i }))

        // Assert
        expect(onDelete).toHaveBeenCalledWith('1')
    })
})

