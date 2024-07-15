import type { Meta, StoryObj } from '@storybook/react';
import FormInput from './Input';

const meta = {
  title: 'form/input',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
