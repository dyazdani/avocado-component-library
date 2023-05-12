import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
    title: 'DatePicker',
    component: DatePicker,
}

export default meta;
type Story = StoryObj<typeof DatePicker>;


export const Primary: Story = {
    args: {
        name: "avocado-date-picker",
        required: false
    }
}