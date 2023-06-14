import type { Meta, StoryObj } from '@storybook/react';
import AvocadoCheckbox from './AvocadoCheckbox';

const meta: Meta<typeof AvocadoCheckbox> = {
    title: 'AvocadoCheckbox',
    component: AvocadoCheckbox,
}

export default meta;
type Story = StoryObj<typeof AvocadoCheckbox>;


export const Primary: Story = {
    args: {
        label: "Add label text",
        id: "avocado-checkbox",
        disabled: false,
        name: "avocado-checkbox",
        checked: "checked",
    }
}