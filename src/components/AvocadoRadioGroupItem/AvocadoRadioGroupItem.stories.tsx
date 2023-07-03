import type { Meta, StoryObj } from '@storybook/react';
import AvocadoRadioGroupItem from './AvocadoRadioGroupItem';

const meta: Meta<typeof AvocadoRadioGroupItem> = {
    title: 'Components/AvocadoRadioGroupItem',
    component: AvocadoRadioGroupItem,
    tags: ['autodocs'],
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoRadioGroupItem>;


export const Primary: Story = {
    name: "Default",
    args: {
        label: "Add label text",
        id: "avocado-radio-group-item",
        name: "avocado-radio-group-item",
    }
}