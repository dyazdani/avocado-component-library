import type { Meta, StoryObj } from '@storybook/react';
import AvocadoSelector from './AvocadoSelector';
import React from 'react';

const meta: Meta<typeof AvocadoSelector> = {
    title: 'AvocadoSelector',
    component: AvocadoSelector,
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoSelector>;


export const Primary: Story = {
    render: () => <AvocadoSelector label="Avocado Selector" />
}

//TODO: Disabled story is not actually disabled because the disabled attribute is being set to a <div> not the input element itself
export const Disabled: Story = {
    render: () => <AvocadoSelector disabled={true} label="Avocado Selector" />
}

export const Playground: Story = {
    args: {
        label: "Add label text",
    }
}