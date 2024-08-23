import type {Meta, StoryObj} from '@storybook/react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {
    faBuilding,
    faUserGroup
} from '@fortawesome/free-solid-svg-icons'


import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {InfoIcons} from "../../components/InfoIcons";

const iconMap: Record<string, IconDefinition> = {
    UserGroup: faUserGroup,
    Building: faBuilding,
    Github: faGithub,
};

const meta: Meta = {
    title: 'Components/Info',
    component: InfoIcons,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {type: 'radio'},
            options: ["2xl", "lg", "sm", "xs"]
        },
        icon: {
            control: {type: 'radio'},
            options: Object.keys(iconMap),
            mapping: iconMap
        }
    }
} satisfies Meta<typeof InfoIcons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "cameronwll",
        icon: "Github"
    },
}