import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ComponentStoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

type Story = ComponentStoryObj<typeof LoginForm>;

export default { component: LoginForm };

export const Success: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('email'), 'sample@sample.com', {
      delay: 100,
    });
    await userEvent.type(canvas.getByTestId('password'), 'password', {
      delay: 100,
    });
    await userEvent.click(canvas.getByTestId('submit'));
    await waitFor(() => {
      expect(canvas.getByText('Sign in success!')).toBeInTheDocument();
    });
  },
};

export const Error: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('submit'));
  },
};
