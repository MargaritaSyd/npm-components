import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Componente Button', () => {
  it('debe renderizar el texto correctamente', () => {
    render(<Button text="Click aquí" onClick={() => {}} />);
    expect(screen.getByText('Click aquí')).toBeInTheDocument();
  });

  it('debe llamar a onClick cuando se hace click y no está deshabilitado', () => {
    const handleClick = vi.fn();
    render(<Button text="Click" onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('NO debe llamar a onClick cuando está deshabilitado', () => {
    const handleClick = vi.fn();
    render(<Button text="Click" onClick={handleClick} disabled={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('debe tener las clases de Tailwind correspondientes a la variante primary', () => {
    render(<Button text="Primary" variant="primary" onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600');
  });
});