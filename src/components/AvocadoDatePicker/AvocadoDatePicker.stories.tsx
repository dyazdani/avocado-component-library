import type { Meta, StoryObj } from '@storybook/react';
import AvocadoDatePicker from './AvocadoDatePicker';
import React from 'react';

const meta: Meta<typeof AvocadoDatePicker> = {
    title: 'Components/AvocadoDatePicker',
    component: AvocadoDatePicker,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof AvocadoDatePicker>;


export const Primary: Story = {
    render: () => <AvocadoDatePicker />
}

export const Disabled: Story = {
    render: () => <AvocadoDatePicker disabled={true}/>
}