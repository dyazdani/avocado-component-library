import type { Meta, StoryObj } from '@storybook/react';
import AvocadoColorPicker from './AvocadoColorPicker';
import React from 'react';

const meta: Meta<typeof AvocadoColorPicker> = {
    title: 'AvocadoColorPicker',
    component: AvocadoColorPicker,
}

export default meta;
type Story = StoryObj<typeof AvocadoColorPicker>;


export const Primary: Story = {
    render: () => <AvocadoColorPicker />
}

export const Disabled: Story = {
    render: () => <AvocadoColorPicker disabled={true}/>
}

export const Playground: Story = {
    args: {

    }
}