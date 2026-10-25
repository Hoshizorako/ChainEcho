// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainEcho title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainEcho/i);
    expect(titleElement).toBeInTheDocument();
});
