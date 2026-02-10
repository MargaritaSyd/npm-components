import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import Button from '@/components/atoms/Button/Button'; // Importamos tu botón previo

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    userName: 'Maggie',
    actions: (
      <>
        <Button text="Log out" variant="secondary" size="sm" onClick={() => {}} />
        <Button text="Upgrade" variant="primary" size="sm" onClick={() => {}} />
      </>
    ),
  },
};

export const LoggedOut: Story = {
  args: {
    actions: <Button text="Sign In" variant="primary" size="sm" onClick={() => {}} />,
  },
};