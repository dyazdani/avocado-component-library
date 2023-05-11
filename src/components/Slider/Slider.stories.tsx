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
        
    }
}