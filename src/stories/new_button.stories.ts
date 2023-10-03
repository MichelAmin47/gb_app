import type { Meta, StoryObj } from '@storybook/react';

import OutlinedButtons from './new_button'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof OutlinedButtons> = {
    component: OutlinedButtons,
};

export default meta;
type Story = StoryObj<typeof OutlinedButtons>;

export const FirstStory: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};