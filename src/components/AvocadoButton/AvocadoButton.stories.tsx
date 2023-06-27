import type { Meta, StoryObj } from '@storybook/react';
import AvocadoButton from './AvocadoButton';

const meta: Meta<typeof AvocadoButton> = {
    title: 'Components/AvocadoButton',
    component: AvocadoButton,
    tags: ['autodocs'],
}


export default meta;
type Story = StoryObj<typeof AvocadoButton>;


export const Primary: Story = {
    name: "Default",
    args: {
        id: "avocado-button",
        name: "avocado-button",
        type: "button",
        disabled: false,
        buttonText: "Add button text",
    }
}