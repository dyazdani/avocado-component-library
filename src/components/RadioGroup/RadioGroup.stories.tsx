import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
    title: 'RadioGroup',
    component: RadioGroup,
}
                                             
export default meta;
type Story = StoryObj<typeof RadioGroup>;


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