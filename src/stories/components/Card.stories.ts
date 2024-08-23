import type {Meta, StoryObj} from '@storybook/react';
import {Card} from "../../components/Card";


const meta: Meta ={
    title: 'Components/Card',
    component: Card,
    args: {
        title: 'Card Title',
        time: '2 hours ago',
        description: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
}