import type { Meta, StoryObj } from '@storybook/react';
import AvocadoTextField from './AvocadoTextField';

const meta: Meta<typeof AvocadoTextField> = {
    title: 'AvocadoTextField',
    component: AvocadoTextField,
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoTextField>;


export const Primary: Story = {
    args: {
        label: "Add label text",
        id: "avocado-text-field-div",
        name: "avocado-text-field-div",
        placeholder: "Type here"
    }
}