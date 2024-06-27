import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App Component', () => {

  test('initial count value is 0', () => {
    render(<App />);
    const countElement = screen.getByText('0');
    expect(countElement).toBeInTheDocument();
  });

  test('increment count on button click (count 1)', () => {
    render(<App />);
    const countButton = screen.getByText('Count');
    
    fireEvent.click(countButton);
    const countElement = screen.getByText('1');
    expect(countElement).toBeInTheDocument();
  });

  test('increment count on button click (count 2)', () => {
    render(<App />);
    const countButton = screen.getByText('Count');

    fireEvent.click(countButton); // First click
    fireEvent.click(countButton); // Second click
    const countElement = screen.getByText('2');
    expect(countElement).toBeInTheDocument();
  });

  test('should have red background color', () => {
    render(<App />);
    const redButton = screen.getByText('Red Button');
    expect(redButton).toHaveStyle({ backgroundColor: 'red' });
  });

  test('should have red background color and centered text', () => {
    render(<App />);
    const redButton = screen.getByText('Red Button');

    expect(redButton).toHaveStyle({
      backgroundColor: 'red',
      textAlign: 'center',
    });
  });

  test('should have centered text', () => {
    render(<App />);
    const centeredButton = screen.getByText('Centered Text Button');
    expect(centeredButton).toHaveStyle({ textAlign: 'center' });
  });

  test('should have two list items in the ul', () => {
    render(<App />);
    const ulElement = screen.getByRole('list');
    const { getAllByRole } = within(ulElement);
    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });

  test('should have class name "xyz" for each li', () => {
    render(<App />);
    const ulElement = screen.getByRole('list');
    const { getAllByRole } = within(ulElement);
    const listItems = getAllByRole('listitem');
    listItems.forEach((item) => {
      expect(item).toHaveClass('xyz');
    });
  });

  test('should handle button click and change button label', () => {
    render(<App />);
    const btn = screen.getByText('click');
    fireEvent.click(btn);
    expect(btn).toHaveTextContent('Button Clicked');
  });

  test('should have an image with the correct alt text', () => {
    render(<App />);
    const imgElement = screen.getByAltText('hi');
    expect(imgElement).toHaveAttribute('alt', 'hi');
  });

  test('should have an image with the correct title', () => {
    render(<App />);
    const imgElement = screen.getByTitle('this is my image');
    expect(imgElement).toHaveAttribute('title', 'this is my image');
  });

  test('should have an input with the correct attributes', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('name', 'username');
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('id', 'id');
    expect(inputElement).toHaveAttribute('value', 'SCB Reactjs');
  });
});
