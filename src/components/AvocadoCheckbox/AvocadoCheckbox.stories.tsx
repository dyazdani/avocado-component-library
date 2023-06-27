import type { Meta, StoryObj } from '@storybook/react';
import AvocadoCheckbox from './AvocadoCheckbox';

const meta: Meta<typeof AvocadoCheckbox> = {
    title: 'Components/AvocadoCheckbox',
    component: AvocadoCheckbox,
}

export default meta;
type Story = StoryObj<typeof AvocadoCheckbox>;


export const Primary: Story = {
    name: "Default",
    args: {
        label: "Add label text",
        id: "avocado-checkbox",
        disabled: false,
        name: "avocado-checkbox",
        checked: false,
    }
}

export const Disabled: Story = {
    args: {
        label: "Add label text",
        id: "avocado-checkbox",
        disabled: true,
        name: "avocado-checkbox",
        checked: false,
    }
}

export const DisabledAndChecked: Story = {
    args: {
        label: "Add label text",
        id: "avocado-checkbox",
        disabled: true,
        name: "avocado-checkbox",
        checked: true,
    }
}