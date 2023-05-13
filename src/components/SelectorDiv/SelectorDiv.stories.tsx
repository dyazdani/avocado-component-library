import type { Meta, StoryObj } from '@storybook/react';
import SelectorDiv from './SelectorDiv';

const meta: Meta<typeof SelectorDiv> = {
    title: 'SelectorDiv',
    component: SelectorDiv,
}
                                             
export default meta;
type Story = StoryObj<typeof SelectorDiv>;


export const Primary: Story = {
    args: {
        label: "Add label text",
        id: "avocado-selector-div",
        name: "avocado-selector-div",
        valueOne: "Option One",
        valueTwo: "Option Two",
        valueThree: "Option Three",
    }
}