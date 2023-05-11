import type { Meta, StoryObj } from '@storybook/react';
import RadioDiv from './RadioDiv';

const meta: Meta<typeof RadioDiv> = {
    title: 'RadioDiv',
    component: RadioDiv,
}
                                             
export default meta;
type Story = StoryObj<typeof RadioDiv>;


export const Primary: Story = {
    args: {
        label: "Add label text",
        id: "avocado-radio-div",
        name: "avocado-radio-div",
    }
}