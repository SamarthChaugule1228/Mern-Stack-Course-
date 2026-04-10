import React from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from './TodoList'

describe('TodoList', () => {
  test('renders initial item and can add/toggle/delete items', async () => {
    render(<TodoList />)

    // initial sample task
    expect(screen.getByText(/Sample Task/i)).toBeInTheDocument()

    const input = screen.getByPlaceholderText(/Add a task/i)
    const addBtn = screen.getByRole('button', { name: /add task/i })

    // add a new task via click
    await userEvent.type(input, 'Buy milk')
    await userEvent.click(addBtn)

    expect(screen.getByText(/Buy milk/i)).toBeInTheDocument()

    // toggle completed
    const checkbox = screen.getAllByRole('checkbox')[1] // second checkbox
    await userEvent.click(checkbox)

    // the li should have class 'completed' now
    const li = screen.getByText(/Buy milk/i).closest('li')
    expect(li).toHaveClass('completed')

    // delete the new task
    const deleteBtn = screen.getByRole('button', { name: /delete/i })
    await userEvent.click(deleteBtn)

    expect(screen.queryByText(/Buy milk/i)).not.toBeInTheDocument()
  })

  // (additional tests removed — test suite restored to original state)
})
