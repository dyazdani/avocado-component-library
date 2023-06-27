import type { Meta, StoryObj } from '@storybook/react';
import AvocadoRadioGroup from './AvocadoRadioGroup';

const meta: Meta<typeof AvocadoRadioGroup> = {
    title: 'Components/AvocadoRadioGroup',
    component: AvocadoRadioGroup,
    tags: ['autodocs'],
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoRadioGroup>;


export const Primary: Story = {
    name: "Default",
    args: {
        name: "radio-group",
        legend: "Legend text here",
        idOne: "radio-group-item-one",
        labelOne: "Label text here",
        valueOne: "one",
        idTwo: "radio-group-item-two",
        labelTwo: "Label text here",
        valueTwo: "two",
        idThree: "radio-group-item-three",
        labelThree: "Label text here",
        valueThree: "three",
    }
}