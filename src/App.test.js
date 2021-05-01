import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import App from './App';

afterEach(cleanup)

test('renders App component with searchbar, button, & definition', () => {
  render(<App />); 
  expect(screen.getByText('Epic Greek Dictionary')).toBeInTheDocument();
  expect(screen.getByText('ἆ')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('clicking on museum icon button creates about dialog', () => {
  render(<App />); 
  expect(screen.queryByText(/David F. Driscoll/i)).not.toBeInTheDocument();    
  userEvent.click(screen.getByRole('button'));
  expect(screen.getByText(/David F. Driscoll/i)).toBeInTheDocument();    
});

test('clicking on searchbar triggers autocomplete', () => {
  render(<App />);
  expect(screen.queryByText(/ἀβακέω/i)).not.toBeInTheDocument();
  userEvent.click(screen.getByRole('textbox'));      
  expect(screen.getByText(/ἀβακέω/i)).toBeInTheDocument();    
});

test('typing in searchbar triggers autocomplete', () => {
  render(<App />);
  expect(screen.queryByText(/ἀβακέω/i)).not.toBeInTheDocument();
  userEvent.type(screen.getByRole('textbox'), 'β');  
  expect(screen.getByText(/ἀβακέω/i)).toBeInTheDocument();    
});

test('choosing item from searchbar renders dictionary entry', () => {
  render(<App />);
  expect(screen.queryByText(/to be ignorant/i)).not.toBeInTheDocument();
  userEvent.type(screen.getByRole('textbox'), 'αβακεω');  
  userEvent.click(screen.getByRole('option')); 
  expect(screen.getByText(/to be ignorant/i)).toBeInTheDocument();    
});

test('following first link in default entry renders appropriate entry', () => {
  render(<App />);
  // expect not to be on deilos entry
  expect(screen.queryByText(/Cowardly, craven/i)).not.toBeInTheDocument();

  // return to first item, since browserrouter does not reset between tests
  userEvent.click(screen.getByRole('textbox'));   
  userEvent.click(screen.getAllByRole('option')[0]);
  
  // now click link
  userEvent.click(screen.getByRole('link', { name: 'δειλός' })); 
  expect(screen.getByText(/Cowardly, craven/i)).toBeInTheDocument();    
});

test('options includes the word αὐτάρ', () => {
  render(<App />);
  expect(screen.queryByText(/αὐτάρ/i)).not.toBeInTheDocument();
  userEvent.type(screen.getByRole('textbox'), 'αυταρ');  
  expect(screen.getByText(/αὐτάρ/i)).toBeInTheDocument();     
});