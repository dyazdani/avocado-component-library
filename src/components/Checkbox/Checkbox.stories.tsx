import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
    component: Checkbox,
}

export default meta;
type Story = StoryObj<typeof Checkbox>;


export const Primary: Story = {
    args: {
        label: "Add label text",
        id: "avocado-checkbox",
        checked: false,
        disabled: false,
        name: "avocado-checkbox",
    }
}