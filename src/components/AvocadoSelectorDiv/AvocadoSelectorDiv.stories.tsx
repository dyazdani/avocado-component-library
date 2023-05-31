import type { Meta, StoryObj } from '@storybook/react';
import AvocadoSelectorDiv from './AvocadoSelectorDiv';

const meta: Meta<typeof AvocadoSelectorDiv> = {
    title: 'Avocado Selector Div',
    component: AvocadoSelectorDiv,
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoSelectorDiv>;


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