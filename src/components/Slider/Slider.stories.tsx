import type { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';

const meta: Meta<typeof Slider> = {
    title: 'Slider',
    component: Slider,
}

export default meta;
type Story = StoryObj<typeof Slider>;


export const Primary: Story = {
    args: {
        id: "avocado-slider",
        name: "avocado-slider",
        min: 1,
        max: 100,
        step: 1,
    }
}