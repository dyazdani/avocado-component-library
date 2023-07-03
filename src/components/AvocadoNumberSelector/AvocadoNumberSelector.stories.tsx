import type { Meta, StoryObj } from '@storybook/react';
import AvocadoNumberSelector from './AvocadoNumberSelector';

const meta: Meta<typeof AvocadoNumberSelector> = {
    title: 'Components/AvocadoNumberSelector',
    component: AvocadoNumberSelector,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof AvocadoNumberSelector>;


export const Primary: Story = {
    name: "Default",
    args: {
        name: "avocado-number-selector",
        id: "avocado-number-selector",
        min: '0',
        max: '100',
        step: 'any',
        placeholder: 'Enter number here',
        value: '50',
        //TODO: How to include an onChange function that will let the number selector button change the number. It is not currently working in Storybook.
    }
}