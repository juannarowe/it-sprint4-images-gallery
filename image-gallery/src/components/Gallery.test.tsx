import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Gallery from './Gallery';

vi.mock('@dnd-kit/core', async() => {
    const actual = await vi.importActual('@dnd-kit/core');
    return {
        ...actual,
        DndContext: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    }
})

vi.mock('@dnd-kit/sortable', async () => {
  const actual = await vi.importActual('@dnd-kit/sortable')
  return {
    ...actual,
    SortableContext: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useSortable: () => ({
      attributes: {},
      listeners: {},
      setNodeRef: () => {},
      transform: null,
      transition: null,
    }),
  }
})

describe('Gallery', () => {
  it('should render the correct number of images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(7)
  })
})

it('should remove an image when delete is confirmed', async () => {
  vi.spyOn(window, 'confirm').mockReturnValue(true)
  render(<Gallery />)

  const deleteButtons = screen.getAllByRole('button', { name: /delete image/i })
  await userEvent.click(deleteButtons[0])

  expect(screen.getAllByRole('img')).toHaveLength(6)
})

it('should not remove an image when delete is cancelled', async () => {
  vi.spyOn(window, 'confirm').mockReturnValue(false)
  render(<Gallery />)

  const deleteButtons = screen.getAllByRole('button', { name: /delete image/i })
  await userEvent.click(deleteButtons[0])

  expect(screen.getAllByRole('img')).toHaveLength(7)
})

it('should show delete button when images are selected', async () => {
  render(<Gallery />)

  const overlays = screen.getAllByTestId('select-overlay')
  await userEvent.click(overlays[0])
  await userEvent.click(overlays[1])

  expect(screen.getByText(/delete 2 selected/i)).toBeInTheDocument()
})

it('should delete selected images when batch delete is confirmed', async () => {
  vi.spyOn(window, 'confirm').mockReturnValue(true)
  render(<Gallery />)

  const overlays = screen.getAllByTestId('select-overlay')
  await userEvent.click(overlays[0])
  await userEvent.click(overlays[1])
  await userEvent.click(screen.getByText(/delete 2 selected/i))

  expect(screen.getAllByRole('img')).toHaveLength(5)
})

it('should deselect an image when clicked twice', async () => {
  render(<Gallery />)
  const overlays = screen.getAllByTestId('select-overlay')

  await userEvent.click(overlays[0])
  await userEvent.click(overlays[0])

  expect(screen.queryByText(/delete 1 selected/i)).not.toBeInTheDocument()
})