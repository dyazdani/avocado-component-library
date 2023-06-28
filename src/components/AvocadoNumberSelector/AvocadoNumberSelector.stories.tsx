import type { Meta, StoryObj } from '@storybook/react';
import AvocadoNumberSelector from './AvocadoNumberSelector';
import React from 'react';

const meta: Meta<typeof AvocadoNumberSelector> = {
    title: 'AvocadoNumberSelector',
    component: AvocadoNumberSelector,
}

export default meta;
type Story = StoryObj<typeof AvocadoNumberSelector>;


export const Primary: Story = {
    render: () => <AvocadoNumberSelector placeholder="Enter number here"/>
}

export const Disabled: Story = {
    render: () => <AvocadoNumberSelector disabled={true}/>
}

export const NumberOutsideRange: Story = {
    render: () => <AvocadoNumberSelector min="0" max="100" value="101"/>
}

export const Playground: Story = {
    args: {
        min: '0',
        max: '100',
        placeholder: 'Enter number here',
        //TODO: How to include an onChange function that will let the number selector button change the number. It is not currently working in Storybook.
    }
}