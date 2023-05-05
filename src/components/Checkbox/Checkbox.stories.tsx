import React from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

const Template = (args: CheckboxProps) => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
    label: 'Test Checkbox',
    id: '1',
    name: "name",
    value: "value",
    state: 'UNCHECKED',
};

export const Checked = Template.bind({});
Checked.args = {
    ...Unchecked.args,
    state: 'CHECKED',
};

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = {
    ...Unchecked.args,
    state: 'UNCHECKED_DISABLED',

};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
    ...Unchecked.args,
    state: 'CHECKED_DISABLED',
};