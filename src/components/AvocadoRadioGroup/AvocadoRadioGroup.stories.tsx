import type { Meta, StoryObj } from '@storybook/react';
import AvocadoRadioGroup from './AvocadoRadioGroup';
import AvocadoRadioGroupItem from '../AvocadoRadioGroupItem/AvocadoRadioGroupItem';
import React from 'react';

const meta: Meta<typeof AvocadoRadioGroup> = {
    title: 'Components/AvocadoRadioGroup',
    component: AvocadoRadioGroup,
    tags: ['autodocs'],
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoRadioGroup>;

// TODO: HIGH how to get story to show RadioGroupItem when using the children prop
export const Primary: Story = {
    render: () => <AvocadoRadioGroup legend="Avocado Radio Group" name="avocado-radio-group"/>
}

export const Disabled: Story = {
    render: () => <AvocadoRadioGroup disabled={true} legend="Avocado Radio Group" name="avocado-radio-group"/>
}

export const Playground: Story = {
    args: {
        name: "radio-group",
        legend: "Legend text here",
    }
}

//TODO: Figure out how to pass props to children components in stories
export const OneItem: Story = {args: {
    name: "radio-group",
    legend: "Legend text here",
},
    render: (args) => (
      <AvocadoRadioGroup {...args}>
        <AvocadoRadioGroupItem id={''} name={''} label={''} />
      </AvocadoRadioGroup>
    ),
  };
  
  export const ManyItems: Story = {
    render: (args) => (
      <AvocadoRadioGroup {...args}>
        <AvocadoRadioGroupItem id={''} name={''} label={''} />
        <AvocadoRadioGroupItem id={''} name={''} label={''} />
        <AvocadoRadioGroupItem id={''} name={''} label={''} />
      </AvocadoRadioGroup>
    ),
  };