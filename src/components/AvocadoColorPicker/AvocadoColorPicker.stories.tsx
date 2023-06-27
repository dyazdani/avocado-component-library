import type { Meta, StoryObj } from '@storybook/react';
import AvocadoColorPicker from './AvocadoColorPicker';

const meta: Meta<typeof AvocadoColorPicker> = {
    title: 'Components/AvocadoColorPicker',
    component: AvocadoColorPicker,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof AvocadoColorPicker>;


export const Primary: Story = {
    name: "Default",
    args: {
        name: "avocado-color-picker",
        id: "avocado-color-picker",
        value: "#74332c"
    }
}