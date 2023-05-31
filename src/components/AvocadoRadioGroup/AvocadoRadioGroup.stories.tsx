import type { Meta, StoryObj } from '@storybook/react';
import AvocadoRadioGroup from './AvocadoRadioGroup';

const meta: Meta<typeof AvocadoRadioGroup> = {
    title: 'Avocado Radio Group',
    component: AvocadoRadioGroup,
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoRadioGroup>;


export const Primary: Story = {
    args: {
        name: "radio-div",
        legend: "Legend text here",
        idOne: "radio-div-one",
        labelOne: "Label text here",
        valueOne: "one",
        idTwo: "radio-div-two",
        labelTwo: "Label text here",
        valueTwo: "two",
        idThree: "radio-div-three",
        labelThree: "Label text here",
        valueThree: "three",
    }
}