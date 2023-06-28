import type { Meta, StoryObj } from '@storybook/react';
import AvocadoCheckbox from './AvocadoCheckbox';
import React from 'react';

const meta: Meta<typeof AvocadoCheckbox> = {
    title: 'AvocadoCheckbox',
    component: AvocadoCheckbox,
}

export default meta;
type Story = StoryObj<typeof AvocadoCheckbox>;


export const Primary: Story = {
    render: () => <AvocadoCheckbox label="Label text" />
}

export const Checked: Story = {
    render: () => <AvocadoCheckbox checked={true} label="Label text" />
}

export const Disabled: Story = {
    render: () => <AvocadoCheckbox disabled={true} label="Label text" />
}

export const DisabledAndChecked: Story = {
    render: () => <AvocadoCheckbox disabled={true} checked={true} label="Label text" />
}

export const Playground: Story = {
    args: {
        label: "Enter label text"
    }
}