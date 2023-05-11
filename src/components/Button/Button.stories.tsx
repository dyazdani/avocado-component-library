import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
}

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
    args: {
        id: "avocado-button",
        name: "avocado-button",
        type: "button",
        disabled: false,
        buttonText: "Add button text"
    }
}