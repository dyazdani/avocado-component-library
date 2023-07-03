import type { Meta, StoryObj } from '@storybook/react';
import AvocadoTextField from './AvocadoTextField';
import React from 'react';

const meta: Meta<typeof AvocadoTextField> = {
    title: 'Components/AvocadoTextField',
    component: AvocadoTextField,
    tags: ['autodocs'],
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoTextField>;


export const Primary: Story = {
    render: () => <AvocadoTextField label="Avocado Text Field" placeholder="Enter text here" />
}

//TODO: get disabled to work. Not working because it is setting disabled on <div> instead of <input>
export const Disabled: Story = {
    render: () => <AvocadoTextField disabled={true} />
}

export const Playground: Story = {
    args: {
        label: "Add label",
        placeholder: "Enter text here",
    }
}