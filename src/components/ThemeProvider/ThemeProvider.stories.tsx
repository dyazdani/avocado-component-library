import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from './ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
    title: 'ThemeProvider',
    component: ThemeProvider,
}
                                             
export default meta;
type Story = StoryObj<typeof ThemeProvider>;


export const Primary: Story = {
    args: {
        label: "Add label text",
    }
}