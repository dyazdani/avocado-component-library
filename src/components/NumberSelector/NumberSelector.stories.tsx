import type { Meta, StoryObj } from '@storybook/react';
import NumberSelector from './NumberSelector';

const meta: Meta<typeof NumberSelector> = {
    title: 'NumberSelector',
    component: NumberSelector,
}

export default meta;
type Story = StoryObj<typeof NumberSelector>;


export const Primary: Story = {
    args: {
        name: "avocado-number-selector",
        id: "avocado-number-selector"    
    }
}