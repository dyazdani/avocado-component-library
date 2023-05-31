import type { Meta, StoryObj } from '@storybook/react';
import AvocadoRadioDiv from './AvocadoRadioDiv';

const meta: Meta<typeof AvocadoRadioDiv> = {
    title: 'Avocado Radio Div',
    component: AvocadoRadioDiv,
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoRadioDiv>;


export const Primary: Story = {
    args: {
        label: "Add label text",
        id: "avocado-radio-div",
        name: "avocado-radio-div",
    }
}