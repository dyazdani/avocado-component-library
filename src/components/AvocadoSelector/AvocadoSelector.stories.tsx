import type { Meta, StoryObj } from '@storybook/react';
import AvocadoSelector from './AvocadoSelector';

const meta: Meta<typeof AvocadoSelector> = {
    title: 'Components/AvocadoSelector',
    component: AvocadoSelector,
    tags: ['autodocs'],
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoSelector>;


export const Primary: Story = {
    name: "Default",
    args: {
        label: "Add label text",
        id: "avocado-selector",
        name: "avocado-selector",
        valueOne: "Option One",
        valueTwo: "Option Two",
        valueThree: "Option Three",
    }
}