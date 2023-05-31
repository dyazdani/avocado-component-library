import type { Meta, StoryObj } from '@storybook/react';
import AvocadoTextFieldDiv from './AvocadoTextFieldDiv';

const meta: Meta<typeof AvocadoTextFieldDiv> = {
    title: 'Avocado Text Field Div',
    component: AvocadoTextFieldDiv,
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoTextFieldDiv>;


export const Primary: Story = {
    args: {
        label: "Add label text",
        id: "avocado-text-field-div",
        name: "avocado-text-field-div",
        placeholder: "Type here"
    }
}