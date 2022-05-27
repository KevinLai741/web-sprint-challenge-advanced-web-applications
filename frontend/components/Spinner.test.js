// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from './Spinner'
import {render, screen, rerender} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'

const expectedLoadingMessage = 'Please wait...'

test('sanity', () => {
  expect(true).toBe(true)
})

test("renders nothing if false passed in as props", () => {
  render(<Spinner on={false}/>)
  const loadingEle = screen.queryByText(expectedLoadingMessage)
  expect(loadingEle).not.toBeInTheDocument()
})

test("renders loading message if true passed in as props", () => {
  render(<Spinner on={true}/>)
  const loadingEle = screen.getByText(expectedLoadingMessage)
  expect(loadingEle).toBeVisible()
})

//Similar test to two above but rerenders the same component with new props vs creating a new one in two separate tests
test("rerenders properly from false to true", () => {
  //When component first mounts "on" prop will default to false:
  const { rerender } = render(<Spinner on={false}/>)
  const loadingEle = screen.queryByText(expectedLoadingMessage)
  expect(loadingEle).not.toBeInTheDocument()
  //Component will rerender when spinnerOn slice of state updates "on" <Spinner/> prop to true
  rerender(<Spinner on={true}/>)
  screen.getByText(expectedLoadingMessage)
})
