import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders chatbot Title Unit Testing', () => {
  render(<App />);
  const titleElement = screen.getByText(/Chatbot/i);
  expect(titleElement).toBeInTheDocument();
});

test('Allow use to type a message ' , ()=>{

  render(<App />)
    
  const inputElement = screen.getByPlaceholderText(/Enter the message/i);

  fireEvent.change(inputElement ,{target :{ value:'Hello'}});

  expect(inputElement.value).toBe('Hello');
  

}  )
