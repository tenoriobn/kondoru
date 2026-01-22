import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '.';

describe.skip('Home', () => {
  it('should render the home page correctly', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /pagina inicial/i })).toBeInTheDocument();
  });
});
