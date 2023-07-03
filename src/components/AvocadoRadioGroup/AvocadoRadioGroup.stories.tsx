import type { Meta, StoryObj } from '@storybook/react';
import AvocadoRadioGroup from './AvocadoRadioGroup';
import React from 'react';

const meta: Meta<typeof AvocadoRadioGroup> = {
    title: 'Components/AvocadoRadioGroup',
    component: AvocadoRadioGroup,
    tags: ['autodocs'],
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoRadioGroup>;


export const Primary: Story = {
    render: () => <AvocadoRadioGroup legend="Avocado Radio Group" name="avocado-radio-group"/>
}

export const Disabled: Story = {
    render: () => <AvocadoRadioGroup disabled={true} legend="Avocado Radio Group" name="avocado-radio-group"/>
}

export const Playground: Story = {
    args: {
        
    }
}