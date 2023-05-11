import type { Meta, StoryObj } from '@storybook/react';
import TextFieldDiv from './TextFieldDiv';

const meta: Meta<typeof TextFieldDiv> = {
    title: 'TextFieldDiv',
    component: TextFieldDiv,
}
                                             
export default meta;
type Story = StoryObj<typeof TextFieldDiv>;


export const Primary: Story = {
    args: {
        label: "Add label text",
        id: "avocado-text-field-div",
        name: "avocado-text-field-div",
        placeholder: "Type here"
    }
}