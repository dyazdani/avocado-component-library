import type { Meta, StoryObj } from '@storybook/react';
import AvocadoRadioGroupItem from './AvocadoRadioGroupItem';
import React from 'react';

const meta: Meta<typeof AvocadoRadioGroupItem> = {
    title: 'AvocadoRadioGroupItem',
    component: AvocadoRadioGroupItem,
}
                                             
export default meta;
type Story = StoryObj<typeof AvocadoRadioGroupItem>;



export const Primary: Story = {
    render: () => <AvocadoRadioGroupItem label="Avocado Radio Button" name="avocado-radio-group-item"/>
}

//TODO: can I get disabled story to work? The problem is this render does not make the input radio element have the disabled attribute, it affects the AvocadoRadioGroupItem component which is a <div></div>

// export const Disabled: Story = {
//     render: () => <AvocadoRadioGroupItem disabled={true} label="Avocado Radio Button" name="avocado-radio-group-item"/>
// }

export const Playground: Story = {
    args: {
        label: "Edit label text"
    }
}