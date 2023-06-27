import type { Meta, StoryObj } from '@storybook/react';
import AvocadoDatePicker from './AvocadoDatePicker';

const meta: Meta<typeof AvocadoDatePicker> = {
    title: 'Components/AvocadoDatePicker',
    component: AvocadoDatePicker,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof AvocadoDatePicker>;


export const Primary: Story = {
    name: "Default",
    args: {
        name: "avocado-date-picker",
        min: "",
        max: "",
        required: false,
        step: 1,
    }
}