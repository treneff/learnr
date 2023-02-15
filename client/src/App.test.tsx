import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('renders the header and main components', () => {
        render(<App />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('main')).toBeInTheDocument();
    });
});
