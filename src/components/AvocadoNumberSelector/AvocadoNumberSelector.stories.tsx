import type { Meta, StoryObj } from '@storybook/react';
import AvocadoNumberSelector from './AvocadoNumberSelector';

const meta: Meta<typeof AvocadoNumberSelector> = {
    title: 'AvocadoNumberSelector',
    component: AvocadoNumberSelector,
}

export default meta;
type Story = StoryObj<typeof AvocadoNumberSelector>;


export const Primary: Story = {
    args: {
        name: "avocado-number-selector",
        id: "avocado-number-selector"    
    }
}