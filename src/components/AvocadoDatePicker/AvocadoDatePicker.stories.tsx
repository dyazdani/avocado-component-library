import type { Meta, StoryObj } from '@storybook/react';
import AvocadoDatePicker from './AvocadoDatePicker';

const meta: Meta<typeof AvocadoDatePicker> = {
    title: 'Avocado Date Picker',
    component: AvocadoDatePicker,
}

export default meta;
type Story = StoryObj<typeof AvocadoDatePicker>;


export const Primary: Story = {
    args: {
        name: "avocado-date-picker",
        required: false
    }
}