import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
	it('should render Button by default', () => {
		expect(Button).toBeTruthy()
		// const buttonElement = screen.getByText(/learn react/i)
		//expect(linkElement).toBeInTheDocument()
	})
})
