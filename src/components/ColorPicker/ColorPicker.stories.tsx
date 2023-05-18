import type { Meta, StoryObj } from '@storybook/react';
import ColorPicker from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
    title: 'ColorPicker',
    component: ColorPicker,
}

export default meta;
type Story = StoryObj<typeof ColorPicker>;


export const Primary: Story = {
    args: {
        name: "avocado-color-picker",
        id: "avocado-color-picker",
        value: "#a9d04e"
    }
}