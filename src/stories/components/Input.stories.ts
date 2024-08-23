import type {Meta, StoryObj} from '@storybook/react';
import {Input} from "../../components/Form/Input.tsx";


const meta: Meta ={
    title: 'Form/Input',
    component: Input,
    args: {
        placeholder: 'Placeholder',
        type: 'text'
    },
    argTypes: {
        type: {
            control: {type: 'radio'},
            options: ['text', 'password', 'email', 'number']
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
}