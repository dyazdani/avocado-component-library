import type { Meta, StoryObj } from '@storybook/react';
import AvocadoButton from './AvocadoButton';

const meta: Meta<typeof AvocadoButton> = {
    title: 'Components/AvocadoButton',
    component: AvocadoButton,
}


export default meta;
type Story = StoryObj<typeof AvocadoButton>;


export const Primary: Story = {
    args: {
        id: "avocado-button",
        name: "avocado-button",
        type: "button",
        disabled: false,
        buttonText: "Add button text",
    }
}