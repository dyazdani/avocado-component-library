import type { Meta, StoryObj } from '@storybook/react';
import AvocadoSelector from './AvocadoSelector';

const meta: Meta<typeof AvocadoSelector> = {
    title: 'AvocadoSelector',
    component: AvocadoSelector,
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoSelector>;


export const Primary: Story = {
    args: {
        label: "Add label text",
        id: "avocado-selector",
        name: "avocado-selector",
        valueOne: "Option One",
        valueTwo: "Option Two",
        valueThree: "Option Three",
    }
}