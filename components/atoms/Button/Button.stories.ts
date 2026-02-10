import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: "Design System/Atom/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full' ],
    },
    variant: {
      control: 'select',
      description: 'Define la jerarquía visual del botón.',
    },
    disabled: { control: 'boolean' }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Enviar Formulario',
  },
  parameters: {
    docs: {
      description: {
        story: '**Uso:** La acción principal de la página (ej. Guardar, Comprar). Solo debe haber **uno** por pantalla para no confundir al usuario.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Cancelar',
  },
  parameters: {
    docs: {
      description: {
        story: '**Uso:** Acciones alternativas o de menor importancia. Se usa frecuentemente junto a un botón Primary.',
      },
    },
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    text: 'Ver más detalles',
  },
  parameters: {
    docs: {
      description: {
        story: '**Uso:** Acciones opcionales o sutiles. Evita el ruido visual en interfaces densas.',
      },
    },
  },
};