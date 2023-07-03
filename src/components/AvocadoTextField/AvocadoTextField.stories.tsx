import type { Meta, StoryObj } from '@storybook/react';
import AvocadoTextField from './AvocadoTextField';

const meta: Meta<typeof AvocadoTextField> = {
    title: 'Components/AvocadoTextField',
    component: AvocadoTextField,
    tags: ['autodocs'],
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoTextField>;


export const Primary: Story = {
    name: "Default",
    args: {
        label: "Add label text",
        id: "avocado-text-field",
        name: "avocado-text-field",
        placeholder: "Type here",
        value: "value"
    }
}