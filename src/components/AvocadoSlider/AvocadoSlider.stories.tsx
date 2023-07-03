import type { Meta, StoryObj } from '@storybook/react';
import AvocadoSlider from './AvocadoSlider';
import React from 'react';

const meta: Meta<typeof AvocadoSlider> = {
    title: 'Components/AvocadoSlider',
    component: AvocadoSlider,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof AvocadoSlider>;


export const Primary: Story = {
    render: () => <AvocadoSlider />
}

export const Disabled: Story = {
    render: () => <AvocadoSlider disabled={true} />
}

export const Playground: Story = {
    args: {
    }
}