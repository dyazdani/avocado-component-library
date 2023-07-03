import type { Meta, StoryObj } from '@storybook/react';
import AvocadoButton from './AvocadoButton';
import React from 'react';

const meta: Meta<typeof AvocadoButton> = {
    title: 'Components/AvocadoButton',
    component: AvocadoButton,
    tags: ['autodocs'],
}


export default meta;
type Story = StoryObj<typeof AvocadoButton>;

export const Primary: Story = {
    render: () => <AvocadoButton type="submit" buttonText="Avocado Button"/>
}

export const Disabled: Story = {
    render: () => <AvocadoButton type="submit" buttonText="Avocado Button" disabled={true} />
}

export const ResetType: Story = {
    render: () => <AvocadoButton type="reset" buttonText="Avocado Button" />
}

export const ButtonType: Story = {
    render: () => <AvocadoButton type="button" buttonText="Avocado Button" />
}

export const Playground: Story = {
    args: {
        buttonText: "Enter label text"
    }
}