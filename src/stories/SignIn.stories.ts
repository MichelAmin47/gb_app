import type { Meta, StoryObj } from '@storybook/react';
import SignIn from "./SignIn";
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SignIn> = {
    component: SignIn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof SignIn>;

/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // 👇 Simulate interactions with the component
        await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

        await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

        // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
        await userEvent.click(canvas.getByRole('button'));

        // 👇 Assert DOM structure
        await expect(
            canvas.getByText(
                'Everything is perfect. Your account is ready and we should probably get you started!'
            )
        ).toBeInTheDocument();
    },
};

export const EmptyForm: Story = {};