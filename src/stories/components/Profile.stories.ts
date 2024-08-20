import type {Meta, StoryObj} from '@storybook/react';
import { Profile } from "../../components/Profile/index.tsx";

const meta: Meta ={
    title: 'Components/Profile',
    component: Profile,
    tags: ['autodocs'],
} satisfies Meta<typeof Profile>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
}