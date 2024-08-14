import type {Meta, StoryObj} from '@storybook/react';
import {GridColors} from "./Colors.tsx";


const meta: Meta ={
    title: 'Tokens/Colors',
    component: GridColors,
    parameters: {
        layout: 'centered',
    },
    tags: ['!autodocs'],
} satisfies Meta<typeof GridColors>

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
    args: {},
};