import type { Meta, StoryObj } from '@storybook/react';
import AvocadoSlider from './AvocadoSlider';

const meta: Meta<typeof AvocadoSlider> = {
    title: 'Components/AvocadoSlider',
    component: AvocadoSlider,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof AvocadoSlider>;


export const Primary: Story = {
    name: "Default",
    args: {
        id: "avocado-slider",
        name: "avocado-slider",
        min: 1,
        max: 100,
        step: 1,
    }
}